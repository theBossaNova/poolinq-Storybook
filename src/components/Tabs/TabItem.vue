<template>
  <div :class="tabItemClasses" @click="handleClick">
    <div v-if="type === 'icon' && icon" class="tab-item__icon">
      <svg
        width="16"
        height="16"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.33337 5.10671V0.333374C3.00004 0.666707 0.333374 3.52671 0.333374 7.00004C0.333374 10.4734 3.00004 13.3334 6.33337 13.6667V8.89337C5.66671 8.62004 5.00004 7.88004 5.00004 7.00004C5.00004 6.12004 5.66671 5.38004 6.33337 5.10671ZM8.90671 6.33337H13.6667C13.3467 3.16671 11 0.646707 7.66671 0.333374V5.10671C8.33337 5.30671 8.68004 5.76004 8.90671 6.33337ZM7.66671 13.6667V8.89337C8.33337 8.69337 8.68004 8.24004 8.90671 7.66671H13.6667C13.3467 10.8334 11 13.3534 7.66671 13.6667Z"
          :fill="iconFill"
        />
      </svg>
    </div>
    <div v-if="type === 'text'" class="tab-item__label">{{ label }}</div>
    <div
      v-if="style === 'underline' && state === 'active'"
      class="tab-item__underline"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  type?: "text" | "icon";
  state?: "default" | "hover" | "active";
  style?: "underline" | "filled";
  label?: string;
  icon?: boolean;
}

interface Emits {
  (event: "click"): void;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  state: "default",
  style: "underline",
  label: "Item",
  icon: true,
});

const emit = defineEmits<Emits>();

const tabItemClasses = computed(() => ({
  "tab-item": true,
  [`tab-item--${props.type}`]: true,
  [`tab-item--${props.state}`]: true,
  [`tab-item--${props.style}`]: true,
}));

const iconFill = computed(() => {
  if (props.state === "active") {
    return props.style === "underline" ? "#0CBA4A" : "#FFF";
  }
  if (props.state === "hover") {
    return "#FFF";
  }
  return "#9798A5";
});

const handleClick = () => {
  emit("click");
};
</script>

<style lang="scss" scoped>
.tab-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  position: relative;

  &--text {
    padding: 0 16px;
    min-height: 40px;

    &.tab-item--filled {
      padding: 6px 16px;
      border-radius: 6px;
    }
  }

  &--icon {
    padding: 0 8px;
    min-height: 40px;

    &.tab-item--filled {
      padding: 8px;
      border-radius: 6px;
    }
  }

  &--filled.tab-item--active {
    background: #363a3e;
  }

  &--underline {
    padding-bottom: 8px;
  }

  &--underline.tab-item--active {
    padding-bottom: 6px;
  }
}

.tab-item__label {
  color: #9798a5;
  text-align: center;
  font-feature-settings: "ss01" on;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;

  .tab-item--active & {
    color: #0cba4a;
  }

  .tab-item--hover & {
    color: #fff;
  }

  .tab-item--filled.tab-item--active & {
    color: #fff;
  }
}

.tab-item__icon {
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
}

.tab-item__underline {
  height: 2px;
  align-self: stretch;
  background: #0cba4a;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  .tab-item--hover & {
    background: #d9d9d9;
  }
}
</style>
