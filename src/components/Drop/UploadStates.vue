<template>
  <div class="upload-state" :class="`upload-state--${status}`">
    <div class="upload-state__icon">
      <svg v-if="status !== 'success'" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6668 2.02603V7.53342C14.6668 8.28015 14.6668 8.65352 14.8122 8.93874C14.94 9.18962 15.144 9.39359 15.3948 9.52142C15.6801 9.66675 16.0534 9.66675 16.8002 9.66675H22.3075M22.6668 12.3177V21.9334C22.6668 24.1736 22.6668 25.2937 22.2309 26.1494C21.8474 26.902 21.2354 27.5139 20.4828 27.8974C19.6271 28.3334 18.507 28.3334 16.2668 28.3334H7.7335C5.49329 28.3334 4.37318 28.3334 3.51753 27.8974C2.76489 27.5139 2.15296 26.902 1.76947 26.1494C1.3335 25.2937 1.3335 24.1736 1.3335 21.9334V8.06675C1.3335 5.82654 1.3335 4.70643 1.76947 3.85079C2.15296 3.09814 2.76489 2.48622 3.51753 2.10272C4.37318 1.66675 5.49329 1.66675 7.7335 1.66675H12.0159C12.9942 1.66675 13.4834 1.66675 13.9438 1.77727C14.3519 1.87526 14.7421 2.03687 15.1 2.25619C15.5036 2.50355 15.8495 2.84946 16.5413 3.54126L20.7923 7.79223C21.4841 8.48404 21.83 8.82994 22.0774 9.23361C22.2967 9.5915 22.4583 9.98168 22.5563 10.3898C22.6668 10.8502 22.6668 11.3394 22.6668 12.3177Z" 
          :stroke="iconColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"/>
      </svg>
      <svg v-else width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 17.3334L13.9957 22.6667L25.941 8.57153" stroke="#0CBA4A" stroke-width="2.1"/>
      </svg>
    </div>

    <div class="upload-state__content">
      <div class="upload-state__header">
        <p class="upload-state__filename">{{ filename }}</p>
        
        <div class="upload-state__actions">
          <!-- Uploading state -->
          <template v-if="status === 'uploading'">
            <span class="upload-state__progress-text">{{ progressLabel }}</span>
            <button class="upload-state__action-btn" @click="$emit('cancel')" aria-label="Cancel upload">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33317 11.8334L0.166504 10.6667L4.83317 6.00008L0.166504 1.33341L1.33317 0.166748L5.99984 4.83341L10.6665 0.166748L11.8332 1.33341L7.1665 6.00008L11.8332 10.6667L10.6665 11.8334L5.99984 7.16675L1.33317 11.8334Z" fill="#495057"/>
              </svg>
            </button>
          </template>

          <!-- Success state -->
          <template v-if="status === 'success'">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 17.3334L13.9957 22.6667L25.941 8.57153" stroke="#0CBA4A" stroke-width="2.1"/>
            </svg>
          </template>

          <!-- Pending state -->
          <template v-if="status === 'pending'">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 5V11L15 13M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#363A3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>

          <!-- Error state -->
          <template v-if="status === 'error'">
            <div class="upload-state__error-label">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00016 13.6666C7.07794 13.6666 6.21127 13.4916 5.40016 13.1416C4.58905 12.7916 3.8835 12.3166 3.2835 11.7166C2.6835 11.1166 2.2085 10.411 1.8585 9.59992C1.5085 8.78881 1.3335 7.92214 1.3335 6.99992C1.3335 6.0777 1.5085 5.21103 1.8585 4.39992C2.2085 3.58881 2.6835 2.88325 3.2835 2.28325C3.8835 1.68325 4.58905 1.20825 5.40016 0.858252C6.21127 0.508252 7.07794 0.333252 8.00016 0.333252C8.92239 0.333252 9.78905 0.508252 10.6002 0.858252C11.4113 1.20825 12.1168 1.68325 12.7168 2.28325C13.3168 2.88325 13.7918 3.58881 14.1418 4.39992C14.4918 5.21103 14.6668 6.0777 14.6668 6.99992C14.6668 7.92214 14.4918 8.78881 14.1418 9.59992C13.7918 10.411 13.3168 11.1166 12.7168 11.7166C12.1168 12.3166 11.4113 12.7916 10.6002 13.1416C9.78905 13.4916 8.92239 13.6666 8.00016 13.6666ZM7.3335 7.66659V3.66658H8.66683V7.66659H7.3335ZM8.47516 10.1416C8.34738 10.2694 8.18905 10.3333 8.00016 10.3333C7.81127 10.3333 7.65294 10.2694 7.52516 10.1416C7.39739 10.0138 7.3335 9.85547 7.3335 9.66659C7.3335 9.4777 7.39739 9.31936 7.52516 9.19159C7.65294 9.06381 7.81127 8.99992 8.00016 8.99992C8.18905 8.99992 8.34738 9.06381 8.47516 9.19159C8.60294 9.31936 8.66683 9.4777 8.66683 9.66659C8.66683 9.85547 8.60294 10.0138 8.47516 10.1416Z" fill="#FFC107"/>
              </svg>
              <span>Error</span>
            </div>
            <button class="upload-state__action-btn" @click="$emit('retry')" aria-label="Retry upload">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.6638 4.88235C12.7352 1.95375 7.98584 1.95375 5.05724 4.88235L3.28947 3.11458L3.28947 7.69899L3.24822 7.82273L8.00352 7.82863L6.23575 6.06086C8.51617 3.78044 12.2049 3.78044 14.4853 6.06086C16.7657 8.34128 16.7657 12.03 14.4853 14.3104C12.2049 16.5909 8.51617 16.5909 6.23575 14.3104C5.09849 13.1732 4.5328 11.6765 4.53869 10.1856L2.86521 10.1856C2.86521 12.1066 3.58999 14.0217 5.05724 15.4889C7.98584 18.4175 12.7352 18.4175 15.6638 15.4889C18.5924 12.5603 18.5924 7.81095 15.6638 4.88235Z" fill="#495057"/>
              </svg>
            </button>
            <button class="upload-state__action-btn" @click="$emit('cancel')" aria-label="Remove upload">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33317 11.8334L0.166504 10.6667L4.83317 6.00008L0.166504 1.33341L1.33317 0.166748L5.99984 4.83341L10.6665 0.166748L11.8332 1.33341L7.1665 6.00008L11.8332 10.6667L10.6665 11.8334L5.99984 7.16675L1.33317 11.8334Z" fill="#495057"/>
              </svg>
            </button>
          </template>
        </div>
      </div>

      <!-- Progress bar for uploading and error states -->
      <div v-if="status === 'uploading' || status === 'error'" class="upload-state__progress-bar">
        <div class="upload-state__progress-fill"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  status: 'uploading' | 'success' | 'pending' | 'error';
  filename: string;
  progress?: number;
}

