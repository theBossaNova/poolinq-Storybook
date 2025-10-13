<script setup lang="ts">
import { ref } from "vue";
import TextInputVariant from "./TextInputVariant.vue";

defineOptions({
  name: "Input – Disabled",
});

const disabledValue = ref("Disabled state");
</script>

<template>
  <text-input-variant
    v-model="disabledValue"
    variant="disabled"
    placeholder="Placeholder"
  />
</template>
