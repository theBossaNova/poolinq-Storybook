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
  const value = parseFloat(target.value) || 0;
  internalValue.value = Math.max(props.min, Math.min(value, props.max));
  emit("update:modelValue", internalValue.value);
  emit("change", internalValue.value);
};
</script>

<template>
  <div :class="containerClasses" @click="handleWrapperClick">
    <div :class="wrapperClasses">
      <div class="number-select-input-wrapper">
        <div :class="priceClasses">
          <input
            ref="inputRef"
            v-model="internalValue"
            type="number"
            class="number-select-input"
            :class="{ 'number-select-input--hidden': displayState === 'default' }"
            :min="min"
            :max="max"
            :step="step"
            :disabled="disabled"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="handleInput"
          />
          <span v-if="displayState === 'default'" class="number-select-value">{{ internalValue }}</span>
          <span class="number-select-currency">{{ currency }}</span>
        </div>
        <StepSort
          :variant="stepSortVariant"
          :disabled="disabled"
          @increment="increment"
          @decrement="decrement"
        />
      </div>
    </div>
    <div v-if="helperText && (state === 'warning' || state === 'error')" :class="helperClasses">
      {{ helperText }}
    </div>
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
$number-select-bg-warning: #514520;
$number-select-bg-error: #514520;

.number-select-container {
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100px;
  width: 100px;
}

.number-select-wrapper {
  display: flex;
  width: 100%;
  box-sizing: border-box;
}

.number-select-input-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.number-select-wrapper--default .number-select-input-wrapper,
.number-select-wrapper--filled .number-select-input-wrapper {
  justify-content: center;
  gap: 8px;
}

.number-select-wrapper--focused .number-select-input-wrapper {
  width: 100%;
  min-height: 31px;
  padding: 8px 8px 7px 16px;
  border-radius: 6px;
  border: 1px solid $number-select-border-focused;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.number-select-wrapper--warning .number-select-input-wrapper,
.number-select-wrapper--error .number-select-input-wrapper {
  width: 100%;
  min-height: 31px;
  padding: 8px 8px 7px 16px;
  border-radius: 6px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.number-select-wrapper--warning .number-select-input-wrapper {
  border: 1px solid $number-select-border-warning;
  box-shadow: 0 0 0 2px $number-select-bg-warning;
}

.number-select-wrapper--error .number-select-input-wrapper {
  border: 1px solid $number-select-border-error;
  box-shadow: 0 0 0 2px $number-select-bg-error;
}

.number-select-price {
  display: flex;
  align-items: center;
  gap: 3px;
  flex: 1 0 0;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-align: right;
}

.number-select-price--default {
  color: $number-select-text-default;
}

.number-select-price--focused {
  color: $number-select-text-focused;
}

.number-select-price--filled {
  color: $number-select-text-filled;
}

.number-select-price--warning,
.number-select-price--error {
  color: $number-select-text-filled;
}

.number-select-value {
  flex: 1 0 0;
  text-align: right;
}

.number-select-input {
  flex: 1 0 0;
  border: none;
  outline: none;
  background: transparent;
  color: $number-select-text-focused;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  text-align: right;
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

  &.number-select-input--hidden {
    display: none;
  }
}

.number-select-currency {
  width: 6px;
  color: $number-select-text-default;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.number-select-wrapper--filled .number-select-currency {
  color: $number-select-text-filled;
}

.number-select-wrapper--warning .number-select-currency,
.number-select-wrapper--error .number-select-currency {
  color: $number-select-text-filled;
}

.number-select-helper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 10px;
  font-style: normal;
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
    max-width: 100%;
  }

  .number-select-price {
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
