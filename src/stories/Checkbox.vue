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
          stroke="#0CBA4A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="check-path"
        />
      </svg>
      <svg
        v-if="type === 'radio' && checked"
        class="radio-icon"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.99999 0.416656C2.46868 0.416656 0.416656 2.46868 0.416656 4.99999C0.416656 7.53129 2.46868 9.58332 4.99999 9.58332C7.53129 9.58332 9.58332 7.53129 9.58332 4.99999C9.58332 2.46868 7.53129 0.416656 4.99999 0.416656Z"
          fill="#0CBA4A"
          class="radio-path"
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
  "checkbox-wrapper--checked": props.checked,
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
  background: rgba(12, 186, 74, 0);
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;

  // Checkbox checked state - padding: 2px
  .checkbox-wrapper--checked:not(.checkbox-wrapper--radio) & {
    padding: 2px;
  }

  // Radio button styling
  .checkbox-wrapper--radio & {
    border-radius: 5px;
  }

  // Radio checked state - padding: 3px
  .checkbox-wrapper--checked.checkbox-wrapper--radio & {
    padding: 3px;
  }

  // Disabled unchecked state - background #222325
  .checkbox-wrapper--disabled:not(.checkbox-wrapper--checked) & {
    background: #222325;
  }

  // Hover state for unchecked radio - background rgba(12, 186, 74, 0.10)
  .checkbox-wrapper:hover:not(.checkbox-wrapper--disabled):not(.checkbox-wrapper--checked).checkbox-wrapper--radio
    & {
    background: rgba(12, 186, 74, 0.1);
  }

  .check-icon,
  .radio-icon {
    flex: 1 0 0;
    align-self: stretch;
    aspect-ratio: 1/1;
  }
}
</style>
