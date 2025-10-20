<script setup lang="ts">
import { computed, ref, watch } from "vue";

type TextInputState =
  | "empty"
  | "focused"
  | "filled"
  | "warning"
  | "error"
  | "disabled";

interface SuggestionItem {
  label: string;
  value: string;
}

interface Props {
  variant: TextInputState;
  modelValue?: string;
  placeholder?: string;
  helperText?: string;
  autofocus?: boolean;
  size?: "256" | "160" | "100" | "80" | "64";
  showSearchIcon?: boolean;
  showMenu?: boolean;
  suggestions?: SuggestionItem[];
}

interface Emits {
  (event: "update:modelValue", value: string): void;
  (event: "change", value: string): void;
  (event: "clear"): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  placeholder: "Placeholder",
  helperText: "Helper Text",
  autofocus: false,
  size: "256",
  showSearchIcon: false,
  showMenu: false,
  suggestions: () => [],
});

const emit = defineEmits<Emits>();

const internalValue = ref(props.modelValue);
const isDropdownOpen = ref(false);

watch(
  () => props.modelValue,
  (nextValue) => {
    if (nextValue !== undefined && nextValue !== internalValue.value) {
      internalValue.value = nextValue;
    }
  }
);

const isDisabled = computed(() => props.variant === "disabled");

const isFocused = ref(false);

const filteredSuggestions = computed(() => {
  if (!internalValue.value) {
    return props.suggestions;
  }
  return props.suggestions.filter((item) =>
    item.label.toLowerCase().includes(internalValue.value.toLowerCase())
  );
});

const shouldShowMenu = computed(() => {
  return (
    props.showMenu &&
    isDropdownOpen.value &&
    filteredSuggestions.value.length > 0
  );
});

const showClearIcon = computed(() => {
  return (
    internalValue.value.length > 0 &&
    !isDisabled.value &&
    (displayVariant.value === "filled" ||
      displayVariant.value === "warning" ||
      displayVariant.value === "error")
  );
});

const displayVariant = computed(() => {
  if (
    props.variant === "warning" ||
    props.variant === "error" ||
    props.variant === "disabled"
  )
    return props.variant;
  if (isFocused.value) return "focused";
  if (internalValue.value && internalValue.value.length > 0) return "filled";
  return "empty";
});

const containerClasses = computed(() => [
  "text-input-container",
  `text-input-size-${props.size}`,
]);

const outerWrapperClasses = computed(() => [
  "text-input-outer",
  {
    "text-input-outer--focused":
      displayVariant.value === "focused" && !props.showSearchIcon,
    "text-input-outer--warning": displayVariant.value === "warning",
    "text-input-outer--error": displayVariant.value === "error",
  },
]);

const wrapperClasses = computed(() => [
  "text-input-wrapper",
  `text-input-wrapper--${displayVariant.value}`,
  {
    "text-input-wrapper--disabled": isDisabled.value,
    "text-input-wrapper--open": shouldShowMenu.value,
  },
]);

const helperClasses = computed(() => [
  "text-input-helper",
  `text-input-helper--${displayVariant.value}`,
]);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  internalValue.value = value;
  emit("update:modelValue", value);
  emit("change", value);

  if (props.showMenu && value.length > 0) {
    isDropdownOpen.value = true;
  }
};

const handleFocus = () => {
  isFocused.value = true;
  if (props.showMenu && (internalValue.value.length > 0 || props.suggestions.length > 0)) {
    isDropdownOpen.value = true;
  }
};

const handleBlur = () => {
  isFocused.value = false;
  setTimeout(() => {
    isDropdownOpen.value = false;
  }, 200);
};

const onEnter = () => {
  emit("update:modelValue", internalValue.value);
  emit("change", internalValue.value);
  isFocused.value = false;
  isDropdownOpen.value = false;
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
  isFocused.value = false;
};
</script>

<template>
  <div :class="containerClasses">
    <div class="text-input-input-container">
      <div :class="outerWrapperClasses">
        <div :class="wrapperClasses">
          <div class="text-input-header">
            <svg
              v-if="showSearchIcon && displayVariant === 'empty'"
              class="text-input-search-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.66659 1.33331C3.72107 1.33331 1.33325 3.72113 1.33325 6.66665C1.33325 9.61217 3.72107 12 6.66659 12C7.89906 12 9.03389 11.5819 9.93702 10.8799L13.5285 14.4714C13.7889 14.7317 14.211 14.7317 14.4713 14.4714C14.7317 14.211 14.7317 13.7889 14.4713 13.5286L10.8798 9.93708C11.5819 9.03395 11.9999 7.89912 11.9999 6.66665C11.9999 3.72113 9.6121 1.33331 6.66659 1.33331ZM2.66659 6.66665C2.66659 4.45751 4.45745 2.66665 6.66659 2.66665C8.87572 2.66665 10.6666 4.45751 10.6666 6.66665C10.6666 8.87579 8.87572 10.6666 6.66659 10.6666C4.45745 10.6666 2.66659 8.87579 2.66659 6.66665Z"
                fill="#D9D9D9"
              />
            </svg>
            <input
              v-model="internalValue"
              :placeholder="placeholder"
              :disabled="isDisabled"
              :autofocus="autofocus"
              class="text-input-field"
              type="text"
              autocomplete="off"
              spellcheck="false"
              @input="handleInput"
              @focus="handleFocus"
              @blur="handleBlur"
              @keydown.enter.prevent="onEnter"
            />
            <div
              v-if="showClearIcon"
              class="text-input-clear"
              @click="clearInput"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6666 4.27337L11.7266 3.33337L7.99992 7.06004L4.27325 3.33337L3.33325 4.27337L7.05992 8.00004L3.33325 11.7267L4.27325 12.6667L7.99992 8.94004L11.7266 12.6667L12.6666 11.7267L8.93992 8.00004L12.6666 4.27337Z"
                  :fill="
                    displayVariant === 'warning' || displayVariant === 'error'
                      ? '#E6E1F3'
                      : '#495057'
                  "
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div v-if="shouldShowMenu" class="text-input-dropdown">
        <div
          v-for="suggestion in filteredSuggestions"
          :key="suggestion.value"
          class="text-input-dropdown-item"
          @click="selectSuggestion(suggestion)"
        >
          {{ suggestion.label }}
        </div>
      </div>
    </div>
    <div v-if="helperText" :class="helperClasses">
      {{ helperText }}
    </div>
  </div>
