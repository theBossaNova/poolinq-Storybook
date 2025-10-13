<script setup lang="ts">
import { ref } from "vue";
import TextInputVariant from "./TextInputVariant.vue";

defineOptions({
  name: "Input – Typing",
});

const typingValue = ref("Pl");
</script>

<template>
  <text-input-variant
    v-model="typingValue"
    variant="typing"
    placeholder="Placeholder"
    autofocus
  />
</template>
