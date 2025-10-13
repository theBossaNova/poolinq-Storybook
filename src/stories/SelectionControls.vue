<template>
  <div class="selection-controls">
    <h1 class="main-title">Controls</h1>

    <!-- CHECKBOX Section -->
    <section class="control-section">
      <h2 class="section-title">CHECKBOX</h2>
      <div class="variant-row">
        <span class="row-label">Default</span>
        <Checkbox :checked="true" />
        <Checkbox :checked="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Hover</span>
        <Checkbox :checked="true" />
        <Checkbox :checked="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Disabled</span>
        <Checkbox :checked="true" disabled />
        <Checkbox :checked="false" disabled />
      </div>
    </section>

    <!-- RADIO Section -->
    <section class="control-section">
      <h2 class="section-title">RADIO</h2>
      <div class="variant-row">
        <span class="row-label">Default</span>
        <Checkbox type="radio" :checked="true" />
        <Checkbox type="radio" :checked="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Hover</span>
        <Checkbox type="radio" :checked="true" />
        <Checkbox type="radio" :checked="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Disabled</span>
        <Checkbox type="radio" :checked="true" disabled />
        <Checkbox type="radio" :checked="false" disabled />
      </div>
    </section>

    <!-- CHECKBOX WITH LABEL Section -->
    <section class="control-section">
      <h2 class="section-title">CHECKBOX WITH LABEL</h2>
      <div class="variant-row">
        <span class="row-label">Default</span>
        <CheckboxWithLabel :checked="true" label="Label" />
        <CheckboxWithLabel :checked="false" label="Label" />
      </div>
      <div class="variant-row">
        <span class="row-label">Hover</span>
        <CheckboxWithLabel :checked="true" label="Label" />
        <CheckboxWithLabel :checked="false" label="Label" />
      </div>
      <div class="variant-row">
        <span class="row-label">Disabled</span>
        <CheckboxWithLabel :checked="true" disabled label="Label" />
        <CheckboxWithLabel :checked="false" disabled label="Label" />
      </div>
    </section>

    <!-- RADIO WITH LABEL Section -->
    <section class="control-section">
      <h2 class="section-title">RADIO WITH LABEL</h2>
      <div class="variant-row">
        <span class="row-label">Default</span>
        <RadioWithLabel :checked="true" label="Label" />
        <RadioWithLabel :checked="false" label="Label" />
      </div>
      <div class="variant-row">
        <span class="row-label">Hover</span>
        <RadioWithLabel :checked="true" label="Label" />
        <RadioWithLabel :checked="false" label="Label" />
      </div>
      <div class="variant-row">
        <span class="row-label">Disabled</span>
        <RadioWithLabel :checked="true" disabled label="Label" />
        <RadioWithLabel :checked="false" disabled label="Label" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Checkbox from "./Checkbox.vue";
import CheckboxWithLabel from "./CheckboxWithLabel.vue";
import RadioWithLabel from "./RadioWithLabel.vue";
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.selection-controls {
  background-color: #2b2b2b;
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

.control-section {
  margin-bottom: 48px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
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
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
}

.row-label {
  min-width: 80px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
}
</style>
