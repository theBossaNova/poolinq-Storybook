<script setup lang="ts">
import { ref } from "vue";
import TextInputVariant from "./TextInputVariant.vue";

defineOptions({
  name: "Input – Filled",
});

const filledValue = ref("Placeholder text");
</script>

<template>
  <text-input-variant
    v-model="filledValue"
    variant="filled"
    placeholder="Placeholder"
  />
</template>
