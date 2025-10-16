<script setup lang="ts">
import NumberCountInput from "./NumberCountInput.vue";

interface Props {
  modelValue?: number;
  min?: number;
  max?: number;
  step?: number;
}

withDefaults(defineProps<Props>(), {
  modelValue: 10,
  min: 0,
  max: 10,
  step: 1,
});

defineEmits<{
  (e: "update:modelValue", value: number): void;
  (e: "change", value: number): void;
}>();
</script>

<template>
  <NumberCountInput
    :model-value="modelValue"
    :min="min"
    :max="max"
    :step="step"
    size="default"
    @update:model-value="$emit('update:modelValue', $event)"
    @change="$emit('change', $event)"
  />
</template>
