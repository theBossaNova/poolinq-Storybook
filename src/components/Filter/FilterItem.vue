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
      <CheckboxWithLabel
        v-for="(optionLabel, idx) in optionLabels"
        :key="idx"
        :checked="selections.has(`option-${index}-${idx}`)"
        :label="optionLabel"
        @change="
          (checked) => updateSelection(`option-${index}-${idx}`, checked)
        "
        style="padding: 6px 0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CheckboxWithLabel from "../../stories/CheckboxWithLabel.vue";

interface Props {
  label?: string;
  index?: number;
  optionCount?: number;
  optionLabels?: string[];
}

interface Emits {
  (event: "open", index: number): void;
  (event: "close", index: number): void;
  (event: "selection-change", index: number, selections: Set<string>): void;
}

const props = withDefaults(defineProps<Props>(), {
  label: "Filter 1",
  index: 0,
  optionCount: 3,
  optionLabels: () => ["Option 1", "Option 2", "Option 3"],
});

const emit = defineEmits<Emits>();

const isOpen = ref(false);
const selections = ref<Set<string>>(new Set());

const optionLabels = computed(() => {
  if (props.optionLabels && props.optionLabels.length > 0) {
    return props.optionLabels.slice(0, props.optionCount || 3);
  }
  const labels = [];
  for (let i = 0; i < (props.optionCount || 3); i++) {
    labels.push(`Option ${i + 1}`);
  }
  return labels;
});

const handleItemClick = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    emit("open", props.index || 0);
  } else {
    emit("close", props.index || 0);
  }
};

const updateSelection = (optionId: string, isSelected: boolean) => {
  if (isSelected) {
    selections.value.add(optionId);
  } else {
    selections.value.delete(optionId);
  }
  emit("selection-change", props.index || 0, new Set(selections.value));
};

const getSelections = (): Set<string> => {
  return new Set(selections.value);
};

const clearSelections = () => {
  selections.value.clear();
};

const setSelections = (newSelections: Set<string>) => {
  selections.value = new Set(newSelections);
};

defineExpose({
  selections,
  getSelections,
  clearSelections,
  setSelections,
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
</style>
