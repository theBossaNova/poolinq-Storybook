<template>
  <div class="checkbox-showcase">
    <div class="checkbox-variant-row">
      <Checkbox :checked="true" />
      <Checkbox :checked="false" />
      <Checkbox :checked="true" disabled />
      <Checkbox :checked="false" disabled />
    </div>
  </div>
</template>

<script setup lang="ts">
import Checkbox from "./Checkbox.vue";
</script>

<style scoped lang="scss">
.checkbox-showcase {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  min-height: 100vh;
  padding: 48px 16px;
}

.checkbox-variant-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}
</style>
