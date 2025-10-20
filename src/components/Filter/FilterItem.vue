<template>
  <div :class="containerClasses">
    <div class="filter-item__header" @click="toggleOpen">
      <div class="filter-item__header-icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#0CBA4A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="filter-item__label">{{ label }}</div>
    </div>
    <div v-if="isOpen" class="filter-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  label?: string;
  defaultOpen?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: "Filter 1",
  defaultOpen: false,
});

const isOpen = ref(props.defaultOpen);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const containerClasses = computed(() => ({
  "filter-item": true,
  "filter-item--open": isOpen.value,
}));
</script>

<style lang="scss" scoped>
.filter-item {
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid #363a3e;
}

.filter-item__header {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  width: 100%;
}

.filter-item__header-icon {
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.filter-item--open .filter-item__header-icon {
  transform: rotate(180deg);
}

.filter-item__label {
  color: #e6e1f3;
  font-feature-settings: "ss01" on;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}

.filter-item__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
}
</style>
