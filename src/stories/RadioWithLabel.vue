<template>
  <div :class="wrapperClasses">
    <Checkbox
      type="radio"
      :checked="checked"
      :disabled="isDisabled"
      :state="props.state"
      @change="handleChange"
    />
    <div class="label">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Checkbox from "./Checkbox.vue";

interface Props {
  checked?: boolean;
  disabled?: boolean;
  state?: "default" | "hover" | "disabled";
  label?: string;
}

interface Emits {
  (event: "change", value: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  checked: false,
  disabled: false,
  state: "default",
  label: "Label",
});

const emit = defineEmits<Emits>();

const isDisabled = computed(() => props.disabled || props.state === "disabled");

const handleChange = (value: boolean) => {
  emit("change", value);
};

const wrapperClasses = computed(() => ({
  "radio-with-label": true,
  "radio-with-label--disabled": isDisabled.value,
  "radio-with-label--checked": props.checked,
  "radio-with-label--hover": props.state === "hover",
}));
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap");

.radio-with-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}

.radio-with-label--hover:not(.radio-with-label--disabled) .label,
.radio-with-label:not(.radio-with-label--disabled):hover .label {
  color: #ffffff;
}

.label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #e6e1f3;
  font-feature-settings: "ss01" on;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  user-select: none;
  transition: color 0.15s ease;
}
</style>
