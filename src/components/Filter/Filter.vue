<template>
  <div :class="containerClasses">
    <div class="filter__header" @click="toggleOpen">
      <div class="filter__header-content">
        <svg
          class="filter__icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.82158 4.72239C2.1913 4.01796 1.87615 3.66574 1.86427 3.3664C1.85394 3.10636 1.96569 2.85643 2.16636 2.69074C2.39737 2.5 2.86999 2.5 3.81524 2.5H16.1843C17.1296 2.5 17.6022 2.5 17.8332 2.69074C18.0339 2.85643 18.1456 3.10636 18.1353 3.3664C18.1234 3.66574 17.8083 4.01796 17.178 4.72239L12.4228 10.037C12.2972 10.1774 12.2343 10.2477 12.1895 10.3276C12.1498 10.3984 12.1207 10.4747 12.103 10.554C12.0831 10.6435 12.0831 10.7377 12.0831 10.9261V15.382C12.0831 15.5449 12.0831 15.6264 12.0568 15.6969C12.0336 15.7591 11.9958 15.8149 11.9467 15.8596C11.891 15.9102 11.8154 15.9404 11.6641 16.001L8.83072 17.1343C8.52443 17.2568 8.37129 17.3181 8.24835 17.2925C8.14085 17.2702 8.0465 17.2063 7.98583 17.1148C7.91646 17.0101 7.91646 16.8452 7.91646 16.5153V10.9261C7.91646 10.7377 7.91646 10.6435 7.89656 10.554C7.87891 10.4747 7.84976 10.3984 7.81003 10.3276C7.76524 10.2477 7.70242 10.1774 7.57678 10.037L2.82158 4.72239Z"
            stroke="#0CBA4A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="filter__title">{{ title }}</div>
      </div>
      <div class="filter__chevron">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            v-if="!isOpen"
            d="M6 9L12 15L18 9"
            stroke="#0CBA4A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            v-else
            d="M18 15L12 9L6 15"
            stroke="#0CBA4A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    
    <div v-if="isOpen" class="filter__content">
      <div class="filter__items">
        <slot></slot>
      </div>
      
      <button
        :class="buttonClasses"
        :disabled="!saveEnabled"
        @click="handleSave"
      >
        {{ saveButtonText }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  title?: string;
  defaultOpen?: boolean;
  saveButtonText?: string;
  saveEnabled?: boolean;
}

interface Emits {
  (event: "save"): void;
  (event: "toggle", isOpen: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Filter",
  defaultOpen: false,
  saveButtonText: "AUSWAHL SPEICHERN",
  saveEnabled: false,
});

const emit = defineEmits<Emits>();

const isOpen = ref(props.defaultOpen);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
  emit("toggle", isOpen.value);
};

const handleSave = () => {
  if (props.saveEnabled) {
    emit("save");
  }
};

const containerClasses = computed(() => ({
  filter: true,
  "filter--open": isOpen.value,
}));

const buttonClasses = computed(() => ({
  filter__button: true,
  "filter__button--disabled": !props.saveEnabled,
}));
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 260px;
}

.filter__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  cursor: pointer;
  user-select: none;
}

.filter__header-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.filter__title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #e6e1f3;
  font-feature-settings: "ss01" on;
  text-overflow: ellipsis;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.filter__chevron {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.filter__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
}

.filter__items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  :deep(.filter-item) {
    display: flex;
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 6px;
    border: 1px solid #363a3e;
  }
}

.filter__button {
  display: flex;
  height: 32px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 6px;
  background: #0cba4a;
  border: none;
  color: #fff;
  text-align: center;
  font-feature-settings: "ss01" on;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.2s ease, background-color 0.2s ease;

  &:hover:not(&--disabled) {
    background: #0aa842;
  }

  &--disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}
</style>
