<template>
  <div class="badges-variants">
    <h1 v-if="props.showTitle" class="main-title">Badge Components</h1>

    <section class="control-section">
      <h2 class="section-title">SUCCESS BADGES</h2>
      <div class="variant-row">
        <span class="row-label">Outline Rounded</span>
        <Badge type="success" variant="outline" shape="rounded" text="Success" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Outline Sharp</span>
        <Badge type="success" variant="outline" shape="sharp" text="Success" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Subtle Rounded</span>
        <Badge type="success" variant="subtle" shape="rounded" text="Success" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Subtle Sharp</span>
        <Badge type="success" variant="subtle" shape="sharp" text="Success" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Filled Rounded</span>
        <Badge type="success" variant="filled" shape="rounded" text="Success" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Filled Sharp</span>
        <Badge type="success" variant="filled" shape="sharp" text="Success" :showIcon="true" :showDelete="false" />
      </div>
    </section>

    <section class="control-section">
      <h2 class="section-title">ERROR BADGES</h2>
      <div class="variant-row">
        <span class="row-label">Outline Rounded</span>
        <Badge type="error" variant="outline" shape="rounded" text="Error" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Outline Sharp</span>
        <Badge type="error" variant="outline" shape="sharp" text="Error" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Subtle Rounded</span>
        <Badge type="error" variant="subtle" shape="rounded" text="Error" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Subtle Sharp</span>
        <Badge type="error" variant="subtle" shape="sharp" text="Error" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Filled Rounded</span>
        <Badge type="error" variant="filled" shape="rounded" text="Error" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Filled Sharp</span>
        <Badge type="error" variant="filled" shape="sharp" text="Error" :showIcon="true" :showDelete="false" />
      </div>
    </section>

    <section class="control-section">
      <h2 class="section-title">WARNING BADGES</h2>
      <div class="variant-row">
        <span class="row-label">Outline Rounded</span>
        <Badge type="warning" variant="outline" shape="rounded" text="Warning" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Outline Sharp</span>
        <Badge type="warning" variant="outline" shape="sharp" text="Warning" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Subtle Rounded</span>
        <Badge type="warning" variant="subtle" shape="rounded" text="Warning" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Subtle Sharp</span>
        <Badge type="warning" variant="subtle" shape="sharp" text="Warning" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Filled Rounded</span>
        <Badge type="warning" variant="filled" shape="rounded" text="Warning" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Filled Sharp</span>
        <Badge type="warning" variant="filled" shape="sharp" text="Warning" :showIcon="true" :showDelete="false" />
      </div>
    </section>

    <section class="control-section">
      <h2 class="section-title">NEUTRAL BADGES</h2>
      <div class="variant-row">
        <span class="row-label">Outline Rounded</span>
        <Badge type="neutral" variant="outline" shape="rounded" text="Neutral" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Outline Sharp</span>
        <Badge type="neutral" variant="outline" shape="sharp" text="Neutral" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Subtle Rounded</span>
        <Badge type="neutral" variant="subtle" shape="rounded" text="Neutral" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Subtle Sharp</span>
        <Badge type="neutral" variant="subtle" shape="sharp" text="Neutral" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Filled Rounded</span>
        <Badge type="neutral" variant="filled" shape="rounded" text="Neutral" :showIcon="true" :showDelete="false" />
      </div>
      <div class="variant-row">
        <span class="row-label">Filled Sharp</span>
        <Badge type="neutral" variant="filled" shape="sharp" text="Neutral" :showIcon="true" :showDelete="false" />
      </div>
    </section>

    <section class="control-section">
      <h2 class="section-title">WITH DELETE BUTTON</h2>
      <div class="variant-row">
        <span class="row-label">Success</span>
        <Badge type="success" variant="filled" shape="rounded" text="Closeable" :showIcon="true" :showDelete="true" />
      </div>
      <div class="variant-row">
        <span class="row-label">Error</span>
        <Badge type="error" variant="filled" shape="rounded" text="Closeable" :showIcon="true" :showDelete="true" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Badge from "../components/Badges/Badge.vue";

interface Props {
  showTitle?: boolean;
}

withDefaults(defineProps<Props>(), {
  showTitle: true,
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.badges-variants {
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
  min-width: 140px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
}
</style>
