<template>
  <div class="checkbox-showcase">
    <div class="checkbox-showcase-content">
      <!-- Default Row -->
      <div class="checkbox-row">
        <span class="row-label">Default</span>
        <div class="checkbox-variant-row">
          <Checkbox type="checkbox" :checked="true" />
          <Checkbox type="checkbox" :checked="false" />
          <Checkbox type="radio" :checked="true" />
          <Checkbox type="radio" :checked="false" />
        </div>
      </div>

      <!-- Disabled Row -->
      <div class="checkbox-row">
        <span class="row-label">Disabled</span>
        <div class="checkbox-variant-row">
          <Checkbox type="checkbox" :checked="true" disabled />
          <Checkbox type="checkbox" :checked="false" disabled />
          <Checkbox type="radio" :checked="true" disabled />
          <Checkbox type="radio" :checked="false" disabled />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Checkbox from "./Checkbox.vue";
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap");

.checkbox-showcase {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #121212;
  min-height: 100vh;
  padding: 18px 6px;
}

.checkbox-showcase-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
}

.checkbox-row {
  display: flex;
  align-items: center;
  gap: 24px;
}

.row-label {
  color: #fff;
  font-feature-settings: "ss01" on;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  min-width: 80px;
}

.checkbox-variant-row {
  display: flex;
  align-items: center;
  gap: 24px;
}
</style>
