<template>
  <label :class="checkboxClasses">
    <input
      :type="type === 'radio' ? 'radio' : 'checkbox'"
      :checked="isChecked"
      :disabled="isDisabled"
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
  state?: "default" | "hover" | "disabled";
}

interface Emits {
  (event: "update:checked", value: boolean): void;
  (event: "change", value: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  type: "checkbox",
  checked: false,
  disabled: false,
  state: "default",
});

const emit = defineEmits<Emits>();

const isDisabled = computed(() => props.disabled || props.state === "disabled");

const isChecked = computed(() => props.checked);

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:checked", target.checked);
  emit("change", target.checked);
};

const checkboxClasses = computed(() => ({
  "checkbox-wrapper": true,
  "checkbox-wrapper--disabled": isDisabled.value,
  "checkbox-wrapper--radio": props.type === "radio",
  "checkbox-wrapper--checked": isChecked.value,
  "checkbox-wrapper--hover": props.state === "hover",
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
  width: 20px;
  height: 20px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 2px solid transparent;
  background-color: transparent;
  transition: border-color 0.15s ease, background-color 0.15s ease;
  flex-shrink: 0;
  box-sizing: border-box;
}

.checkbox-wrapper:not(.checkbox-wrapper--checked) .checkbox-icon {
  border-color: #e6e1f3;
}

.checkbox-wrapper--checked .checkbox-icon {
  border-color: #0cba4a;
}

.checkbox-wrapper--checked.checkbox-wrapper--disabled .checkbox-icon {
  border-color: #495057;
}

.checkbox-wrapper--radio .checkbox-icon {
  border-radius: 50%;
  padding: 3px;
}

.checkbox-wrapper--disabled .checkbox-icon {
  border-color: rgba(34, 35, 37, 0.6);
  background-color: transparent;
}

.checkbox-wrapper--disabled.checkbox-wrapper--checked .checkbox-icon {
  border-color: #495057;
}

.checkbox-wrapper:hover:not(.checkbox-wrapper--disabled) .checkbox-icon,
.checkbox-wrapper--hover:not(.checkbox-wrapper--disabled) .checkbox-icon {
  border-color: #33d68c;
}

.checkbox-wrapper:hover:not(.checkbox-wrapper--disabled):not(.checkbox-wrapper--checked) .checkbox-icon,
.checkbox-wrapper:hover:not(.checkbox-wrapper--disabled).checkbox-wrapper--radio .checkbox-icon,
.checkbox-wrapper--hover:not(.checkbox-wrapper--disabled):not(.checkbox-wrapper--checked) .checkbox-icon,
.checkbox-wrapper--hover:not(.checkbox-wrapper--disabled).checkbox-wrapper--radio .checkbox-icon {
  background-color: rgba(12, 186, 74, 0.1);
}

.check-icon,
.radio-icon {
  flex: 1 0 0;
  align-self: stretch;
  aspect-ratio: 1/1;
}

.check-path {
  stroke: #0CBA4A;
  transition: stroke 0.15s ease;
}

.radio-path {
  fill: #0CBA4A;
  transition: fill 0.15s ease;
}

.checkbox-wrapper:hover:not(.checkbox-wrapper--disabled) .check-path,
.checkbox-wrapper--hover:not(.checkbox-wrapper--disabled) .check-path {
  stroke: #33d68c;
}

.checkbox-wrapper:hover:not(.checkbox-wrapper--disabled) .radio-path,
.checkbox-wrapper--hover:not(.checkbox-wrapper--disabled) .radio-path {
  fill: #33d68c;
}

.checkbox-wrapper--disabled .check-path {
  stroke: #495057;
}

.checkbox-wrapper--disabled .radio-path {
  fill: #495057;
}
</style>
