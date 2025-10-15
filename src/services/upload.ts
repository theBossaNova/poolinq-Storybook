import axios from 'axios';
import { AuthService } from './auth';

const API_BASE = import.meta.env.VITE_API_BASE || '';

export interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

export interface UploadResult {
  success: boolean;
  fileId: string;
  fileName: string;
  fileUrl: string;
}

export class UploadService {
  static async uploadFile(
    file: File,
    onProgress?: (progress: UploadProgress) => void
  ): Promise<UploadResult> {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post<UploadResult>(
        `${API_BASE}/api/upload`,
        formData,
        {
          headers: {
            ...AuthService.getAuthHeader(),
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            if (onProgress && progressEvent.total) {
              const percentage = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              onProgress({
                loaded: progressEvent.loaded,
                total: progressEvent.total,
                percentage,
              });
            }
          },
        }
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.error || 'Upload failed');
      }
      throw error;
    }
  }
}
