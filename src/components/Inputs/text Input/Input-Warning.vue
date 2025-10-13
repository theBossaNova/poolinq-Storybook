<script setup lang="ts">
import { ref } from "vue";
import TextInputVariant from "./TextInputVariant.vue";

defineOptions({
  name: "Input – Warning",
});

const warningValue = ref("Placeholder text");
</script>

<template>
  <text-input-variant
    v-model="warningValue"
    variant="warning"
    placeholder="Placeholder"
  />
</template>
