<script setup lang="ts">
import NumberSelectInput from "./NumberSelectInput.vue";
</script>

<template>
  <NumberSelectInput
    :model-value="8"
    state="warning"
    helper-text="Warning message"
  />
</template>
