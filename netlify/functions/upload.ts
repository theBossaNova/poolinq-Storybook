import { Handler, HandlerEvent } from '@netlify/functions';
import { google } from 'googleapis';
import { Readable } from 'stream';
import * as busboy from 'busboy';

const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const GOOGLE_FOLDER_ROOT = process.env.GOOGLE_FOLDER_ROOT;

interface UploadedFile {
  filename: string;
  data: Buffer;
  mimeType: string;
}

const parseMultipartForm = (event: HandlerEvent): Promise<UploadedFile[]> => {
  return new Promise((resolve, reject) => {
    const files: UploadedFile[] = [];
    const contentType = event.headers['content-type'] || event.headers['Content-Type'];
    
    if (!contentType) {
      reject(new Error('No content-type header'));
      return;
    }

    const bb = busboy({ headers: { 'content-type': contentType } });

    bb.on('file', (fieldname, file, info) => {
      const { filename, mimeType } = info;
      const chunks: Buffer[] = [];

      file.on('data', (data) => {
        chunks.push(data);
      });

      file.on('end', () => {
        files.push({
          filename,
          data: Buffer.concat(chunks),
          mimeType,
        });
      });
    });

    bb.on('finish', () => {
      resolve(files);
    });

    bb.on('error', (err) => {
      reject(err);
    });

    const body = event.isBase64Encoded
      ? Buffer.from(event.body || '', 'base64')
      : Buffer.from(event.body || '', 'utf-8');

    bb.write(body);
    bb.end();
  });
};

const uploadToGoogleDrive = async (
  file: UploadedFile,
  auth: any
): Promise<{ fileId: string; fileName: string; fileUrl: string }> => {
  const drive = google.drive({ version: 'v3', auth });

  const fileMetadata = {
    name: file.filename,
    parents: [GOOGLE_FOLDER_ROOT],
  };

  const media = {
    mimeType: file.mimeType,
    body: Readable.from(file.data),
  };

  const response = await drive.files.create({
    requestBody: fileMetadata,
    media: media,
    fields: 'id, name, webViewLink',
  });

  return {
    fileId: response.data.id || '',
    fileName: response.data.name || file.filename,
    fileUrl: response.data.webViewLink || '',
  };
};

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Verify authentication
  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' }),
    };
  }

  // Validate environment variables
  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_FOLDER_ROOT) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server configuration error' }),
    };
  }

  try {
    // Parse the multipart form data
    const files = await parseMultipartForm(event);

    if (files.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'No file uploaded' }),
      };
    }

    // Setup Google Auth
    const auth = new google.auth.JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    // Upload the first file (for simplicity, handling one file at a time)
    const uploadedFile = files[0];
    const result = await uploadToGoogleDrive(uploadedFile, auth);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        ...result,
      }),
    };
  } catch (error: any) {
    console.error('Upload error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message || 'Upload failed',
      }),
    };
  }
};
