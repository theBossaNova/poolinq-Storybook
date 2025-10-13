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

      <!-- Hover Row -->
      <div class="checkbox-row checkbox-row--hover">
        <span class="row-label">Hover</span>
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
.checkbox-showcase {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  min-height: 100vh;
  padding: 48px 16px;
}

.checkbox-showcase-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.checkbox-row {
  display: flex;
  align-items: center;
  gap: 24px;

  &--hover {
    .checkbox-wrapper {
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
      }

      // Simulate hover state
      .checkbox-icon {
        border-color: #33d68c;
      }

      .checkbox-input:checked + .checkbox-icon {
        .check-path {
          stroke: #33d68c;
        }

        .radio-path {
          fill: #33d68c;
        }
      }
    }
  }
}

.row-label {
  color: #fff;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
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
