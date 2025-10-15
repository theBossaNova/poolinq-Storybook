<template>
  <div class="upload-page">
    <div class="topbar">
      <div class="product-name">DROP</div>
      <div class="controls">
        <div class="user-info">
          <div class="user-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.375C5.376 0.375 0 5.583 0 12C0 18.417 5.376 23.625 12 23.625C18.624 23.625 24 18.417 24 12C24 5.583 18.624 0.375 12 0.375ZM19.632 17.6149C17.916 15.5921 13.752 14.9062 12 14.9062C10.248 14.9062 6.084 15.5921 4.368 17.6149C3.144 16.0571 2.4 14.1158 2.4 12C2.4 6.87337 6.708 2.7 12 2.7C17.292 2.7 21.6 6.87337 21.6 12C21.6 14.1158 20.856 16.0571 19.632 17.6149ZM7.5 10.5469C7.5 8.13054 9.50571 6.1875 12 6.1875C14.4943 6.1875 16.5 8.13054 16.5 10.5469C16.5 12.9632 14.4943 14.9062 12 14.9062C9.50571 14.9062 7.5 12.9632 7.5 10.5469Z" fill="#0CBA4A"/>
            </svg>
          </div>
          <div class="user-label">{{ username }}</div>
        </div>
        <button class="logout-info" @click="handleLogout">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1C9 1.28333 8.90417 1.52083 8.7125 1.7125C8.52083 1.90417 8.28333 2 8 2H2V16H8C8.28333 16 8.52083 16.0958 8.7125 16.2875C8.90417 16.4792 9 16.7167 9 17C9 17.2833 8.90417 17.5208 8.7125 17.7125C8.52083 17.9042 8.28333 18 8 18H2ZM14.175 10H7C6.71667 10 6.47917 9.90417 6.2875 9.7125C6.09583 9.52083 6 9.28333 6 9C6 8.71667 6.09583 8.47917 6.2875 8.2875C6.47917 8.09583 6.71667 8 7 8H14.175L12.3 6.125C12.1167 5.94167 12.025 5.71667 12.025 5.45C12.025 5.18333 12.1167 4.95 12.3 4.75C12.4833 4.55 12.7167 4.44583 13 4.4375C13.2833 4.42917 13.525 4.525 13.725 4.725L17.3 8.3C17.5 8.5 17.6 8.73333 17.6 9C17.6 9.26667 17.5 9.5 17.3 9.7L13.725 13.275C13.525 13.475 13.2875 13.5708 13.0125 13.5625C12.7375 13.5542 12.5 13.45 12.3 13.25C12.1167 13.05 12.0292 12.8125 12.0375 12.5375C12.0458 12.2625 12.1417 12.0333 12.325 11.85L14.175 10Z" fill="#0CBA4A"/>
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>

    <div class="content">
      <div class="upload-section">
        <h1 class="title">DOKUMENTE HOCHLADEN</h1>
        <p class="subtitle">Lade Dokumente des letzten Monats hoch.<br>Die Dateien werden sicher in deinem Cloud Ordner gespeichert</p>

        <div class="month-selector">
          <select v-model="selectedMonth" class="month-select">
            <option value="01">Januar</option>
            <option value="02">Februar</option>
            <option value="03">März</option>
            <option value="04">April</option>
            <option value="05">Mai</option>
            <option value="06">Juni</option>
            <option value="07">Juli</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">Oktober</option>
            <option value="11">November</option>
            <option value="12">Dezember</option>
          </select>
        </div>

        <div 
          class="dropzone"
          :class="{ 'dropzone--active': isDragging }"
          @dragenter.prevent="onDragEnter"
          @dragover.prevent="onDragOver"
          @dragleave.prevent="onDragLeave"
          @drop.prevent="onDrop"
        >
          <div class="dropzone-content">
            <svg class="folder-icon" width="120" height="100" viewBox="0 0 120 100" fill="none">
              <path d="M108 16H54L42 4H12C5.4 4 0.06 9.4 0.06 16L0 84C0 90.6 5.4 96 12 96H108C114.6 96 120 90.6 120 84V28C120 21.4 114.6 16 108 16Z" fill="#0CBA4A"/>
            </svg>
            <p class="dropzone-text">Ziehe deine Dateien hier hin</p>
            <input 
              ref="fileInput" 
              type="file" 
              multiple 
              accept=".pdf,.jpg,.jpeg,.png"
              @change="onFileSelect"
              style="display: none;"
            />
            <BasicButton
              label="DATEIEN AUSWÄHLEN"
              :primary="true"
              size="medium"
              @click="openFileDialog"
            />
          </div>
        </div>

        <div v-if="files.length > 0" class="file-list">
          <div class="file-list-header">{{ files.length }}/{{ files.length }} Hochgeladen</div>
          <FileUploadItem
            v-for="file in files"
            :key="file.id"
            :file-name="file.name"
            :status="file.status"
            :progress="file.progress"
            :error-message="file.error"
            @remove="removeFile(file.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import BasicButton from '@/stories/BasicButton.vue';
import FileUploadItem from '@/components/FileUploadItem.vue';
import { AuthService } from '@/services/auth';
import { UploadService } from '@/services/upload';

