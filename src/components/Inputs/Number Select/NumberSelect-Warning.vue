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

withDefaults(defineProps<Props>(), {
  modelValue: 8,
  currency: "€",
  min: 0,
  max: 999999,
  step: 1,
  helperText: "Warning message",
});

defineEmits<{
  (e: "update:modelValue", value: number): void;
  (e: "change", value: number): void;
}>();
</script>

<template>
  <NumberSelectInput
    v-bind="$props"
    v-on="$listeners"
    state="warning"
    :helper-text="helperText"
  />
</template>
