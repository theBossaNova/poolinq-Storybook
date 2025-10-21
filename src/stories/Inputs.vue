<template>
  <div class="inputs-variants">
    <h1 v-if="props.showTitle" class="main-title">Input Components</h1>

    <section class="control-section">
      <h2 class="section-title">TEXT INPUT</h2>
      <div class="variant-row">
        <span class="row-label">Default</span>
        <Input-Default />
      </div>
      <div class="variant-row">
        <span class="row-label">Focused</span>
        <Input-Typing />
      </div>
      <div class="variant-row">
        <span class="row-label">Filled</span>
        <Input-Filled />
      </div>
      <div class="variant-row">
        <span class="row-label">Warning</span>
        <Input-Warning />
      </div>
      <div class="variant-row">
        <span class="row-label">Error</span>
        <Input-Error />
      </div>
      <div class="variant-row">
        <span class="row-label">Disabled</span>
        <Input-Disabled />
      </div>
      <div class="variant-row">
        <span class="row-label">Search Icon</span>
        <Input-SearchIcon />
      </div>
    </section>

    <section class="control-section">
      <h2 class="section-title">NUMBER COUNT</h2>
      <div class="variant-row">
        <span class="row-label">Small</span>
        <NumberCount-Small />
      </div>
      <div class="variant-row">
        <span class="row-label">Default</span>
        <NumberCount-Default />
      </div>
      <div class="variant-row">
        <span class="row-label">Large</span>
        <NumberCount-Large />
      </div>
      <div class="variant-row">
        <span class="row-label">Disabled</span>
        <NumberCount-Disabled />
      </div>
    </section>

    <section class="control-section">
      <h2 class="section-title">NUMBER SELECT</h2>
      <div class="variant-row">
        <span class="row-label">Default</span>
        <NumberSelect-Default />
      </div>
      <div class="variant-row">
        <span class="row-label">Focused</span>
        <NumberSelect-Focused />
      </div>
      <div class="variant-row">
        <span class="row-label">Filled</span>
        <NumberSelect-Filled />
      </div>
      <div class="variant-row">
        <span class="row-label">Warning</span>
        <NumberSelect-Warning />
      </div>
      <div class="variant-row">
        <span class="row-label">Error</span>
        <NumberSelect-Error />
      </div>
    </section>

    <section class="control-section">
      <h2 class="section-title">SELECT</h2>
      <div class="variant-row">
        <span class="row-label">Closed</span>
        <Select-Closed />
      </div>
      <div class="variant-row">
        <span class="row-label">Selected</span>
        <Select-Selected />
      </div>
      <div class="variant-row">
        <span class="row-label">Opened</span>
        <Select-Opened />
      </div>
      <div class="variant-row">
        <span class="row-label">Warning</span>
        <Select-Warning />
      </div>
      <div class="variant-row">
        <span class="row-label">Error</span>
        <Select-Error />
      </div>
    </section>

    <section class="control-section">
      <h2 class="section-title">TEXT SELECT</h2>
      <div class="variant-row">
        <span class="row-label">Empty</span>
        <TextSelect-Empty />
      </div>
      <div class="variant-row">
        <span class="row-label">Empty Typing</span>
        <TextSelect-EmptyTyping />
      </div>
      <div class="variant-row">
        <span class="row-label">Filled</span>
        <TextSelect-Filled />
      </div>
      <div class="variant-row">
        <span class="row-label">Filled Typing</span>
        <TextSelect-FilledTyping />
      </div>
      <div class="variant-row">
        <span class="row-label">Warning</span>
        <TextSelect-Warning />
      </div>
      <div class="variant-row">
        <span class="row-label">Error</span>
        <TextSelect-Error />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import InputDefault from "../components/Inputs/text Input/Input-Default.vue";
import InputTyping from "../components/Inputs/text Input/Input-Typing.vue";
import InputFilled from "../components/Inputs/text Input/Input-Filled.vue";
import InputWarning from "../components/Inputs/text Input/Input-Warning.vue";
import InputError from "../components/Inputs/text Input/Input-Error.vue";
import InputDisabled from "../components/Inputs/text Input/Input-Disabled.vue";
import InputSearchIcon from "../components/Inputs/text Input/Input-SearchIcon.vue";

import NumberCountSmall from "../components/Inputs/Number Count/NumberCount-Small.vue";
import NumberCountDefault from "../components/Inputs/Number Count/NumberCount-Default.vue";
import NumberCountLarge from "../components/Inputs/Number Count/NumberCount-Large.vue";
import NumberCountDisabled from "../components/Inputs/Number Count/NumberCount-Disabled.vue";

import NumberSelectDefault from "../components/Inputs/Number Select/NumberSelect-Default.vue";
import NumberSelectFocused from "../components/Inputs/Number Select/NumberSelect-Focused.vue";
import NumberSelectFilled from "../components/Inputs/Number Select/NumberSelect-Filled.vue";
import NumberSelectWarning from "../components/Inputs/Number Select/NumberSelect-Warning.vue";
import NumberSelectError from "../components/Inputs/Number Select/NumberSelect-Error.vue";

import SelectClosed from "../components/Inputs/Select/Select-Closed.vue";
import SelectSelected from "../components/Inputs/Select/Select-Selected.vue";
import SelectOpened from "../components/Inputs/Select/Select-Opened.vue";
import SelectWarning from "../components/Inputs/Select/Select-Warning.vue";
import SelectError from "../components/Inputs/Select/Select-Error.vue";

import TextSelectEmpty from "../components/Inputs/Text Select/TextSelect-Empty.vue";
import TextSelectEmptyTyping from "../components/Inputs/Text Select/TextSelect-EmptyTyping.vue";
import TextSelectFilled from "../components/Inputs/Text Select/TextSelect-Filled.vue";
import TextSelectFilledTyping from "../components/Inputs/Text Select/TextSelect-FilledTyping.vue";
import TextSelectWarning from "../components/Inputs/Text Select/TextSelect-Warning.vue";
import TextSelectError from "../components/Inputs/Text Select/TextSelect-Error.vue";

interface Props {
  showTitle?: boolean;
}

withDefaults(defineProps<Props>(), {
  showTitle: true,
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.inputs-variants {
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
