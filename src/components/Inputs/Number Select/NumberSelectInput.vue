<script setup lang="ts">
import { computed, ref, watch } from "vue";
import StepSort from "../../SelectionControls/StepSort.vue";

type NumberSelectState = "default" | "focused" | "filled" | "warning" | "error";

interface Props {
  modelValue?: number;
  state?: NumberSelectState;
  helperText?: string;
  min?: number;
  max?: number;
  step?: number;
  currency?: string;
  disabled?: boolean;
}

interface Emits {
  (event: "update:modelValue", value: number): void;
  (event: "change", value: number): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  state: "default",
  helperText: "",
  min: 0,
  max: 999999,
  step: 1,
  currency: "€",
  disabled: false,
});

const emit = defineEmits<Emits>();

const internalValue = ref(props.modelValue);
const isFocused = ref(false);
const inputRef = ref<HTMLInputElement | null>(null);

watch(
  () => props.modelValue,
  (nextValue) => {
    if (nextValue !== undefined && nextValue !== internalValue.value) {
      internalValue.value = nextValue;
    }
  }
);

const handleWrapperClick = () => {
  if (!props.disabled && inputRef.value) {
    inputRef.value.focus();
  }
};

const displayState = computed(() => {
  if (props.state === "warning" || props.state === "error") return props.state;
  if (props.state === "focused") return "focused";
  if (props.state === "filled") return "filled";
  if (isFocused.value) return "focused";
  if (internalValue.value > props.min) return "filled";
  return "default";
});

const containerClasses = computed(() => [
  "number-select-container",
  { "number-select-container--disabled": props.disabled },
]);

const wrapperClasses = computed(() => [
  "number-select-wrapper",
  `number-select-wrapper--${displayState.value}`,
]);

const bodyClasses = computed(() => [
  "number-select-body",
  `number-select-body--${displayState.value}`,
  { "number-select-body--disabled": props.disabled },
]);

const amountClasses = computed(() => [
  "number-select-amount",
  `number-select-amount--${displayState.value}`,
]);

const fieldClasses = computed(() => [
  "number-select-field",
  `number-select-field--${displayState.value}`,
  { "number-select-field--disabled": props.disabled },
]);

const currencyClasses = computed(() => [
  "number-select-currency",
  `number-select-currency--${displayState.value}`,
]);

const helperClasses = computed(() => [
  "number-select-helper",
  `number-select-helper--${displayState.value}`,
]);

const stepSortVariant = computed(() => {
  if (internalValue.value <= props.min) return "disabled-bottom";
  if (internalValue.value >= props.max) return "disabled-top";
  return "default";
});

const increment = () => {
  if (internalValue.value < props.max) {
    const newValue = internalValue.value + props.step;
    internalValue.value = Math.min(newValue, props.max);
    emit("update:modelValue", internalValue.value);
    emit("change", internalValue.value);
  }
};

const decrement = () => {
  if (internalValue.value > props.min) {
    const newValue = internalValue.value - props.step;
    internalValue.value = Math.max(newValue, props.min);
    emit("update:modelValue", internalValue.value);
    emit("change", internalValue.value);
  }
};

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const rawValue = target.value.trim();

  if (rawValue === "") {
    internalValue.value = props.min;
    emit("update:modelValue", internalValue.value);
    emit("change", internalValue.value);
    target.value = `${internalValue.value}`;
    return;
  }

  const parsedValue = Number(rawValue);
  if (Number.isNaN(parsedValue)) {
    target.value = `${internalValue.value}`;
    return;
  }

  const clampedValue = Math.max(props.min, Math.min(parsedValue, props.max));
  internalValue.value = clampedValue;
  emit("update:modelValue", internalValue.value);
  emit("change", internalValue.value);
  target.value = `${internalValue.value}`;
};
</script>

<template>
  <div :class="containerClasses">
    <div :class="wrapperClasses">
      <div :class="bodyClasses">
        <div :class="amountClasses" @click="handleWrapperClick">
          <input
            ref="inputRef"
            v-model="internalValue"
            type="number"
            :min="min"
            :max="max"
            :step="step"
            :disabled="disabled"
            :class="fieldClasses"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="handleInput"
          />
          <span :class="currencyClasses">{{ currency }}</span>
        </div>
        <StepSort
          class="number-select-stepper"
          :variant="stepSortVariant"
          :disabled="disabled"
          @increment="increment"
          @decrement="decrement"
        />
      </div>
    </div>
    <p
      v-if="helperText && (displayState === 'warning' || displayState === 'error')"
      :class="helperClasses"
    >
      {{ helperText }}
    </p>
  </div>
</template>

<style scoped lang="scss">
$number-select-border-default: #363a3e;
$number-select-border-focused: #9798a5;
$number-select-border-warning: #ffc107;
$number-select-border-error: #dc3545;
$number-select-text-default: #9798a5;
$number-select-text-focused: #fff;
$number-select-text-filled: #e6e1f3;
$number-select-helper-warning: #ffc107;
$number-select-helper-error: #dc3545;
$number-select-highlight-warning: #514520;

.number-select-container {
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
  width: 100px;
}

.number-select-container--disabled {
  opacity: 0.6;
}

.number-select-wrapper {
  width: 100%;
}

.number-select-body {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  padding: 8px 8px 7px 16px;
  border: 1px solid $number-select-border-default;
  border-radius: 6px;
  background: #222325;
  transition: border-color 0.2s ease, box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.number-select-body--focused {
  border-color: $number-select-border-focused;
  box-shadow: 0 0 3px 0 #fff;
}

.number-select-body--filled {
  border-color: $number-select-border-default;
  box-shadow: inset 0 0 6px 0 rgba(0, 0, 0, 0.25);
}

.number-select-body--warning {
  border-color: $number-select-border-warning;
  box-shadow: 0 0 0 2px $number-select-highlight-warning;
}

.number-select-body--error {
  border-color: $number-select-border-error;
  box-shadow: 0 0 0 2px $number-select-highlight-warning;
}

.number-select-body--disabled {
  cursor: not-allowed;
}

.number-select-amount {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: flex-end;
  gap: 3px;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  color: $number-select-text-default;
  cursor: text;
}

.number-select-amount--focused,
.number-select-amount--filled,
.number-select-amount--warning,
.number-select-amount--error {
  color: $number-select-text-filled;
}

.number-select-field {
  flex: 1 1 auto;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-align: right;
  color: $number-select-text-default;
  caret-color: $number-select-text-focused;
  padding: 0;
  margin: 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
}

.number-select-field--focused {
  color: $number-select-text-focused;
}

.number-select-field--filled,
.number-select-field--warning,
.number-select-field--error {
  color: $number-select-text-filled;
}

.number-select-field--disabled {
  cursor: not-allowed;
}

.number-select-currency {
  flex-shrink: 0;
  color: $number-select-text-default;
}

.number-select-currency--focused,
.number-select-currency--filled,
.number-select-currency--warning,
.number-select-currency--error {
  color: $number-select-text-filled;
}

.number-select-stepper {
  flex-shrink: 0;
}

.number-select-helper {
  display: flex;
  justify-content: center;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 14px;
}

.number-select-helper--warning {
  color: $number-select-helper-warning;
}

.number-select-helper--error {
  color: $number-select-helper-error;
}

@media (max-width: 480px) {
  .number-select-container {
    width: 100%;
  }

  .number-select-body {
    padding: 8px 8px 7px 12px;
  }

  .number-select-amount {
    font-size: 11px;
  }

  .number-select-currency {
    font-size: 11px;
  }

  .number-select-helper {
    font-size: 9px;
  }
}
</style>