interface Emits {
  (event: 'cancel'): void;
  (event: 'retry'): void;
}

const props = withDefaults(defineProps<Props>(), {
  progress: 0,
});

defineEmits<Emits>();

const iconColor = computed(() => {
  switch (props.status) {
    case 'uploading':
    case 'success':
      return '#0CBA4A';
    case 'error':
      return '#FFC107';
    case 'pending':
    default:
      return '#495057';
  }
});

const clampedProgress = computed(() => {
  const value = Number.isFinite(props.progress) ? Number(props.progress) : 0;
  return Math.min(100, Math.max(0, value));
});

const progressWidth = computed(() => `${clampedProgress.value}%`);
const progressLabel = computed(() => `${Math.round(clampedProgress.value)}%`);
</script>

<style lang="scss" scoped>
.upload-state {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 8px;
  background: #1A1A1A;
  transition: background-color 0.2s ease;

  &--pending {
    background: #F5F5F5;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    min-width: 0;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  &__filename {
    color: #FFF;
    font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .upload-state--pending & {
      color: #495057;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }

  &__progress-text {
    color: #0CBA4A;
    font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    min-width: 40px;
    text-align: right;
  }

  &__action-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &__error-label {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      width: 16px;
      height: 16px;
    }

    span {
      color: #FFC107;
      font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
    }
  }

  &__progress-bar {
    height: 6px;
    border-radius: 3px;
    background: rgba(12, 186, 74, 0.25);
    overflow: hidden;
    position: relative;

    .upload-state--error & {
      background: #3C3623;
    }
  }

  &__progress-fill {
    height: 100%;
    border-radius: 3px;
    background: #0CBA4A;
    transition: width 0.3s ease;

    .upload-state--error & {
      background: #FFC107;
    }
  }
}

@media (max-width: 768px) {
  .upload-state {
    padding: 12px 16px;

    &__filename {
      font-size: 13px;
    }

    &__actions {
      gap: 8px;
    }
  }
}
</style>
