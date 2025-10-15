<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import TextSelectInput from "./TextSelectInput.vue";

interface SuggestionItem {
  label: string;
  value: string;
}

interface Props {
  suggestions?: SuggestionItem[];
  placeholder?: string;
  modelValue?: string;
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
    { label: "Lorem ipsum", value: "lorem2" },
    { label: "Lorem ipsum", value: "lorem3" },
  ],
  placeholder: "Placeholder",
  modelValue: "Input",
  size: "256",
});

const emit = defineEmits<Emits>();

const internalValue = ref(props.modelValue);
const selectRef = ref<InstanceType<typeof TextSelectInput> | null>(null);

watch(
  () => props.modelValue,
  (val) => {
    if (val !== undefined && val !== internalValue.value) {
      internalValue.value = val as string;
    }
  }
);

onMounted(() => {
  if (selectRef.value) {
    (selectRef.value as any).isDropdownOpen = true;
    (selectRef.value as any).isFocused = true;
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
    ref="selectRef"
    :suggestions="props.suggestions"
    :placeholder="props.placeholder"
    :model-value="internalValue"
    :helper-text="props.helperText"
    state="filled"
    :show-menu="true"
    :size="props.size"
    @update:modelValue="handleModelUpdate"
    @change="handleChange"
  />
</template>
