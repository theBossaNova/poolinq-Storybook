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

const priceClasses = computed(() => [
  "number-select-price",
  `number-select-price--${displayState.value}`,
]);

const valueClasses = computed(() => [
  "number-select-value",
  `number-select-value--${displayState.value}`,
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
    return;
  }

  const parsedValue = Number(rawValue);
  if (Number.isNaN(parsedValue)) {
    return;
  }

  const clampedValue = Math.max(props.min, Math.min(parsedValue, props.max));
  internalValue.value = clampedValue;
  emit("update:modelValue", internalValue.value);
  emit("change", internalValue.value);
};
</script>

<template>
  <div :class="containerClasses">
    <div :class="wrapperClasses" @click="handleWrapperClick">
      <div :class="priceClasses">
        <input
          ref="inputRef"
          v-model="internalValue"
          type="number"
          :min="min"
          :max="max"
          :step="step"
          :disabled="disabled"
          :class="valueClasses"
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
    <p
      v-if="
        helperText && (displayState === 'warning' || displayState === 'error')
      "
      :class="helperClasses"
    >
      {{ helperText }}
    </p>
  </div>
</template>

<style scoped lang="scss">
$number-select-border-focused: #9798a5;
$number-select-border-warning: #ffc107;
$number-select-border-error: #dc3545;
$number-select-text-default: #9798a5;
$number-select-text-focused: #fff;
$number-select-text-filled: #e6e1f3;
$number-select-helper-warning: #ffc107;
$number-select-helper-error: #dc3545;
$number-select-outline-warning: #514520;

.number-select-container {
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
}

.number-select-container--disabled {
  opacity: 0.6;
}

.number-select-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid #363a3e;
  border-radius: 6px;
  cursor: text;
}

.number-select-wrapper--default {
  border: 1px solid #363a3e;
}

.number-select-wrapper--filled {
  border: 1px solid #363a3e;
}

.number-select-wrapper--focused {
  border: 1px solid $number-select-border-focused;
  box-shadow: 0 0 3px 0 #fff;
}

.number-select-wrapper--warning {
  padding: 8px;
  border: 1px solid $number-select-border-warning;
  border-radius: 6px;
  box-shadow: 0 0 0 2px $number-select-outline-warning;
}

.number-select-wrapper--error {
  padding: 8px;
  border: 1px solid $number-select-border-error;
  border-radius: 6px;
  box-shadow: 0 0 0 2px $number-select-outline-warning;
}

.number-select-price {
  display: flex;
  align-items: center;
  gap: 2px;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
}

.number-select-value {
  width: 36px;
  text-align: right;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
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

.number-select-value--focused {
  color: $number-select-text-focused;
  width: 35px;
}

.number-select-value--filled,
.number-select-value--warning,
.number-select-value--error {
  color: $number-select-text-filled;
}

.number-select-currency {
  width: 6px;
  color: $number-select-text-default;
}

.number-select-currency--focused {
  color: $number-select-text-default;
}

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
  align-items: center;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 14px;
  margin: 0;
}

.number-select-helper--warning {
  color: $number-select-helper-warning;
}

.number-select-helper--error {
  color: $number-select-helper-error;
}
</style>
