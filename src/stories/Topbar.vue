<template>
  <header class="topbar">
    <button v-if="showMenuButton" class="menu-button">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.835C0 2.37384 0.373842 2 0.835 2H14.835C15.2962 2 15.67 2.37384 15.67 2.835C15.67 3.29616 15.2962 3.67 14.835 3.67H0.835C0.373842 3.67 0 3.29616 0 2.835ZM0 8.085C0 7.62384 0.373842 7.25 0.835 7.25H14.835C15.2962 7.25 15.67 7.62384 15.67 8.085C15.67 8.54616 15.2962 8.92 14.835 8.92H0.835C0.373842 8.92 0 8.54616 0 8.085ZM0 13.335C0 12.8738 0.373842 12.5 0.835 12.5H14.835C15.2962 12.5 15.67 12.8738 15.67 13.335C15.67 13.7962 15.2962 14.17 14.835 14.17H0.835C0.373842 14.17 0 13.7962 0 13.335Z" fill="#0CBA4A"/>
      </svg>
    </button>

    <h1 class="topbar-title">{{ title }}</h1>

    <div class="topbar-actions">
      <button class="topbar-action">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM9 3C7.73333 3 6.61667 3.44167 5.65 4.325C4.68333 5.20833 4.2 6.40833 4.2 7.925C4.2 9.14167 4.675 10.3417 5.625 11.525C6.575 12.7083 7.475 13.675 8.325 14.425C8.425 14.5083 8.53333 14.5708 8.65 14.6125C8.76667 14.6542 8.88333 14.675 9 14.675C9.11667 14.675 9.23333 14.6542 9.35 14.6125C9.46667 14.5708 9.575 14.5083 9.675 14.425C10.525 13.675 11.425 12.7083 12.375 11.525C13.325 10.3417 13.8 9.14167 13.8 7.925C13.8 6.40833 13.3167 5.20833 12.35 4.325C11.3833 3.44167 10.2667 3 9 3ZM9 9.25C8.65 9.25 8.35417 9.12917 8.1125 8.8875C7.87083 8.64583 7.75 8.35 7.75 8C7.75 7.65 7.87083 7.35417 8.1125 7.1125C8.35417 6.87083 8.65 6.75 9 6.75C9.35 6.75 9.64583 6.87083 9.8875 7.1125C10.1292 7.35417 10.25 7.65 10.25 8C10.25 8.35 10.1292 8.64583 9.8875 8.8875C9.64583 9.12917 9.35 9.25 9 9.25Z" fill="currentColor"/>
        </svg>
        <span class="topbar-action-label">Restaurant</span>
      </button>

      <div class="topbar-icons">
        <button class="icon-button">
          <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9C3 4.03 7.03 0 12 0C16.97 0 21 4.03 21 9C21 13.97 16.97 18 12 18C9.51 18 7.27 16.99 5.64 15.36L7.06 13.94C8.32 15.21 10.07 16 12 16C15.87 16 19 12.87 19 9C19 5.13 15.87 2 12 2C8.13 2 5 5.13 5 9H8L3.96 13.03L3.89 12.89L0 9H3ZM11 10V5H12.5V9.15L16.02 11.24L15.25 12.52L11 10Z" fill="currentColor"/>
          </svg>
        </button>

        <button class="icon-button">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM14.724 13.347C13.437 11.781 10.314 11.25 9 11.25C10.8707 11.25 12.375 9.74571 12.375 7.875C12.375 6.00429 10.8707 4.5 9 4.5C7.12929 4.5 5.625 6.00429 5.625 7.875C5.625 9.74571 7.12929 11.25 9 11.25C7.686 11.25 4.563 11.781 3.276 13.347C2.358 12.141 1.8 10.638 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 10.638 15.642 12.141 14.724 13.347Z" fill="currentColor"/>
          </svg>
        </button>

        <button class="icon-button">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.55556H1.77778V12.4444H8V14H1.77778C0.8 14 0 13.3 0 12.4444V1.55556C0 0.7 0.8 0 1.77778 0H8V1.55556ZM11.0408 4.41L12.3333 3L16 7L12.3333 11L11.0408 9.58L12.4892 8H5V6H12.4892L11.0408 4.41Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface Props {
  title?: string;
  showMenuButton?: boolean;
}

withDefaults(defineProps<Props>(), {
  title: "Inventur",
  showMenuButton: false,
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

.topbar {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background: #1b1b1c;
  border-bottom: 1px solid #222325;
  color: #e6e1f3;
  font-family: "Roboto", -apple-system, Roboto, Helvetica, sans-serif;
}

.menu-button {
  display: flex;
  width: 31px;
  height: 31px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #222325;
  }

  svg {
    fill: #0cba4a;
  }
}

.topbar-title {
  flex: 1;
  margin: 0;
  font-size: 18px;
  font-weight: 300;
  line-height: 110%;
  text-transform: uppercase;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.topbar-action {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #e6e1f3;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  svg {
    fill: #0cba4a;
  }
}

.topbar-action-label {
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
}

.topbar-icons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-button {
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #0cba4a;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  svg {
    fill: currentColor;
  }
}
</style>
