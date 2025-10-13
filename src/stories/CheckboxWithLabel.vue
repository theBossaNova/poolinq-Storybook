<template>
  <div :class="wrapperClasses">
    <Checkbox
      :type="type"
      :checked="model"
      :disabled="isDisabled"
      :state="props.state"
      @update:checked="handleCheckboxUpdate"
    />
    <div class="label" contenteditable="false">{{ labelModel }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Checkbox from "./Checkbox.vue";

interface Props {
  type?: "checkbox" | "radio";
  checked?: boolean;
  disabled?: boolean;
  state?: "default" | "hover" | "disabled";
  label?: string;
}

interface Emits {
  (event: "update:checked", value: boolean): void;
  (event: "update:label", value: string): void;
  (event: "change", value: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  type: "checkbox",
  checked: false,
  disabled: false,
  state: "default",
  label: "Label",
});

const emit = defineEmits<Emits>();

const model = computed({
  get: () => props.checked,
  set: (value: boolean) => {
    emit("update:checked", value);
  },
});

const labelModel = computed({
  get: () => props.label,
  set: (value: string) => emit("update:label", value),
});

const isDisabled = computed(() => props.disabled || props.state === "disabled");

const handleCheckboxUpdate = (value: boolean) => {
  emit("change", value);
  emit("update:checked", value);
};

const wrapperClasses = computed(() => ({
  "checkbox-with-label": true,
  "checkbox-with-label--disabled": isDisabled.value,
  "checkbox-with-label--checked": model.value,
  "checkbox-with-label--hover": props.state === "hover",
}));
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap");

.checkbox-with-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}

.checkbox-with-label--hover:not(.checkbox-with-label--disabled) .label,
.checkbox-with-label:not(.checkbox-with-label--disabled):hover .label {
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
