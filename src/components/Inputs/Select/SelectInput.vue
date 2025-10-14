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
  helperText?: string;
  state?: SelectState;
  disabled?: boolean;
  showMenu?: boolean;
}

interface Emits {
  (event: "update:modelValue", value: string | number): void;
  (event: "change", value: string | number): void;
  (event: "update:showMenu", value: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Placeholder",
  state: "empty",
  disabled: false,
  showMenu: false,
});

const emit = defineEmits<Emits>();

const isOpen = ref(!!props.showMenu);

// keep in sync with external prop
watch(
  () => props.showMenu,
  (val) => {
    isOpen.value = !!val;
  }
);

// notify parent when internal open state changes
watch(isOpen, (val) => {
  emit("update:showMenu", val);
});

const selectedItem = computed(() => {
  if (props.modelValue === undefined || props.modelValue === null) return null;
  return props.items.find((item) => item.value === props.modelValue) || null;
});

const displayText = computed(() => {
  return selectedItem.value ? selectedItem.label : props.placeholder;
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
  <div class="select-container">
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
              d="M9.66659 4.69604L8.83825 5.5L4.99992 1.77459L1.16159 5.5L0.333252 4.69604L4.99992 0.166666L9.66659 4.69604Z"
              :fill="state === 'warning' || state === 'error' ? '#E6E1F3' : '#9798A5'"
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
              d="M2.99992 5.80396L3.82825 5L7.66658 8.72541L11.5049 5L12.3333 5.80396L7.66658 10.3333L2.99992 5.80396Z"
              :fill="state === 'warning' || state === 'error' ? '#E6E1F3' : '#9798A5'"
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
    <div v-if="helperText" :class="['select-helper', `select-helper--${state}`]">
      {{ helperText }}
    </div>
  </div>
</template>

<style scoped lang="scss">
$select-border-default: #363a3e;
$select-border-warning: #ffc107;
$select-border-error: #dc3545;
$select-text-placeholder: #9798a5;
$select-text: #e6e1f3;
$select-helper: #495057;

.select-container {
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  max-width: 257px;
  width: 100%;
  position: relative;
}

.select-wrapper {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  border: 1px solid $select-border-default;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25) inset;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
}

.select-header {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  user-select: none;
}

.select-text {
  flex: 1;
  font-family: "overpass", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select-text--placeholder {
  color: $select-text-placeholder;
}

.select-text--selected {
  color: $select-text;
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
  padding: 8px;
  border: 1px solid $select-border-default;
  border-top: none;
  border-radius: 0 0 6px 6px;
  background: #121212;
  position: absolute;
  top: calc(100% - 1px);
  left: -1px;
  right: -1px;
  z-index: 10;
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
  color: $select-text;
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
  color: $select-text;
}

.select-dropdown-item:not(.select-dropdown-item--selected) {
  color: $select-text-placeholder;
}

.select-wrapper--warning {
  border-color: $select-border-warning;
  box-shadow: 0 0 0 2px #514520;

  .select-dropdown {
    border-color: $select-border-warning;
  }
}

.select-wrapper--warning .select-text,
.select-wrapper--warning .select-text--placeholder {
  color: $select-border-warning;
}

.select-wrapper--error {
  border-color: $select-border-error;
  box-shadow: 0 0 0 2px #514520;

  .select-dropdown {
    border-color: $select-border-error;
  }
}

.select-wrapper--error .select-text,
.select-wrapper--error .select-text--placeholder {
  color: $select-border-error;
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

.select-helper {
  display: flex;
  align-items: center;
  gap: 10px;
  color: $select-helper;
  font-family: "overpass", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 10px;
  line-height: 14px;
  font-weight: 300;
}

.select-helper--warning {
  color: $select-border-warning;
}

.select-helper--error {
  color: $select-border-error;
}

@media (max-width: 480px) {
  .select-container {
    max-width: 100%;
  }

  .select-header {
    padding: 8px;
  }

  .select-text {
    font-size: 11px;
  }

  .select-dropdown {
    padding: 8px;
  }

  .select-dropdown-item {
    font-size: 11px;
  }

  .select-helper {
    font-size: 9px;
  }
}
</style>
