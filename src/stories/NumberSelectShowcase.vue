<template>
  <div class="number-select-showcase">
    <h1 class="main-title">Number Select</h1>

    <section class="variant-section">
      <div class="variant-row">
        <span class="row-label">Default</span>
        <NumberSelectDefault />
      </div>
      <div class="variant-row">
        <span class="row-label">Focused</span>
        <NumberSelectFocused />
      </div>
      <div class="variant-row">
        <span class="row-label">Filled</span>
        <NumberSelectFilled />
      </div>
      <div class="variant-row">
        <span class="row-label">Warning</span>
        <NumberSelectWarning />
      </div>
      <div class="variant-row">
        <span class="row-label">Error</span>
        <NumberSelectError />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import NumberSelectDefault from "../components/Inputs/Number Select/NumberSelect-Default.vue";
import NumberSelectFocused from "../components/Inputs/Number Select/NumberSelect-Focused.vue";
import NumberSelectFilled from "../components/Inputs/Number Select/NumberSelect-Filled.vue";
import NumberSelectWarning from "../components/Inputs/Number Select/NumberSelect-Warning.vue";
import NumberSelectError from "../components/Inputs/Number Select/NumberSelect-Error.vue";
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

.number-select-showcase {
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
