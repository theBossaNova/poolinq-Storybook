<template>
  <label :class="checkboxClasses">
    <input
      :type="type === 'radio' ? 'radio' : 'checkbox'"
      :checked="checked"
      :disabled="disabled"
      @change="handleChange"
      class="checkbox-input"
    />
    <span class="checkbox-icon">
      <svg
        v-if="type === 'checkbox' && checked"
        class="check-icon"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 3L4.5 8.5L2 6"
          :stroke="disabled ? '#495057' : '#0CBA4A'"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-if="type === 'radio' && checked"
        class="radio-icon"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0.5C2.96243 0.5 0.5 2.96243 0.5 6C0.5 9.03757 2.96243 11.5 6 11.5C9.03757 11.5 11.5 9.03757 11.5 6C11.5 2.96243 9.03757 0.5 6 0.5Z"
          :fill="disabled ? '#495057' : '#0CBA4A'"
        />
      </svg>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  type?: "checkbox" | "radio";
  checked?: boolean;
  disabled?: boolean;
}

interface Emits {
  (event: "change", value: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  type: "checkbox",
  checked: false,
  disabled: false,
});

const emit = defineEmits<Emits>();

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("change", target.checked);
};

const checkboxClasses = computed(() => ({
  "checkbox-wrapper": true,
  "checkbox-wrapper--disabled": props.disabled,
  "checkbox-wrapper--radio": props.type === "radio",
}));
</script>

<style lang="scss" scoped>
.checkbox-wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &--disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-icon {
  display: flex;
  width: 16px;
  height: 16px;
  padding: 0 2px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: rgba(12, 186, 74, 0.1);
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;

  .checkbox-wrapper--radio & {
    border-radius: 50%;
  }

  .checkbox-wrapper--disabled & {
    background: #222325;
  }

  .checkbox-input:checked + & {
    background: rgba(12, 186, 74, 0);
  }

  .checkbox-wrapper--disabled .checkbox-input:checked + & {
    background: #222325;
  }

  .check-icon,
  .radio-icon {
    flex: 1 0 0;
    align-self: stretch;
    aspect-ratio: 1/1;
  }
}
</style>
