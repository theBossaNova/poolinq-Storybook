<script setup lang="ts">
import { computed } from "vue";

type StepSortVariant = "default" | "disabled-top" | "disabled-bottom" | "hover-top" | "hover-bottom";

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
]);

const handleIncrement = () => {
  if (!props.disabled && props.variant !== "disabled-top") {
    emit("increment");
  }
};

const handleDecrement = () => {
  if (!props.disabled && props.variant !== "disabled-bottom") {
    emit("decrement");
  }
};
</script>

<template>
  <div :class="containerClasses">
    <div class="step-sort-up" @click="handleIncrement">
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 5.50024L6 2.50024L3 5.50024"
          :stroke="variant === 'disabled-top' ? '#363A3E' : variant === 'hover-top' ? 'white' : '#9798A5'"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="step-sort-down" @click="handleDecrement">
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 2.50024L6 5.50024L9 2.50024"
          :stroke="variant === 'disabled-bottom' ? '#363A3E' : variant === 'hover-bottom' ? 'white' : '#9798A5'"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.step-sort {
  display: flex;
  width: 24px;
  height: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
  border-radius: 6px;
}

.step-sort-up,
.step-sort-down {
  display: flex;
  width: 12px;
  height: 8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;

  svg {
    display: block;
  }
}

.step-sort--hover-top .step-sort-up {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 6px 6px 0 0;
  background: #363a3e;
}

.step-sort--hover-bottom .step-sort-down {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0 0 6px 6px;
  background: #363a3e;
}

.step-sort--disabled-top .step-sort-up,
.step-sort--disabled-bottom .step-sort-down {
  cursor: not-allowed;
  opacity: 0.5;
}

.step-sort--default .step-sort-up:hover {
  background: #363a3e;
  border-radius: 6px 6px 0 0;

  path {
    stroke: white;
  }
}

.step-sort--default .step-sort-down:hover {
  background: #363a3e;
  border-radius: 0 0 6px 6px;

  path {
    stroke: white;
  }
}
</style>