const router = useRouter();
const fileInput = ref<HTMLInputElement | null>(null);
const isDragging = ref(false);
const selectedMonth = ref(new Date().toISOString().slice(5, 7));

interface FileItem {
  id: string;
  name: string;
  file: File;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  progress: number;
  error?: string;
}

const files = ref<FileItem[]>([]);

const username = computed(() => {
  const user = AuthService.getUser();
  return user?.username || '<Username>';
});

onMounted(() => {
  if (!AuthService.isAuthenticated()) {
    router.push('/');
  }
});

const handleLogout = () => {
  AuthService.logout();
  router.push('/');
};

const openFileDialog = () => {
  fileInput.value?.click();
};

const validateFile = (file: File): string | null => {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];

  if (!allowedTypes.includes(file.type)) {
    return 'Ungültiger Dateityp. Nur PDF, JPG und PNG sind erlaubt.';
  }

  if (file.size > maxSize) {
    return 'Datei zu groß. Maximale Größe: 10MB';
  }

  return null;
};

const addFiles = (fileList: FileList | File[]) => {
  const newFiles = Array.from(fileList).map((file) => {
    const error = validateFile(file);
    return {
      id: `${Date.now()}-${Math.random()}`,
      name: file.name,
      file,
      status: error ? ('error' as const) : ('pending' as const),
      progress: 0,
      error,
    };
  });

  files.value.push(...newFiles);

  // Start uploading valid files
  newFiles.forEach((fileItem) => {
    if (fileItem.status === 'pending') {
      uploadFile(fileItem);
    }
  });
};

const uploadFile = async (fileItem: FileItem) => {
  fileItem.status = 'uploading';
  fileItem.progress = 0;

  try {
    await UploadService.uploadFile(fileItem.file, (progress) => {
      fileItem.progress = progress.percentage;
    });

    fileItem.status = 'completed';
    fileItem.progress = 100;
  } catch (error: any) {
    fileItem.status = 'error';
    fileItem.error = error.message || 'Upload fehlgeschlagen';
  }
};

const removeFile = (id: string) => {
  files.value = files.value.filter((f) => f.id !== id);
};

const onFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    addFiles(target.files);
    target.value = '';
  }
};

const onDragEnter = () => {
  isDragging.value = true;
};

const onDragOver = () => {
  isDragging.value = true;
};

const onDragLeave = (e: DragEvent) => {
  if (e.target === e.currentTarget) {
    isDragging.value = false;
  }
};

const onDrop = (e: DragEvent) => {
  isDragging.value = false;
  if (e.dataTransfer?.files) {
    addFiles(e.dataTransfer.files);
  }
};
</script>

<style lang="scss" scoped>
.upload-page {
  min-height: 100vh;
  background: var(--Neutral-Grey-400, #1B1B1C);
  display: flex;
  flex-direction: column;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid var(--Neutral-Grey-300, #222325);
}

.product-name {
  color: var(--Neutral-White, #FFF);
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 110%;
  text-transform: uppercase;
}

.controls {
  display: flex;
  align-items: center;
  gap: 32px;
}

.user-info,
.logout-info {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid var(--Neutral-Grey-250, #363A3E);
  background: linear-gradient(180deg, var(--Neutral-Grey-400, #1B1B1C) 0%, rgba(0, 0, 0, 0.2) 100%);
}

.user-info {
  padding-left: 10px;
}

.logout-info {
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--Neutral-Grey-250, #363A3E);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(12, 186, 74, 0.1);
    border-color: var(--Primary-500, #0CBA4A);
  }

  span {
    color: var(--Neutral-Grey-100, #E6E1F3);
    font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
}

.user-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.user-label {
  color: var(--Neutral-Grey-100, #E6E1F3);
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 32px 24px;
}

.upload-section {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.title {
  color: var(--Neutral-White, #FFF);
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 120%;
  text-align: center;
  margin: 0;
}

.subtitle {
  color: var(--Neutral-Grey-100, #E6E1F3);
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  text-align: center;
  margin: 0;
}

.month-selector {
  width: 100%;
  max-width: 300px;
}

.month-select {
  width: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid var(--Neutral-Grey-250, #363A3E);
  background: var(--Neutral-Grey-300, #222325);
  color: var(--Neutral-Grey-100, #E6E1F3);
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--Primary-500, #0CBA4A);
  }
}

.dropzone {
  width: 100%;
  min-height: 400px;
  border: 2px dashed var(--Neutral-Grey-250, #363A3E);
  border-radius: 12px;
  background: rgba(34, 35, 37, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 40px;

  &--active {
    border-color: var(--Primary-500, #0CBA4A);
    background: rgba(12, 186, 74, 0.1);
  }
}

.dropzone-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.folder-icon {
  width: 120px;
  height: 100px;
}

.dropzone-text {
  color: var(--Neutral-Grey-100, #E6E1F3);
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin: 0;
}

.file-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.file-list-header {
  color: var(--Neutral-Grey-100, #E6E1F3);
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 0;
}

@media (max-width: 768px) {
  .topbar {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }

  .controls {
    justify-content: space-between;
  }

  .title {
    font-size: 24px;
  }

  .dropzone {
    min-height: 300px;
    padding: 20px;
  }
}
</style>
