<template>
  <div 
    class="drop-area" 
    :class="{ 'drop-area--dragover': state === 'dragOver' }"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @drop.prevent="onDrop"
  >
    <div class="drop-area__content">
      <div class="drop-area__icon">
        <svg width="117" height="100" viewBox="0 0 117 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M109.5 100H7.5C3.35786 100 0 96.6421 0 92.5V25C0 20.8579 3.35786 17.5 7.5 17.5H41.25L50 7.5H75L83.75 17.5H109.5C113.642 17.5 117 20.8579 117 25V92.5C117 96.6421 113.642 100 109.5 100Z" :fill="state === 'dragOver' ? '#0CBA4A' : '#0E5F2D'"/>
          <path d="M41.25 17.5H7.5C3.35786 17.5 0 20.8579 0 25V17.5C0 13.3579 3.35786 10 7.5 10H33.75L41.25 17.5Z" :fill="state === 'dragOver' ? '#084722' : '#69D091'"/>
        </svg>
      </div>
      <p class="drop-area__text">{{ dragText }}</p>
    </div>
    <div class="drop-area__button-wrapper">
      <BasicButton
        class="drop-area__button"
        :primary="true"
        size="large"
        :label="buttonText"
        @click="onSelectFiles"
      />
    </div>
    <input
      ref="fileInput"
      type="file"
      class="drop-area__input"
      multiple
      @change="onFileSelect"
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BasicButton from '@/stories/BasicButton.vue';

interface Props {
  state?: 'default' | 'dragOver';
  dragText?: string;
  buttonText?: string;
}

interface Emits {
  (event: 'files-selected', files: FileList): void;
  (event: 'drag-over'): void;
  (event: 'drag-leave'): void;
}

const props = withDefaults(defineProps<Props>(), {
  state: 'default',
  dragText: 'Ziehe deine Dateien hier hin',
  buttonText: 'DATEIEN AUSWÄHLEN',
});

const emit = defineEmits<Emits>();

const fileInput = ref<HTMLInputElement | null>(null);

const onDragOver = () => {
  emit('drag-over');
};

const onDragLeave = () => {
  emit('drag-leave');
};

const onDrop = (e: DragEvent) => {
  if (e.dataTransfer?.files) {
    emit('files-selected', e.dataTransfer.files);
  }
  emit('drag-leave');
};

const onSelectFiles = () => {
  fileInput.value?.click();
};

const onFileSelect = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files) {
    emit('files-selected', target.files);
  }
};
</script>

<style lang="scss" scoped>
.drop-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 48px 32px;
  width: min(100%, 680px);
  border-radius: 16px;
  border: 2px solid #262626;
  background: #1b1c1f;
  transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  min-height: 300px;

  &--dragover {
    background: #101113;
    border-color: #0CBA4A;
    box-shadow: 0 0 0 2px rgba(12, 186, 74, 0.25);
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: clamp(72px, 25vw, 117px);
      height: auto;
    }
  }

  &__text {
    color: #c7c9cd;
    text-align: center;
    font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin: 0;

    .drop-area--dragover & {
      color: #f1f6f3;
    }
  }

  &__button-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__input {
    display: none;
  }

  :deep(.drop-area__button.storybook-button) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 16px 32px 16px 56px;
    background-color: #0CBA4A;
    font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 8px;
    position: relative;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #0aa844;
    }

    &::before {
      content: "";
      position: absolute;
      left: 24px;
      width: 24px;
      height: 24px;
      background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2724%27%20height%3D%2724%27%20viewBox%3D%270%200%2024%2024%27%20fill%3D%27none%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cpath%20d%3D%27M11%2016V6.8L7.4%2010.4L6%209L12%203L18%209L16.6%2010.4L13%206.8V16H11Z%27%20fill%3D%27white%27/%3E%3Cpath%20d%3D%27M4.24609%2021V18.75H19.7538V21H4.24609Z%27%20fill%3D%27white%27/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}

@media (max-width: 768px) {
  .drop-area {
    padding: 32px 24px;
    gap: 20px;
    min-height: 260px;

    :deep(.drop-area__button.storybook-button) {
      padding: 12px 24px 12px 52px;
      font-size: 13px;
    }
  }
}
</style>
