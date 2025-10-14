<script setup lang="ts">
import { ref } from "vue";
import SelectInput from "./SelectInput.vue";

interface SelectItem {
  label: string;
  value: string | number;
}

interface Props {
  items?: SelectItem[];
  placeholder?: string;
  modelValue?: string | number;
  size?: "256" | "160" | "100" | "80" | "64";
}

interface Emits {
  (event: "update:modelValue", value: string | number): void;
  (event: "change", value: string | number): void;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [
    { label: "Item 1", value: "item1" },
    { label: "Item 2", value: "item2" },
    { label: "Item 3", value: "item3" },
  ],
  placeholder: "Placeholder",
  modelValue: "item2",
  size: "256",
});

const emit = defineEmits<Emits>();

const internalValue = ref(props.modelValue);

const handleModelUpdate = (value: string | number) => {
  internalValue.value = value;
  emit("update:modelValue", value);
};

const handleChange = (value: string | number) => {
  emit("change", value);
};
</script>

<template>
  <SelectInput
    :items="props.items"
    :placeholder="props.placeholder"
    :model-value="internalValue"
    state="selected"
    :show-menu="true"
    @update:modelValue="handleModelUpdate"
    @change="handleChange"
  />
</template>
