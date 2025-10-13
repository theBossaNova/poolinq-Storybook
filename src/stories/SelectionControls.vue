<template>
  <div class="selection-controls">
    <h1 v-if="props.showTitle" class="main-title">Controls</h1>

    <section v-if="visibleSections.has('checkbox')" class="control-section">
      <h2 class="section-title">CHECKBOX</h2>
      <div class="variant-row">
        <span class="row-label">Default</span>
        <Checkbox state="default" :checked="true" />
        <Checkbox state="default" :checked="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Hover</span>
        <Checkbox state="hover" :checked="true" />
        <Checkbox state="hover" :checked="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Disabled</span>
        <Checkbox state="disabled" :checked="true" />
        <Checkbox state="disabled" :checked="false" />
      </div>
    </section>

    <section v-if="visibleSections.has('radio')" class="control-section">
      <h2 class="section-title">RADIO</h2>
      <div class="variant-row">
        <span class="row-label">Default</span>
        <Checkbox type="radio" state="default" :checked="true" />
        <Checkbox type="radio" state="default" :checked="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Hover</span>
        <Checkbox type="radio" state="hover" :checked="true" />
        <Checkbox type="radio" state="hover" :checked="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Disabled</span>
        <Checkbox type="radio" state="disabled" :checked="true" />
        <Checkbox type="radio" state="disabled" :checked="false" />
      </div>
    </section>

    <section v-if="visibleSections.has('checkboxWithLabel')" class="control-section">
      <h2 class="section-title">CHECKBOX WITH LABEL</h2>
      <div class="variant-row">
        <span class="row-label">Default</span>
        <CheckboxWithLabel state="default" :checked="true" label="Label" />
        <CheckboxWithLabel state="default" :checked="false" label="Label" />
      </div>
      <div class="variant-row">
        <span class="row-label">Hover</span>
        <CheckboxWithLabel state="hover" :checked="true" label="Label" />
        <CheckboxWithLabel state="hover" :checked="false" label="Label" />
      </div>
      <div class="variant-row">
        <span class="row-label">Disabled</span>
        <CheckboxWithLabel state="disabled" :checked="true" label="Label" />
        <CheckboxWithLabel state="disabled" :checked="false" label="Label" />
      </div>
    </section>

    <section v-if="visibleSections.has('radioWithLabel')" class="control-section">
      <h2 class="section-title">RADIO WITH LABEL</h2>
      <div class="variant-row">
        <span class="row-label">Default</span>
        <RadioWithLabel state="default" :checked="true" label="Label" />
        <RadioWithLabel state="default" :checked="false" label="Label" />
      </div>
      <div class="variant-row">
        <span class="row-label">Hover</span>
        <RadioWithLabel state="hover" :checked="true" label="Label" />
        <RadioWithLabel state="hover" :checked="false" label="Label" />
      </div>
      <div class="variant-row">
        <span class="row-label">Disabled</span>
        <RadioWithLabel state="disabled" :checked="true" label="Label" />
        <RadioWithLabel state="disabled" :checked="false" label="Label" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Checkbox from "./Checkbox.vue";
import CheckboxWithLabel from "./CheckboxWithLabel.vue";
import RadioWithLabel from "./RadioWithLabel.vue";

type SectionKey = "checkbox" | "radio" | "checkboxWithLabel" | "radioWithLabel";

interface Props {
  sections?: SectionKey[];
  showTitle?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  sections: () => ["checkbox", "radio", "checkboxWithLabel", "radioWithLabel"],
  showTitle: true,
});

const visibleSections = computed(() => new Set(props.sections));
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.selection-controls {
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
  min-width: 80px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
}
</style>
