<script setup lang="ts">
import { ref } from "vue";
import TextInputVariant from "./TextInputVariant.vue";

defineOptions({
  name: "Input – Error",
});

const errorValue = ref("Placeholder text");
</script>

<template>
  <text-input-variant
    v-model="errorValue"
    variant="error"
    placeholder="Placeholder"
  />
</template>
