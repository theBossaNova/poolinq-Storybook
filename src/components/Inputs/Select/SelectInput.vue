<script setup lang="ts">
import { computed, ref } from "vue";

type SelectState = "empty" | "selected" | "warning" | "error";

interface SelectItem {
  label: string;
  value: string | number;
}

interface Props {
  items: SelectItem[];
  modelValue?: string | number;
  placeholder?: string;
  state?: SelectState;
  disabled?: boolean;
}

interface Emits {
  (event: "update:modelValue", value: string | number): void;
  (event: "change", value: string | number): void;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Placeholder",
  state: "empty",
  disabled: false,
});

const emit = defineEmits<Emits>();

const isOpen = ref(false);

const selectedItem = computed(() => {
  if (!props.modelValue) return null;
  return props.items.find((item) => item.value === props.modelValue) || null;
});

const displayText = computed(() => {
  return selectedItem.value ? selectedItem.value.label : props.placeholder;
});

const wrapperClasses = computed(() => [
  "select-wrapper",
  `select-wrapper--${props.state}`,
  {
    "select-wrapper--open": isOpen.value,
    "select-wrapper--disabled": props.disabled,
  },
]);

const textClasses = computed(() => [
  "select-text",
  {
    "select-text--placeholder": !selectedItem.value,
    "select-text--selected": !!selectedItem.value,
  },
]);

const toggleDropdown = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
  }
};

const selectItem = (item: SelectItem) => {
  emit("update:modelValue", item.value);
  emit("change", item.value);
  isOpen.value = false;
};

const isItemSelected = (item: SelectItem) => {
  return item.value === props.modelValue;
};
</script>

<template>
  <div :class="wrapperClasses">
    <div class="select-header" @click="toggleDropdown">
      <div :class="textClasses">
        {{ displayText }}
      </div>
      <div class="select-icon">
        <svg
          v-if="isOpen"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9.69604L3.82833 10.5L7.66667 6.77459L11.505 10.5L12.3333 9.69604L7.66667 5.16667L3 9.69604Z"
            fill="#0CBA4A"
          />
        </svg>
        <svg
          v-else
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.00004 6.30396L3.82837 5.5L7.66671 9.22541L11.505 5.5L12.3334 6.30396L7.66671 10.8333L3.00004 6.30396Z"
            fill="#0CBA4A"
          />
        </svg>
      </div>
    </div>
    <div v-if="isOpen" class="select-dropdown">
      <div
        v-for="item in items"
        :key="item.value"
        :class="[
          'select-dropdown-item',
          { 'select-dropdown-item--selected': isItemSelected(item) },
        ]"
        @click="selectItem(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$select-background: #222325;
$select-text-placeholder: #9798a5;
$select-text-selected: #e6e1f3;
$select-border-default: #363a3e;
$select-border-selected: #4a4c53;
$select-border-warning: #f6c343;
$select-border-error: #ff5a5f;
$select-icon-color: #0cba4a;

.select-wrapper {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  max-width: 257px;
  width: 100%;
  border-radius: 6px;
  background-color: $select-background;
  border: 1px solid $select-border-default;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
}

.select-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px 7px;
  cursor: pointer;
  user-select: none;
}

.select-text {
  flex: 1;
  font-family: "overpass", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  line-height: 1.4;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select-text--placeholder {
  color: $select-text-placeholder;
}

.select-text--selected {
  color: $select-text-selected;
}

.select-icon {
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  svg {
    display: block;
  }
}

.select-dropdown {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px 7px;
  margin-top: -1px;
  border-radius: 0 0 6px 6px;
  background-color: $select-background;
}

.select-dropdown-item {
  display: flex;
  height: 16px;
  flex-direction: column;
  justify-content: center;
  font-family: "overpass", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: $select-text-selected;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
}

.select-dropdown-item--selected {
  color: $select-text-selected;
}

.select-dropdown-item:not(.select-dropdown-item--selected) {
  color: $select-text-placeholder;
}

.select-wrapper--selected {
  border-color: $select-border-selected;
}

.select-wrapper--warning {
  border-color: $select-border-warning;
}

.select-wrapper--error {
  border-color: $select-border-error;
}

.select-wrapper--open {
  border-radius: 6px 6px 0 0;
}

.select-wrapper--disabled {
  opacity: 0.6;
  cursor: not-allowed;

  .select-header {
    cursor: not-allowed;
  }
}

@media (max-width: 480px) {
  .select-wrapper {
    max-width: 100%;
  }

  .select-header {
    padding: 8px 12px 7px;
  }

  .select-text {
    font-size: 11px;
  }

  .select-dropdown {
    padding: 0 12px 7px;
  }

  .select-dropdown-item {
    font-size: 11px;
  }
}
</style>
