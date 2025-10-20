<template>
  <div class="number-count-showcase">
    <h1 class="main-title">Number Count</h1>

    <section class="variant-section">
      <h2 class="section-title">SIZES</h2>
      <div class="variant-row">
        <span class="row-label">Small</span>
        <NumberCountSmall :model-value="5" :max="10" />
      </div>
      <div class="variant-row">
        <span class="row-label">Large</span>
        <NumberCountLarge :model-value="5" :max="10" />
      </div>
    </section>

    <section class="variant-section">
      <h2 class="section-title">STATES</h2>
      <div class="variant-row">
        <span class="row-label">At Minimum</span>
        <NumberCountMinDefault :model-value="0" :min="0" :max="10" />
      </div>
      <div class="variant-row">
        <span class="row-label">At Maximum</span>
        <NumberCountMaxDefault :model-value="10" :min="0" :max="10" />
      </div>
      <div class="variant-row">
        <span class="row-label">Disabled</span>
        <NumberCountDisabled :model-value="5" :max="10" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import NumberCountSmall from "../components/Inputs/Number Count/NumberCount-Small.vue";
import NumberCountLarge from "../components/Inputs/Number Count/NumberCount-Large.vue";
import NumberCountMinDefault from "../components/Inputs/Number Count/NumberCount-MinDefault.vue";
import NumberCountMaxDefault from "../components/Inputs/Number Count/NumberCount-MaxDefault.vue";
import NumberCountDisabled from "../components/Inputs/Number Count/NumberCount-Disabled.vue";
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

.number-count-showcase {
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

.section-title {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
  color: #fff;
  text-transform: uppercase;
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
