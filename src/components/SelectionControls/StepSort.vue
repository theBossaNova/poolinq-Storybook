<script setup lang="ts">
import { computed } from "vue";

type StepSortVariant =
  | "default"
  | "disabled-top"
  | "disabled-bottom"
  | "hover-top"
  | "hover-bottom";

interface Props {
  variant?: StepSortVariant;
  disabled?: boolean;
}

interface Emits {
  (event: "increment"): void;
  (event: "decrement"): void;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  disabled: false,
});

const emit = defineEmits<Emits>();

const containerClasses = computed(() => [
  "step-sort",
  `step-sort--${props.variant}`,
  { "step-sort--disabled": props.disabled },
]);

const isTopDisabled = computed(
  () => props.disabled || props.variant === "disabled-top"
);
const isBottomDisabled = computed(
  () => props.disabled || props.variant === "disabled-bottom"
);

const topSegmentClasses = computed(() => [
  "step-sort__segment",
  "step-sort__segment--up",
  { "step-sort__segment--disabled": isTopDisabled.value },
]);

const bottomSegmentClasses = computed(() => [
  "step-sort__segment",
  "step-sort__segment--down",
  { "step-sort__segment--disabled": isBottomDisabled.value },
]);

const topPathClasses = computed(() => [
  "step-sort__icon-path",
  "step-sort__icon-path--up",
  { "step-sort__icon-path--disabled": isTopDisabled.value },
]);

const bottomPathClasses = computed(() => [
  "step-sort__icon-path",
  "step-sort__icon-path--down",
  { "step-sort__icon-path--disabled": isBottomDisabled.value },
]);

const handleIncrement = () => {
  if (!isTopDisabled.value) {
    emit("increment");
  }
};

const handleDecrement = () => {
  if (!isBottomDisabled.value) {
    emit("decrement");
  }
};
</script>

<template>
  <div :class="containerClasses">
    <button
      type="button"
      :class="topSegmentClasses"
      :disabled="isTopDisabled"
      @click="handleIncrement"
    >
      <svg
        class="step-sort__icon"
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 5.50024L6 2.50024L3 5.50024"
          :class="topPathClasses"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button
      type="button"
      :class="bottomSegmentClasses"
      :disabled="isBottomDisabled"
      @click="handleDecrement"
    >
      <svg
        class="step-sort__icon"
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 2.50024L6 5.50024L9 2.50024"
          :class="bottomPathClasses"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
.step-sort {
  display: flex;
  width: 24px;
  height: 24px;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
}

.step-sort__segment {
  display: flex;
  flex: 1 0 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.step-sort__segment:focus {
  outline: none;
}

.step-sort__segment--disabled {
  cursor: not-allowed;
}

.step-sort__icon {
  display: block;
}

.step-sort__icon-path {
  stroke: #9798a5;
}

.step-sort__icon-path--disabled {
  stroke: #363a3e;
}

.step-sort--hover-top .step-sort__segment--up,
.step-sort--hover-bottom .step-sort__segment--down {
  background: #363a3e;
}

.step-sort--hover-top .step-sort__segment--up .step-sort__icon-path,
.step-sort--hover-bottom .step-sort__segment--down .step-sort__icon-path {
  stroke: #fff;
}

.step-sort:not(.step-sort--disabled)
  .step-sort__segment:not(.step-sort__segment--disabled):hover {
  background: #363a3e;
}

.step-sort:not(.step-sort--disabled)
  .step-sort__segment:not(.step-sort__segment--disabled):hover
  .step-sort__icon-path {
  stroke: #fff;
}

.step-sort__segment--up {
  border-radius: 6px 6px 0 0;
}

.step-sort__segment--down {
  border-radius: 0 0 6px 6px;
}
</style>
