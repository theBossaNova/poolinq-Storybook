<script setup lang="ts">
import { ref, onMounted } from "vue";
import TextSelectInput from "./TextSelectInput.vue";

interface SuggestionItem {
  label: string;
  value: string;
}

interface Props {
  suggestions?: SuggestionItem[];
  placeholder?: string;
  helperText?: string;
  showSearchIcon?: boolean;
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
  showSearchIcon: false,
  size: "256",
});

const emit = defineEmits<Emits>();

const selectRef = ref<InstanceType<typeof TextSelectInput> | null>(null);

onMounted(() => {
  if (selectRef.value) {
    (selectRef.value as any).isDropdownOpen = true;
    (selectRef.value as any).isFocused = true;
  }
});

const handleModelUpdate = (value: string) => {
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
    :helper-text="props.helperText"
    model-value=""
    state="focused"
    :show-menu="true"
    :show-search-icon="showSearchIcon"
    :size="props.size"
    @update:modelValue="handleModelUpdate"
    @change="handleChange"
  />
</template>
