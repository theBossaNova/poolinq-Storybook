<script setup lang="ts">
import TextInputVariant from "./TextInputVariant.vue";

interface Props {
  modelValue?: string;
  placeholder?: string;
  autofocus?: boolean;
  size?: "256" | "160" | "100" | "80" | "64";
}

interface Emits {
  (event: "update:modelValue", value: string): void;
  (event: "change", value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "Placeholder text",
  placeholder: "Placeholder",
  autofocus: false,
  size: "256",
});

const emit = defineEmits<Emits>();

const handleModelUpdate = (value: string) => {
  emit("update:modelValue", value);
};

const handleChange = (value: string) => {
  emit("change", value);
};
</script>

<template>
  <TextInputVariant
    variant="error"
    :model-value="props.modelValue"
    :placeholder="props.placeholder"
    helper-text="Error message"
    :autofocus="props.autofocus"
    @update:modelValue="handleModelUpdate"
    @change="handleChange"
  />
</template>
