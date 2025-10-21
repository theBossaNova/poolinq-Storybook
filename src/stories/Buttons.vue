<template>
  <div class="buttons-variants">
    <h1 v-if="props.showTitle" class="main-title">Button Components</h1>

    <section class="control-section">
      <h2 class="section-title">PRIMARY BUTTONS</h2>
      <div class="variant-row">
        <span class="row-label">Large</span>
        <BasicButton label="Button" size="large" :primary="true" />
      </div>
      <div class="variant-row">
        <span class="row-label">Medium</span>
        <BasicButton label="Button" size="medium" :primary="true" />
      </div>
      <div class="variant-row">
        <span class="row-label">Small</span>
        <BasicButton label="Button" size="small" :primary="true" />
      </div>
    </section>

    <section class="control-section">
      <h2 class="section-title">PRIMARY DISABLED</h2>
      <div class="variant-row">
        <span class="row-label">Large</span>
        <BasicButton label="Button" size="large" :primary="true" :disabled="true" />
      </div>
      <div class="variant-row">
        <span class="row-label">Medium</span>
        <BasicButton label="Button" size="medium" :primary="true" :disabled="true" />
      </div>
      <div class="variant-row">
        <span class="row-label">Small</span>
        <BasicButton label="Button" size="small" :primary="true" :disabled="true" />
      </div>
    </section>

    <section class="control-section">
      <h2 class="section-title">SECONDARY BUTTONS</h2>
      <div class="variant-row">
        <span class="row-label">Large</span>
        <BasicButton label="Button" size="large" :primary="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Medium</span>
        <BasicButton label="Button" size="medium" :primary="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Small</span>
        <BasicButton label="Button" size="small" :primary="false" />
      </div>
    </section>

    <section class="control-section">
      <h2 class="section-title">SECONDARY DISABLED</h2>
      <div class="variant-row">
        <span class="row-label">Large</span>
        <BasicButton label="Button" size="large" :primary="false" :disabled="true" />
      </div>
      <div class="variant-row">
        <span class="row-label">Medium</span>
        <BasicButton label="Button" size="medium" :primary="false" :disabled="true" />
      </div>
      <div class="variant-row">
        <span class="row-label">Small</span>
        <BasicButton label="Button" size="small" :primary="false" :disabled="true" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BasicButton from "./BasicButton.vue";

interface Props {
  showTitle?: boolean;
}

withDefaults(defineProps<Props>(), {
  showTitle: true,
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.buttons-variants {
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
  min-width: 100px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
}
</style>
