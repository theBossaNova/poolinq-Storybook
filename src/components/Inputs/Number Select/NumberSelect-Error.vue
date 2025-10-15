<script setup lang="ts">
import NumberSelectInput from "./NumberSelectInput.vue";
</script>

<template>
  <NumberSelectInput
    :model-value="8"
    state="error"
    helper-text="Error message"
  />
</template>
