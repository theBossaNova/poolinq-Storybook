<script setup lang="ts">
import { computed, ref, watch } from "vue";

type TextSelectState = "empty" | "focused" | "filled" | "warning" | "error";

interface SuggestionItem {
  label: string;
  value: string;
}

interface Props {
  suggestions?: SuggestionItem[];
  modelValue?: string;
  placeholder?: string;
  helperText?: string;
  state?: TextSelectState;
  showMenu?: boolean;
  disabled?: boolean;
  size?: "256" | "160" | "100" | "80" | "64";
}

interface Emits {
  (event: "update:modelValue", value: string): void;
  (event: "change", value: string): void;
  (event: "clear"): void;
}

const props = withDefaults(defineProps<Props>(), {
  suggestions: () => [],
  modelValue: "",
  placeholder: "Placeholder",
  state: "empty",
  showMenu: false,
  disabled: false,
  size: "256",
});

const emit = defineEmits<Emits>();

const internalValue = ref(props.modelValue);
const isDropdownOpen = ref(props.showMenu);
const isFocused = ref(false);

watch(
  () => props.modelValue,
  (nextValue) => {
    if (nextValue !== undefined && nextValue !== internalValue.value) {
      internalValue.value = nextValue;
    }
  }
);

watch(
  () => props.showMenu,
  (nextValue) => {
    isDropdownOpen.value = nextValue;
  }
);

const filteredSuggestions = computed(() => {
  if (!internalValue.value || !isDropdownOpen.value) {
    return props.suggestions;
  }
  return props.suggestions.filter((item) =>
    item.label.toLowerCase().includes(internalValue.value.toLowerCase())
  );
});

const outerWrapperClasses = computed(() => [
  "text-select-outer",
  `text-select-size-${props.size}`,
  {
    "text-select-outer--focused": props.state === "focused" || isFocused.value,
    "text-select-outer--warning": props.state === "warning",
    "text-select-outer--error": props.state === "error",
  },
]);

const wrapperClasses = computed(() => [
  "text-select-wrapper",
  `text-select-wrapper--${props.state}`,
  {
    "text-select-wrapper--open": isDropdownOpen.value,
    "text-select-wrapper--disabled": props.disabled,
  },
]);

const showClearButton = computed(() => {
  return internalValue.value.length > 0 && !props.disabled;
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  internalValue.value = value;
  emit("update:modelValue", value);
  emit("change", value);

  if (value.length > 0) {
    isDropdownOpen.value = true;
  }
};

const handleFocus = () => {
  isFocused.value = true;
  if (internalValue.value.length > 0 || props.suggestions.length > 0) {
    isDropdownOpen.value = true;
  }
};

const handleBlur = () => {
  isFocused.value = false;
  setTimeout(() => {
    isDropdownOpen.value = false;
  }, 200);
};

const clearInput = () => {
  internalValue.value = "";
  emit("update:modelValue", "");
  emit("clear");
  isDropdownOpen.value = false;
};

const selectSuggestion = (suggestion: SuggestionItem) => {
  internalValue.value = suggestion.label;
  emit("update:modelValue", suggestion.value);
  emit("change", suggestion.value);
  isDropdownOpen.value = false;
};
</script>

<template>
  <div class="text-select-container">
    <div :class="outerWrapperClasses">
      <div :class="wrapperClasses">
        <div class="text-select-header">
          <input
            v-model="internalValue"
            :placeholder="placeholder"
            :disabled="disabled"
            class="text-select-input"
            type="text"
            autocomplete="off"
            spellcheck="false"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
          />
          <div v-if="showClearButton" class="text-select-clear" @click="clearInput">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6666 4.27337L11.7266 3.33337L7.99992 7.06004L4.27325 3.33337L3.33325 4.27337L7.05992 8.00004L3.33325 11.7267L4.27325 12.6667L7.99992 8.94004L11.7266 12.6667L12.6666 11.7267L8.93992 8.00004L12.6666 4.27337Z"
                :fill="state === 'warning' || state === 'error' ? '#E6E1F3' : '#495057'"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        v-if="isDropdownOpen && filteredSuggestions.length > 0"
        class="text-select-dropdown"
      >
        <div
          v-for="suggestion in filteredSuggestions"
          :key="suggestion.value"
          class="text-select-dropdown-item"
          @click="selectSuggestion(suggestion)"
        >
          {{ suggestion.label }}
        </div>
      </div>
    </div>
    <div v-if="helperText" :class="['text-select-helper', `text-select-helper--${state}`]">
      {{ helperText }}
    </div>
  </div>
</template>

<style scoped lang="scss">
$text-select-border-default: #363a3e;
$text-select-border-focused: #9798a5;
$text-select-border-warning: #ffc107;
$text-select-border-warning-outer: #514520;
$text-select-border-error: #dc3545;
$text-select-text: #e6e1f3;
$text-select-placeholder-default: #495057;
$text-select-placeholder: #9798a5;

.text-select-container {
  display: inline-flex;
  flex-direction: column;
  gap: 0;
  max-width: 257px;
  width: 100%;
}

.text-select-outer {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}

.text-select-outer--focused {
  border-radius: 6px;
  border: 2px solid $text-select-border-default;
  padding: 0;
}

.text-select-outer--warning {
  border-radius: 6px;
  border: 2px solid $text-select-border-warning-outer;
  padding: 0;
}

.text-select-outer--error {
  border-radius: 6px;
  border: 2px solid $text-select-border-warning-outer;
  padding: 0;
}

.text-select-size-256 { max-width: 256px; width: 256px; }
.text-select-size-160 { max-width: 160px; width: 160px; }
.text-select-size-100 { max-width: 100px; width: 100px; }
.text-select-size-80  { max-width: 80px; width: 80px; }
.text-select-size-64  { max-width: 64px; width: 64px; }

.text-select-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  background-color: transparent;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
}