</template>

<style scoped lang="scss">
$text-input-background: #222325;
$text-input-border-default: #363a3e;
$text-input-border-focused: #9798a5;
$text-input-border-warning: #ffc107;
$text-input-border-error: #dc3545;
$text-input-border-disabled: #222325;
$text-input-text: #e6e1f3;
$text-input-placeholder-default: #495057;
$text-input-placeholder: #9798a5;
$text-input-disabled-text: #363a3e;
$text-input-helper: #495057;

.text-input-container {
  display: inline-flex;
  flex-direction: column;
  gap: 0;
  max-width: 257px;
  width: 100%;
}

/* Size classes */
.text-input-size-256 {
  max-width: 256px;
  width: 256px;
}
.text-input-size-160 {
  max-width: 160px;
  width: 160px;
}
.text-input-size-100 {
  max-width: 100px;
  width: 100px;
}
.text-input-size-80 {
  max-width: 80px;
  width: 80px;
}
.text-input-size-64 {
  max-width: 64px;
  width: 64px;
}

.text-input-input-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.text-input-outer {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}

.text-input-outer--focused,
.text-input-outer--warning,
.text-input-outer--error {
  border-radius: 6px;
  padding: 0;
}

.text-input-outer--focused {
  border: 2px solid $text-input-border-default;
}

.text-input-outer--warning {
  border: 2px solid #514520;
}

.text-input-outer--error {
  border: 2px solid #514520;
}

.text-input-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  background-color: transparent;
  border: 1px solid $text-input-border-default;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
}

.text-input-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  position: relative;
}

.text-input-search-icon {
  display: flex;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.text-input-field {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: $text-input-text;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 140%;
  font-weight: 400;
  padding: 0;
  margin: 0;
  caret-color: $text-input-text;
  min-width: 0;
}

.text-input-clear {
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

.text-input-field::placeholder {
  color: $text-input-placeholder-default;
  opacity: 1;
}

.text-input-wrapper--empty .text-input-field::placeholder {
  color: $text-input-placeholder-default;
}

.text-input-wrapper--focused {
  border-color: $text-input-border-focused;
  box-shadow: 0 0 3px 0 #fff;
}

.text-input-wrapper--focused .text-input-field::placeholder {
  color: $text-input-placeholder;
}

.text-input-wrapper--filled {
  border-color: $text-input-border-default;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25) inset;
  background-color: $text-input-background;
}

.text-input-wrapper--warning {
  border-color: $text-input-border-warning;
  box-shadow: 0 0 3px 0 $text-input-border-warning;
}

.text-input-wrapper--warning .text-input-field,
.text-input-wrapper--warning .text-input-field::placeholder {
  color: $text-input-border-warning;
}

.text-input-wrapper--error {
  border-color: $text-input-border-error;
  box-shadow: 0 0 3px 0 $text-input-border-error;
}

.text-input-wrapper--error .text-input-field,
.text-input-wrapper--error .text-input-field::placeholder {
  color: $text-input-border-error;
}

.text-input-wrapper--disabled {
  border-color: $text-input-border-disabled;
}

.text-input-wrapper--disabled .text-input-field {
  color: $text-input-disabled-text;
  cursor: not-allowed;
}

.text-input-wrapper--disabled .text-input-field::placeholder {
  color: $text-input-disabled-text;
}

.text-input-wrapper--open {
  border-radius: 6px 6px 0 0;
}

.text-input-dropdown {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  border: 1px solid $text-input-border-default;
  border-top: none;
  border-radius: 0 0 6px 6px;
  background: transparent;
}

.text-input-dropdown-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  color: $text-input-text;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
}

.text-input-helper {
  display: flex;
  align-items: center;
  gap: 10px;
  color: $text-input-helper;
  font-family: "overpass", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  font-size: 10px;
  line-height: 14px;
  font-weight: 300;
  margin-top: 4px;
}

.text-input-helper--warning {
  color: $text-input-border-warning;
}

.text-input-helper--error {
  color: $text-input-border-error;
}

@media (max-width: 480px) {
  .text-input-container {
    max-width: 100%;
  }

  .text-input-wrapper {
    padding: 8px;
  }

  .text-input-field {
    font-size: 11px;
  }

  .text-input-helper {
    font-size: 9px;
  }
}
</style>
