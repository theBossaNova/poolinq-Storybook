<script setup lang="ts">
import NumberSelectInput from "./NumberSelectInput.vue";

interface Props {
  modelValue?: number;
  currency?: string;
  min?: number;
  max?: number;
  step?: number;
  helperText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 8,
  currency: "€",
  min: 0,
  max: 999999,
  step: 1,
  helperText: "Error message",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
  (e: "change", value: number): void;
}>();

const handleUpdateModelValue = (value: number) => {
  emit("update:modelValue", value);
};

const handleChange = (value: number) => {
  emit("change", value);
};
</script>

<template>
  <NumberSelectInput
    :model-value="modelValue"
    :currency="currency"
    :min="min"
    :max="max"
    :step="step"
    :helper-text="helperText"
    state="error"
    @update:model-value="handleUpdateModelValue"
    @change="handleChange"
  />
</template>
