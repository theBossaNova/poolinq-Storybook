<script setup lang="ts">
import { ref, watch } from "vue";
import TextSelectInput from "./TextSelectInput.vue";

interface SuggestionItem {
  label: string;
  value: string;
}

interface Props {
  suggestions?: SuggestionItem[];
  placeholder?: string;
  modelValue?: string;
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
  modelValue: "Input",
  size: "256",
});

const emit = defineEmits<Emits>();

const internalValue = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
  if (val !== undefined && val !== internalValue.value) {
    internalValue.value = val as string;
  }
});

const handleModelUpdate = (value: string) => {
  internalValue.value = value;
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
    :model-value="internalValue"
    state="error"
    :show-menu="false"
    :size="props.size"
    @update:modelValue="handleModelUpdate"
    @change="handleChange"
  />
</template>
