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

const wrapperClasses = computed(() => [
  "text-select-wrapper",
  `text-select-wrapper--${props.state}`,
  {
    "text-select-wrapper--open": isDropdownOpen.value,
    "text-select-wrapper--disabled": props.disabled,
    "text-select-wrapper--focused": isFocused.value,
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
              d="M12.6666 4.77337L11.7266 3.83337L7.99992 7.56004L4.27325 3.83337L3.33325 4.77337L7.05992 8.50004L3.33325 12.2267L4.27325 13.1667L7.99992 9.44004L11.7266 13.1667L12.6666 12.2267L8.93992 8.50004L12.6666 4.77337Z"
              :fill="state === 'filled' || state === 'focused' ? '#495057' : '#E6E1F3'"
            />
          </svg>
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
$text-select-background: #222325;
$text-select-text-placeholder: #9798a5;
$text-select-text: #e6e1f3;
$text-select-border-default: #363a3e;
$text-select-border-filled: #4a4c53;
$text-select-border-warning: #f6c343;
$text-select-border-error: #ff5a5f;

.text-select-wrapper {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  max-width: 257px;
  width: 100%;
  border-radius: 6px;
  background-color: $text-select-background;
  border: 1px solid $text-select-border-default;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
}

.text-select-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px 7px;
  position: relative;
}

.text-select-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: $text-select-text;
  font-family: "overpass", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  line-height: 1.4;
  font-weight: 400;
  padding: 0;
  margin: 0;
  caret-color: $text-select-text;
  min-width: 0;
}

.text-select-input::placeholder {
  color: $text-select-text-placeholder;
  opacity: 1;
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
  padding: 0 16px 7px;
  margin-top: -1px;
  border-radius: 0 0 6px 6px;
  background-color: $text-select-background;
}

.text-select-dropdown-item {
  display: flex;
  height: 16px;
  flex-direction: column;
  justify-content: center;
  font-family: "overpass", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
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

.text-select-wrapper--filled {
  border-color: $text-select-border-filled;
}

.text-select-wrapper--warning {
  border-color: $text-select-border-warning;
}

.text-select-wrapper--error {
  border-color: $text-select-border-error;
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

@media (max-width: 480px) {
  .text-select-wrapper {
    max-width: 100%;
  }

  .text-select-header {
    padding: 8px 12px 7px;
  }

  .text-select-input {
    font-size: 11px;
  }

  .text-select-dropdown {
    padding: 0 12px 7px;
  }

  .text-select-dropdown-item {
    font-size: 11px;
  }
}
</style>
