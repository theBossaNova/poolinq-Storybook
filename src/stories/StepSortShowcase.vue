<template>
  <div class="step-sort-showcase">
    <h1 class="main-title">Step Sort</h1>

    <section class="variant-section">
      <div class="variant-row">
        <span class="row-label">Default</span>
        <StepSortDefault />
      </div>
      <div class="variant-row">
        <span class="row-label">Disabled Top</span>
        <StepSortDisabledTop />
      </div>
      <div class="variant-row">
        <span class="row-label">Disabled Bottom</span>
        <StepSortDisabledBottom />
      </div>
      <div class="variant-row">
        <span class="row-label">Hover Top</span>
        <StepSortHoverTop />
      </div>
      <div class="variant-row">
        <span class="row-label">Hover Bottom</span>
        <StepSortHoverBottom />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import StepSortDefault from "../components/SelectionControls/StepSort-Default.vue";
import StepSortDisabledTop from "../components/SelectionControls/StepSort-DisabledTop.vue";
import StepSortDisabledBottom from "../components/SelectionControls/StepSort-DisabledBottom.vue";
import StepSortHoverTop from "../components/SelectionControls/StepSort-HoverTop.vue";
import StepSortHoverBottom from "../components/SelectionControls/StepSort-HoverBottom.vue";
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

.step-sort-showcase {
  background-color: #121212;
  min-height: 100vh;
  padding: 40px;
  color: #fff;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
}

.main-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #fff;
}

.variant-section {
  margin-bottom: 48px;
}

.variant-row {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.row-label {
  min-width: 120px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
}
</style>
