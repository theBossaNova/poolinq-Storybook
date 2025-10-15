<template>
  <div :class="['file-item', `file-item--${status}`]">
    <div class="file-icon">
      <svg v-if="status === 'completed'" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8 14L4 10L5.4 8.6L8 11.2L14.6 4.6L16 6L8 14Z" fill="#0CBA4A"/>
      </svg>
      <svg v-else-if="status === 'error'" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#DC3545"/>
      </svg>
      <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M14 2H6C4.9 2 4 2.9 4 4V16C4 17.1 4.9 18 6 18H14C15.1 18 16 17.1 16 16V4C16 2.9 15.1 2 14 2ZM6 16V4H14V16H6Z" fill="#E6E1F3"/>
      </svg>
    </div>

    <div class="file-info">
      <div class="file-name">{{ fileName }}</div>
      <div v-if="errorMessage" class="file-error">{{ errorMessage }}</div>
    </div>

    <div class="file-status">
      <div v-if="status === 'uploading'" class="progress-bar">
        <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
      </div>
      <div v-else-if="status === 'completed'" class="status-text completed">{{ progress }}%</div>
      <div v-else-if="status === 'pending'" class="status-text pending">
        <svg class="spinner" width="16" height="16" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="6" stroke="#9798A5" stroke-width="2" fill="none" stroke-dasharray="28" stroke-dashoffset="14" />
        </svg>
      </div>
      <div v-else-if="status === 'error'" class="status-text error">Error</div>
    </div>

    <button v-if="status === 'error' || status === 'completed'" class="remove-btn" @click="$emit('remove')">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M12.6 4.6L11.4 3.4L8 6.8L4.6 3.4L3.4 4.6L6.8 8L3.4 11.4L4.6 12.6L8 9.2L11.4 12.6L12.6 11.4L9.2 8L12.6 4.6Z" fill="#9798A5"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  fileName: string;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  progress: number;
  errorMessage?: string;
}>();

defineEmits<{
  (event: 'remove'): void;
}>();
</script>

<style lang="scss" scoped>
.file-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 6px;
  background: var(--Neutral-Grey-300, #222325);
  border: 1px solid var(--Neutral-Grey-250, #363A3E);
  transition: all 0.2s ease;

  &--uploading {
    border-color: var(--Primary-500, #0CBA4A);
  }

  &--completed {
    border-color: var(--Primary-500, #0CBA4A);
    background: rgba(12, 186, 74, 0.1);
  }

  &--error {
    border-color: #DC3545;
    background: rgba(220, 53, 69, 0.1);
  }
}

.file-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
  }
}

.file-info {
  flex: 1;
  min-width: 0;
}

.file-name {
  color: var(--Neutral-Grey-100, #E6E1F3);
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-error {
  color: #DC3545;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  margin-top: 4px;
}

.file-status {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 60px;
}

.progress-bar {
  width: 100px;
  height: 4px;
  background: var(--Neutral-Grey-250, #363A3E);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--Primary-500, #0CBA4A);
  transition: width 0.3s ease;
}

.status-text {
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 500;

  &.completed {
    color: var(--Primary-500, #0CBA4A);
  }

  &.error {
    color: #DC3545;
  }

  &.pending {
    display: flex;
    align-items: center;
  }
}

.spinner {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.remove-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
}
</style>
