<script setup lang="ts">
import TextInputVariant from "./TextInputVariant.vue";

interface SuggestionItem {
  label: string;
  value: string;
}

interface Props {
  modelValue?: string;
  placeholder?: string;
  autofocus?: boolean;
  size?: "256" | "160" | "100" | "80" | "64";
  suggestions?: SuggestionItem[];
}

interface Emits {
  (event: "update:modelValue", value: string): void;
  (event: "change", value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "Input",
  placeholder: "Placeholder",
  autofocus: false,
  size: "256",
  suggestions: () => [
    { label: "Lorem ipsum", value: "lorem1" },
    { label: "Lorem ipsum", value: "lorem2" },
    { label: "Lorem ipsum", value: "lorem3" },
  ],
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
    variant="filled"
    :model-value="props.modelValue"
    :placeholder="props.placeholder"
    helper-text="Helper Text"
    :autofocus="props.autofocus"
    :size="props.size"
    :show-menu="true"
    :suggestions="props.suggestions"
    @update:modelValue="handleModelUpdate"
    @change="handleChange"
  />
</template>
