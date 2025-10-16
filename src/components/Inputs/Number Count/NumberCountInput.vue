<script setup lang="ts">
import { computed, ref, watch } from "vue";

type NumberCountSize = "default" | "small" | "large";
type NumberCountType = "both" | "min" | "max";

interface Props {
  modelValue?: number;
  size?: NumberCountSize;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

interface Emits {
  (event: "update:modelValue", value: number): void;
  (event: "change", value: number): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  size: "default",
  min: 0,
  max: 999999,
  step: 1,
  disabled: false,
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

const currentType = computed<NumberCountType>(() => {
  if (internalValue.value <= props.min) return "min";
  if (internalValue.value >= props.max) return "max";
  return "both";
});

const isMinusDisabled = computed(() => {
  return props.disabled || internalValue.value <= props.min;
});

const isPlusDisabled = computed(() => {
  return props.disabled || internalValue.value >= props.max;
});

const containerClasses = computed(() => [
  "number-count",
  `number-count--${props.size}`,
  { "number-count--disabled": props.disabled },
]);

const minusButtonClasses = computed(() => [
  "number-count__button",
  "number-count__button--minus",
  { "number-count__button--disabled": isMinusDisabled.value },
]);

const plusButtonClasses = computed(() => [
  "number-count__button",
  "number-count__button--plus",
  { "number-count__button--disabled": isPlusDisabled.value },
]);

const valueClasses = computed(() => [
  "number-count__value",
  `number-count__value--${props.size}`,
]);

const minusIconClasses = computed(() => [
  "number-count__icon-path",
  { "number-count__icon-path--disabled": isMinusDisabled.value },
]);

const plusIconClasses = computed(() => [
  "number-count__icon-path",
  { "number-count__icon-path--disabled": isPlusDisabled.value },
]);

const increment = () => {
  if (!isPlusDisabled.value) {
    const newValue = internalValue.value + props.step;
    internalValue.value = Math.min(newValue, props.max);
    emit("update:modelValue", internalValue.value);
    emit("change", internalValue.value);
  }
};

const decrement = () => {
  if (!isMinusDisabled.value) {
    const newValue = internalValue.value - props.step;
    internalValue.value = Math.max(newValue, props.min);
    emit("update:modelValue", internalValue.value);
    emit("change", internalValue.value);
  }
};
</script>

<template>
  <div :class="containerClasses">
    <button
      type="button"
      :class="minusButtonClasses"
      :disabled="isMinusDisabled"
      @click="decrement"
    >
      <svg
        v-if="size === 'large'"
        class="number-count__icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33325 8.00024H12.6666"
          :class="minusIconClasses"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-else-if="size === 'default'"
        class="number-count__icon"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.83325 8.50024H13.1666"
          :class="minusIconClasses"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-else
        class="number-count__icon"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 6.00024H9.5"
          :class="minusIconClasses"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div :class="valueClasses">
      <span>{{ internalValue }}</span>
    </div>
    <button
      type="button"
      :class="plusButtonClasses"
      :disabled="isPlusDisabled"
      @click="increment"
    >
      <svg
        v-if="size === 'large'"
        class="number-count__icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.99992 3.3335V12.6668M3.33325 8.00016H12.6666"
          :class="plusIconClasses"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-else-if="size === 'default'"
        class="number-count__icon"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.49992 3.8335V13.1668M3.83325 8.50016H13.1666"
          :class="plusIconClasses"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-else
        class="number-count__icon"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 2.50024V9.50024M2.5 6.00024H9.5"
          :class="plusIconClasses"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
$number-count-border: #222325;
$number-count-text: #9798a5;
$number-count-icon-enabled: #0cba4a;
$number-count-icon-disabled: #363a3e;

.number-count {
  display: inline-flex;
  align-items: center;
  border-radius: 6px;
}

.number-count--disabled {
  opacity: 0.5;
}

.number-count__button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:focus {
    outline: none;
  }
}

.number-count__button--disabled {
  cursor: not-allowed;
}

.number-count__button--minus {
  border-radius: 6px 0 0 6px;
}

.number-count__button--plus {
  border-radius: 0 6px 6px 0;
}

.number-count--large .number-count__button {
  padding: 8px;
  flex: 1 0 0;
}

.number-count--default .number-count__button {
  width: 31px;
  height: 31px;
  padding: 8px;
}

.number-count--small .number-count__button {
  flex: 1 0 0;
  align-self: stretch;
}

.number-count__value {
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid $number-count-border;
  border-right: 1px solid $number-count-border;
  color: $number-count-text;
  text-align: center;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-style: normal;
  font-feature-settings: "ss01" on;
}

.number-count__value--large {
  padding: 0 8px;
  width: 47px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.number-count__value--default {
  padding: 8px;
  width: 46px;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
}

.number-count__value--small {
  width: 50px;
  padding: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  flex-shrink: 0;
  align-self: stretch;
}

.number-count__icon {
  display: block;
}

.number-count__icon-path {
  stroke: $number-count-icon-enabled;
  fill: none;
}

.number-count__icon-path--disabled {
  stroke: $number-count-icon-disabled;
}

@media (max-width: 480px) {
  .number-count--default {
    width: 100%;
  }

  .number-count__value--default,
  .number-count__value--large {
    flex: 1;
    width: auto;
  }
}
</style>