.text-select-wrapper--empty,
.text-select-wrapper--filled,
.text-select-wrapper--warning,
.text-select-wrapper--error {
  border: 1px solid $text-select-border-default;
}

.text-select-wrapper--focused {
  border: 1px solid $text-select-border-focused;
}

.text-select-wrapper--filled {
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25) inset;
}

.text-select-wrapper--warning {
  border-color: $text-select-border-warning;
}

.text-select-wrapper--error {
  border-color: $text-select-border-error;
}

.text-select-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  position: relative;
}

.text-select-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: $text-select-text;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 140%;
  font-weight: 400;
  padding: 0;
  margin: 0;
  caret-color: $text-select-text;
  min-width: 0;
}

.text-select-input::placeholder {
  color: $text-select-placeholder-default;
  opacity: 1;
}

.text-select-wrapper--focused .text-select-input::placeholder {
  color: $text-select-placeholder;
}

.text-select-wrapper--warning .text-select-input,
.text-select-wrapper--warning .text-select-input::placeholder {
  color: $text-select-border-warning;
}

.text-select-wrapper--error .text-select-input,
.text-select-wrapper--error .text-select-input::placeholder {
  color: $text-select-border-error;
}

.text-select-clear {
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  svg {
    display: block;
  }
}

.text-select-dropdown {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  border: 1px solid $text-select-border-default;
  border-top: none;
  border-radius: 0 0 6px 6px;
  background: transparent;
}

.text-select-dropdown-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  color: $text-select-text;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
}

.text-select-wrapper--open {
  border-radius: 6px 6px 0 0;
}

.text-select-wrapper--disabled {
  opacity: 0.6;
  cursor: not-allowed;

  .text-select-input {
    cursor: not-allowed;
  }
}

.text-select-helper {
  display: flex;
  align-items: center;
  gap: 10px;
  color: $text-select-placeholder-default;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 10px;
  line-height: 14px;
  font-weight: 300;
  margin-top: 4px;
}

.text-select-helper--warning {
  color: $text-select-border-warning;
}

.text-select-helper--error {
  color: $text-select-border-error;
}

@media (max-width: 480px) {
  .text-select-container {
    max-width: 100%;
  }

  .text-select-header {
    padding: 8px;
  }

  .text-select-input {
    font-size: 11px;
  }

  .text-select-dropdown {
    padding: 8px;
  }

  .text-select-dropdown-item {
    font-size: 11px;
  }

  .text-select-helper {
    font-size: 9px;
  }
}
</style>
