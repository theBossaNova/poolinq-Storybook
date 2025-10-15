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
import BasicButton from '../../stories/BasicButton.vue';

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
  gap: 24px;
  padding: 48px 32px;
  border-radius: 12px;
  border: 2px dashed rgba(255, 255, 255, 0.3);
  background: #F5F5F5;
  transition: all 0.3s ease;
  position: relative;
  min-height: 300px;

  &--dragover {
    background: #1A1A1A;
    border-color: #0CBA4A;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__text {
    color: #FFF;
    text-align: center;
    font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin: 0;
  }

  &__button {
    display: flex;
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    background: #0CBA4A;
    border: none;
    color: #FFF;
    text-align: center;
    font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background: #0AA844;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  &__input {
    display: none;
  }
}

@media (max-width: 768px) {
  .drop-area {
    padding: 32px 24px;
    min-height: 250px;

    &__button {
      padding: 12px 24px;
      font-size: 12px;
    }
  }
}
</style>
