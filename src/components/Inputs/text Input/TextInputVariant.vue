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
  size?: "256" | "160" | "100" | "80" | "64";
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
  size: "256",
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

const isFocused = ref(false);

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

const wrapperClasses = computed(() => [
  "text-input-wrapper",
  `text-input-wrapper--${displayVariant.value}`,
  { "text-input-wrapper--disabled": isDisabled.value },
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
};

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};

const onEnter = () => {
  // commit value and move to filled state
  emit("update:modelValue", internalValue.value);
  emit("change", internalValue.value);
  isFocused.value = false;
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
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown.enter.prevent="onEnter"
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

.text-input-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  padding: 8px;
  background-color: transparent;
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
  font-family: "overpass", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  padding: 0;
  margin: 0;
  caret-color: $text-input-text;
  min-width: 0;
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
