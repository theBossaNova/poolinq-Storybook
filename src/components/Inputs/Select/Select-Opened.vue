<script setup lang="ts">
import { ref, onMounted } from "vue";
import SelectInput from "./SelectInput.vue";

interface SelectItem {
  label: string;
  value: string | number;
}

interface Props {
  items?: SelectItem[];
  placeholder?: string;
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
});

const emit = defineEmits<Emits>();

const selectRef = ref<InstanceType<typeof SelectInput> | null>(null);

onMounted(() => {
  if (selectRef.value) {
    (selectRef.value as any).isOpen = true;
  }
});

const handleModelUpdate = (value: string | number) => {
  emit("update:modelValue", value);
};

const handleChange = (value: string | number) => {
  emit("change", value);
};
</script>

<template>
  <SelectInput
    ref="selectRef"
    :items="props.items"
    :placeholder="props.placeholder"
    state="empty"
    @update:modelValue="handleModelUpdate"
    @change="handleChange"
  />
</template>
