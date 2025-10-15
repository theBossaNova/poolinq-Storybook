<template>
  <button type="button" :class="classes" @click="onClick" :disabled="disabled">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { Size } from "@/types/Size";
import { computed } from "vue";

interface Props {
  label: string;
  primary?: boolean;
  size: Size;
  disabled?: boolean;
}

interface Emits {
  (event: "click"): void;
}

const props = withDefaults(defineProps<Props>(), {
  primary: false,
  disabled: false,
});

const emit = defineEmits<Emits>();

const onClick = () => {
  emit("click");
};

const classes = computed(() => ({
  "storybook-button": true,
  "storybook-button--primary": props.primary,
  "storybook-button--secondary": !props.primary,
  [`storybook-button--${props.size || "medium"}`]: true,
}));
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");

.storybook-button {
  font-family: "Roboto", -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: inline-block;
  line-height: normal;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.storybook-button--primary {
  color: #fff;
  background-color: #0CBA4A;

  &:hover:not(:disabled) {
    background-color: #0AA43F;
  }
}

.storybook-button--secondary {
  color: #e6e1f3;
  background-color: #6b7280;

  &:hover:not(:disabled) {
    background-color: #4b5563;
  }
}

.storybook-button--small {
  padding: 8px 16px;
  font-size: 14px;
}

.storybook-button--medium {
  padding: 12px 24px;
  font-size: 14px;
}

.storybook-button--large {
  padding: 16px 32px;
  font-size: 14px;
}
</style>
