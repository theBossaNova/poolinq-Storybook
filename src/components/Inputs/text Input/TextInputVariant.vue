<script setup lang="ts">
import { computed, ref, watch } from "vue";

type TextInputState =
  | "empty"
  | "focused"
  | "filled"
  | "warning"
  | "error"
  | "disabled";

interface Props {
  variant: TextInputState;
  modelValue?: string;
  placeholder?: string;
  helperText?: string;
  autofocus?: boolean;
}

interface Emits {
  (event: "update:modelValue", value: string): void;
  (event: "change", value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  placeholder: "Placeholder",
  helperText: "Helper Text",
  autofocus: false,
});

const emit = defineEmits<Emits>();

const internalValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (nextValue) => {
    if (nextValue !== undefined && nextValue !== internalValue.value) {
      internalValue.value = nextValue;
    }
  }
);

const isDisabled = computed(() => props.variant === "disabled");

const containerClasses = computed(() => [
  "text-input-container",
]);

const wrapperClasses = computed(() => [
  "text-input-wrapper",
  `text-input-wrapper--${props.variant}`,
  { "text-input-wrapper--disabled": isDisabled.value },
]);

const helperClasses = computed(() => [
  "text-input-helper",
  `text-input-helper--${props.variant}`,
]);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  internalValue.value = value;
  emit("update:modelValue", value);
  emit("change", value);
};
</script>

<template>
  <div :class="containerClasses">
    <div :class="wrapperClasses">
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
      />
    </div>
    <div v-if="helperText" :class="helperClasses">
      {{ helperText }}
    </div>
  </div>
</template>

<style scoped lang="scss">
$text-input-background: #222325;
$text-input-border-default: #363a3e;
$text-input-border-typing: #7c6cff;
$text-input-border-filled: #4a4c53;
$text-input-border-warning: #f6c343;
$text-input-border-error: #ff5a5f;
$text-input-border-disabled: #2d3034;
$text-input-text: #f5f6f9;
$text-input-placeholder: #9798a5;
$text-input-disabled-text: #6f7078;

.text-input-wrapper {
  display: flex;
  align-items: center;
  max-width: 257px;
  width: 100%;
  border-radius: 6px;
  padding: 8px 16px 7px;
  background-color: $text-input-background;
  border: 1px solid $text-input-border-default;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
}

.text-input-field {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: $text-input-text;
  font-family: "overpass", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  line-height: 1.4;
  font-weight: 400;
  padding: 0;
  margin: 0;
  caret-color: $text-input-text;
}

.text-input-field::placeholder {
  color: $text-input-placeholder;
  opacity: 1;
}

.text-input-wrapper--typing {
  border-color: $text-input-border-typing;
  box-shadow: 0 0 0 1px rgba(124, 108, 255, 0.35);
}

.text-input-wrapper--filled {
  border-color: $text-input-border-filled;
}

.text-input-wrapper--warning {
  border-color: $text-input-border-warning;
}

.text-input-wrapper--error {
  border-color: $text-input-border-error;
}

.text-input-wrapper--disabled {
  border-color: $text-input-border-disabled;
  background-color: darken($text-input-background, 3%);
}

.text-input-wrapper--disabled .text-input-field {
  color: $text-input-disabled-text;
  cursor: not-allowed;
}

.text-input-wrapper--disabled .text-input-field::placeholder {
  color: $text-input-disabled-text;
}

@media (max-width: 480px) {
  .text-input-wrapper {
    max-width: 100%;
    padding: 8px 12px 7px;
  }

  .text-input-field {
    font-size: 11px;
  }
}
</style>
