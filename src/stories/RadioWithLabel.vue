<template>
  <div :class="wrapperClasses">
    <Checkbox
      type="radio"
      :checked="checked"
      :disabled="disabled"
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
  label?: string;
}

interface Emits {
  (event: "change", value: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  checked: false,
  disabled: false,
  label: "Label",
});

const emit = defineEmits<Emits>();

const handleChange = (value: boolean) => {
  emit("change", value);
};

const wrapperClasses = computed(() => ({
  "radio-with-label": true,
  "radio-with-label--disabled": props.disabled,
  "radio-with-label--checked": props.checked,
}));
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap");

.radio-with-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #e6e1f3;
  background: transparent;
  transition: border-color 0.15s ease;
  cursor: pointer;

  &--checked {
    border-color: #0cba4a;
  }

  &--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
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
}
</style>
