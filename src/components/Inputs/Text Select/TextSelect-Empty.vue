<script setup lang="ts">
import TextSelectInput from "./TextSelectInput.vue";

interface SuggestionItem {
  label: string;
  value: string;
}

interface Props {
  suggestions?: SuggestionItem[];
  placeholder?: string;
  helperText?: string;
  size?: "256" | "160" | "100" | "80" | "64";
}

interface Emits {
  (event: "update:modelValue", value: string): void;
  (event: "change", value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  suggestions: () => [
    { label: "Lorem ipsum", value: "lorem1" },
    { label: "Input", value: "input" },
    { label: "Lorem ipsum", value: "lorem2" },
  ],
  placeholder: "Placeholder",
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
  <TextSelectInput
    :suggestions="props.suggestions"
    :placeholder="props.placeholder"
    :helper-text="props.helperText"
    model-value=""
    state="empty"
    :show-menu="false"
    :size="props.size"
    @update:modelValue="handleModelUpdate"
    @change="handleChange"
  />
</template>
