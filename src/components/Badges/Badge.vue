<template>
  <div :class="badgeClasses">
    <div class="badge__content">
      <div v-if="showIcon" class="badge__icon">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              opacity="0.12"
              d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
              fill="black"
            />
            <path
              d="M3.75 6L5.25 7.5L8.25 4.5M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
              :stroke="iconStroke"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="badge__text">{{ text }}</div>
    </div>
    <div v-if="showDelete" class="badge__delete" @click="handleDelete">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 3L3 9M3 3L9 9"
          :stroke="iconStroke"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  type?: "success" | "warning" | "error" | "neutral";
  variant?: "outline" | "subtle" | "filled";
  shape?: "sharp" | "rounded";
  text?: string;
  showIcon?: boolean;
  showDelete?: boolean;
}

interface Emits {
  (event: "delete"): void;
}

const props = withDefaults(defineProps<Props>(), {
  type: "success",
  variant: "outline",
  shape: "rounded",
  text: "Placeholder",
  showIcon: true,
  showDelete: true,
});

const emit = defineEmits<Emits>();

const badgeClasses = computed(() => ({
  badge: true,
  [`badge--${props.type}`]: true,
  [`badge--${props.variant}`]: true,
  [`badge--${props.shape}`]: true,
}));

const iconStroke = computed(() => {
  return props.variant === "filled" ? "#1B1B1C" : "white";
});

const handleDelete = () => {
  emit("delete");
};
</script>

<style lang="scss" scoped>
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 16px;
  border: 2px solid;
  font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  font-feature-settings: "ss01" on;
  min-height: 32px;
  box-sizing: border-box;

  &--sharp {
    border-radius: 6px;
  }

  &--rounded {
    border-radius: 50px;
  }
}

.badge__content {
  display: flex;
  align-items: center;
  gap: 4px;
}

.badge__icon {
  display: flex;
  width: 12px;
  height: 12px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.badge__text {
  color: #fff;
  white-space: nowrap;
}

.badge__delete {
  display: flex;
  width: 12px;
  height: 12px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

.badge--success {
  &.badge--outline {
    border-color: #0cba4a;
    background: transparent;

    .badge__text {
      color: #fff;
    }
  }

  &.badge--subtle {
    border-color: #0cba4a;
    background: rgba(12, 186, 74, 0.12);

    .badge__text {
      color: #fff;
    }
  }

  &.badge--filled {
    border-color: #0cba4a;
    background: #0cba4a;

    .badge__text {
      color: #1b1b1c;
    }
  }
}

.badge--warning {
  &.badge--outline {
    border-color: #ffc107;
    background: transparent;

    .badge__text {
      color: #fff;
    }
  }

  &.badge--subtle {
    border-color: #ffc107;
    background: rgba(255, 193, 7, 0.12);

    .badge__text {
      color: #fff;
    }
  }

  &.badge--filled {
    border-color: #ffc107;
    background: #ffc107;

    .badge__text {
      color: #1b1b1c;
    }
  }
}

.badge--error {
  &.badge--outline {
    border-color: #dc3545;
    background: transparent;

    .badge__text {
      color: #fff;
    }
  }

  &.badge--subtle {
    border-color: #dc3545;
    background: rgba(220, 53, 69, 0.12);

    .badge__text {
      color: #fff;
    }
  }

  &.badge--filled {
    border-color: #dc3545;
    background: #dc3545;

    .badge__text {
      color: #1b1b1c;
    }
  }
}

.badge--neutral {
  &.badge--outline {
    border-color: #9798a5;
    background: transparent;

    .badge__text {
      color: #fff;
    }
  }

  &.badge--subtle {
    border-color: #9798a5;
    background: rgba(151, 152, 165, 0.12);

    .badge__text {
      color: #fff;
    }
  }

  &.badge--filled {
    border-color: #9798a5;
    background: #9798a5;

    .badge__text {
      color: #1b1b1c;
    }
  }
}
</style>
