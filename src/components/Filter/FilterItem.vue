<template>
  <div class="filter-item">
    <div class="filter-item__header" @click="handleItemClick">
      <div class="filter-item__icon">
        <svg
          v-if="!isOpen"
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
        <svg
          v-else
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 12.5L10 7.5L5 12.5"
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
      <slot :selections="selections" :onSelectionChange="updateSelection"></slot>
      <button
        :class="buttonClasses"
        :disabled="selections.size === 0"
        @click="handleSave"
      >
        AUSWAHL SPEICHERN
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  label?: string;
  index?: number;
}

interface Emits {
  (event: "open", index: number): void;
  (event: "close", index: number): void;
  (event: "save", index: number, selections: Set<string>): void;
}

const props = withDefaults(defineProps<Props>(), {
  label: "Filter 1",
  index: 0,
});

const emit = defineEmits<Emits>();

const isOpen = ref(false);
const selections = ref<Set<string>>(new Set());

const buttonClasses = computed(() => ({
  "filter-item__button": true,
  "filter-item__button--disabled": selections.value.size === 0,
}));

const handleItemClick = () => {
  if (!isOpen.value) {
    isOpen.value = true;
    emit("open", props.index || 0);
  } else {
    isOpen.value = false;
    selections.value.clear();
    emit("close", props.index || 0);
  }
};

const updateSelection = (optionId: string, isSelected: boolean) => {
  if (isSelected) {
    selections.value.add(optionId);
  } else {
    selections.value.delete(optionId);
  }
};

const handleSave = () => {
  emit("save", props.index || 0, new Set(selections.value));
  isOpen.value = false;
};

const clearSelections = () => {
  selections.value.clear();
  isOpen.value = false;
};

defineExpose({
  clearSelections,
  selections,
});
</script>

<style lang="scss" scoped>
.filter-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 8px;
}

.filter-item__header {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  width: 100%;
}

.filter-item__icon {
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
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
  gap: 8px;
}

.filter-item__button {
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
  width: 100%;

  &:hover:not(&--disabled) {
    background: #0aa842;
  }

  &--disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}
</style>
