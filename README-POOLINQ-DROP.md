# poolinq DROP - File Upload Application

A branded, authenticated file upload interface for hospitality users to submit monthly documents to poolinq.

## Features

- 🔐 Authentication via poolinq Strapi API
- 📁 Drag-and-drop file upload
- ☁️ Google Shared Drive integration
- 📊 Real-time upload progress tracking
- ✅ File validation (PDF, JPG, PNG, max 10MB)
- 🎨 poolinq brand design with green (#0CBA4A) theme

## Tech Stack

- **Frontend**: Vue 3 + Vite + TypeScript
- **UI Components**: poolinq Storybook components
- **Routing**: Vue Router
- **API**: Netlify Functions (serverless)
- **Storage**: Google Shared Drive
- **Styling**: SCSS with Roboto font

## Project Structure

```
code/
├── src/
│   ├── components/
│   │   ├── FileUploadItem.vue      # File upload list item
│   │   └── Inputs/                  # Storybook input components
│   ├── pages/
│   │   ├── Login.vue                # Login page
│   │   └── Upload.vue               # File upload page
│   ├── services/
│   │   ├── auth.ts                  # Authentication service
│   │   └── upload.ts                # Upload service
│   ├── router/
│   │   └── index.ts                 # Vue Router configuration
│   └── stories/                     # Storybook components
├── netlify/
│   └── functions/
│       └── upload.ts                # Google Drive upload endpoint
└── netlify.toml                     # Netlify configuration
```

## Setup Instructions

### 1. Install Dependencies

```bash
cd code
yarn install
```

### 2. Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# API Configuration
VITE_API_BASE=https://dev.poolinq.io

# Google Drive Configuration (Server-side only)
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
GOOGLE_FOLDER_ROOT=your-google-drive-folder-id
```

**Important**: Google credentials should ONLY be set in your deployment platform's environment variables, never commit them to the repository.

### 3. Google Service Account Setup

1. Create a Google Cloud Project
2. Enable Google Drive API
3. Create a Service Account
4. Download the JSON key file
5. Extract `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
6. Extract `private_key` → `GOOGLE_PRIVATE_KEY`
7. Create a Google Shared Drive folder
8. Share the folder with the service account email
9. Get the folder ID from the URL → `GOOGLE_FOLDER_ROOT`

### 4. Run Development Server

```bash
yarn dev
```

The app will be available at `http://localhost:8080`

### 5. Build for Production

```bash
yarn build
```

## Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Set build command: `yarn build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard:
   - `VITE_API_BASE`
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_FOLDER_ROOT`

### Vercel

The serverless functions are written for Netlify. For Vercel, you'll need to:

1. Adapt `netlify/functions/upload.ts` to Vercel's API routes format
2. Move to `api/upload.ts`
3. Update imports and exports accordingly

## Authentication Flow

1. User enters credentials on login page
2. Frontend calls poolinq Strapi API: `POST /strapi/api/auth/local`
3. On success, JWT token is stored in `localStorage` as `poolinq_token`
4. Protected routes check for token presence
5. Upload requests include `Authorization: Bearer ${token}` header

## File Upload Flow

1. User selects/drops files
2. Files are validated (type, size)
3. Each file is uploaded individually to `/api/upload`
4. Server uploads to Google Shared Drive using service account
5. Real-time progress feedback shown to user
6. Completed/failed uploads displayed with status

## File Validation

- **Allowed formats**: PDF, JPG, PNG
- **Max file size**: 10MB
- **Multiple files**: Supported

## API Endpoints

### POST /api/upload

Upload a file to Google Shared Drive.

**Headers**:
- `Authorization: Bearer ${token}` (required)
- `Content-Type: multipart/form-data`

**Request Body**:
- `file`: File to upload

**Response**:
```json
{
  "success": true,
  "fileId": "google-drive-file-id",
  "fileName": "uploaded-file.pdf",
  "fileUrl": "https://drive.google.com/..."
}
```

## Development Notes

- The app uses poolinq Storybook components (`BasicButton`, `TextInputVariant`)
- Brand colors are defined as CSS variables in `App.vue`
- Roboto font is loaded from Google Fonts
- All API credentials stay server-side for security

## Troubleshooting

### Upload fails with "Server configuration error"
- Ensure all Google environment variables are set correctly
- Verify the service account has access to the shared drive

### Authentication fails
- Check that `VITE_API_BASE` points to the correct poolinq API
- Verify credentials with poolinq support

### Files not uploading
- Check browser console for errors
- Verify file meets validation criteria (type, size)
- Ensure user is authenticated (token in localStorage)

## License

MIT
