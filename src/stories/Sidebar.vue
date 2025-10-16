<template>
  <aside 
    class="sidebar" 
    :class="{ 
      'sidebar--expanded': isExpanded,
      'sidebar--mobile-open': isMobileOpen
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Logo Section -->
    <div class="logo-section">
      <img 
        v-if="!isExpanded && !isMobileOpen"
        src="https://api.builder.io/api/v1/image/assets/TEMP/02e424ad8b4a95732684081e54a714bb1bf2782d?width=56"
        alt="poolinq logo"
        class="logo-collapsed"
      />
      <img 
        v-else
        src="https://api.builder.io/api/v1/image/assets/TEMP/35bf63eaf3f5281f23f20ac5b102cda5536f0885?width=186"
        alt="poolinq logo"
        class="logo-expanded"
      />
    </div>

    <!-- Container -->
    <div class="sidebar-container">
      <!-- Navigation Items -->
      <div class="nav-section">
        <button
          v-for="item in navItems"
          :key="item.id"
          :class="['nav-item', { 'nav-item--active': item.active }]"
          @click="handleCloseMobileSidebar"
        >
          <div class="nav-icon" v-html="item.icon"></div>
          <div v-if="isExpanded || isMobileOpen" class="nav-label">{{ item.label }}</div>
        </button>
      </div>

      <!-- Lists Section -->
      <div class="lists-section">
        <div v-if="isExpanded || isMobileOpen" class="lists-header">Listen</div>
        <div class="lists-items">
          <button
            v-for="list in listItems"
            :key="list.id"
            class="list-item"
            @click="handleCloseMobileSidebar"
          >
            <div class="list-icon" v-html="list.icon"></div>
            <div v-if="isExpanded || isMobileOpen" class="list-label">{{ list.label }}</div>
          </button>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <div class="footer-section">
      <button class="add-button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="#0CBA4A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span v-if="isExpanded || isMobileOpen">Liste erstellen</span>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, defineProps, withDefaults, computed } from "vue";

interface Props {
  collapsed?: boolean;
  mobileOpen?: boolean;
  isMobile?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  collapsed: true,
  mobileOpen: false,
  isMobile: false,
});

const emit = defineEmits<{
  'update:mobileOpen': [value: boolean];
}>();

const isExpanded = ref(!props.collapsed);
const isMobileOpen = computed({
  get: () => props.mobileOpen,
  set: (value) => emit('update:mobileOpen', value),
});

const handleMouseEnter = () => {
  if (!props.isMobile) {
    isExpanded.value = true;
  }
};

const handleMouseLeave = () => {
  if (!props.isMobile) {
    isExpanded.value = false;
  }
};

const handleCloseMobileSidebar = () => {
  if (props.isMobile) {
    emit('update:mobileOpen', false);
  }
};

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    active: true,
    icon: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 6C10.4477 6 10 5.55228 10 5V1C10 0.447715 10.4477 0 11 0H17C17.5523 0 18 0.447715 18 1V5C18 5.55228 17.5523 6 17 6H11ZM1 10C0.447715 10 0 9.55229 0 9V1C0 0.447715 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1V9C8 9.55228 7.55228 10 7 10H1ZM11 18C10.4477 18 10 17.5523 10 17V9C10 8.44772 10.4477 8 11 8H17C17.5523 8 18 8.44771 18 9V17C18 17.5523 17.5523 18 17 18H11ZM1 18C0.447715 18 0 17.5523 0 17V13C0 12.4477 0.447715 12 1 12H7C7.55228 12 8 12.4477 8 13V17C8 17.5523 7.55228 18 7 18H1Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "wine",
    label: "Meine Weine",
    active: false,
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_wine" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" rx="1" fill="#D9D9D9"/></mask><g mask="url(#mask0_wine)"><path d="M18.5472 21H14.4563" stroke="#0CBA4A" stroke-width="2" stroke-linecap="round"/><path d="M16.5017 16.2273V21" stroke="#0CBA4A" stroke-width="2" stroke-linecap="round"/><path d="M18.8473 7L19.6598 10.918C19.8141 11.6622 19.7547 12.4354 19.4889 13.1475L19.4606 13.2217C19.0849 14.2276 18.3156 15.0373 17.3297 15.4629C16.8013 15.6909 16.2018 15.691 15.6735 15.4629C14.6876 15.0373 13.9182 14.2276 13.5426 13.2217L13.5143 13.1475C13.2484 12.4353 13.1901 11.6623 13.3444 10.918L14.1569 7H18.8473Z" stroke="#0CBA4A" stroke-width="2"/><path d="M19.07 11.5C16.5699 11 16.07 13 14.07 12C13.987 12.6927 14.379 14.8242 16.5699 14.9904C18.7609 15.1567 19.153 12.5391 19.07 11.5Z" fill="#0CBA4A"/><path d="M5.25751 3C5.25751 2.44771 5.70522 2 6.25751 2H6.88251C7.43479 2 7.88251 2.44772 7.88251 3V8.53417C7.88251 8.61394 7.93178 8.68544 8.00633 8.71384L8.12316 8.75834C9.29536 9.2049 10.07 10.329 10.07 11.5833V21C10.07 21.5523 9.62229 22 9.07001 22H4.07001C3.51772 22 3.07001 21.5523 3.07001 21V11.5833C3.07001 10.329 3.84466 9.2049 5.01686 8.75834L5.13369 8.71384C5.20824 8.68544 5.25751 8.61394 5.25751 8.53417V3Z" fill="#0CBA4A"/></g></svg>',
  },
  {
    id: "insights",
    label: "Insights",
    active: false,
    icon: '<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.1875 17.75C0.929167 17.75 0.708333 17.6583 0.525 17.475C0.341667 17.2917 0.25 17.0708 0.25 16.8125V6.1875C0.25 5.92917 0.341667 5.70833 0.525 5.525C0.708333 5.34167 0.929167 5.25 1.1875 5.25H4.5C4.75833 5.25 4.97917 5.34167 5.1625 5.525C5.34583 5.70833 5.4375 5.92917 5.4375 6.1875V16.8125C5.4375 17.0708 5.34583 17.2917 5.1625 17.475C4.97917 17.6583 4.75833 17.75 4.5 17.75H1.1875ZM8.3375 17.75C8.07917 17.75 7.85833 17.6583 7.675 17.475C7.49167 17.2917 7.4 17.0708 7.4 16.8125V1.1875C7.4 0.929167 7.49167 0.708333 7.675 0.525C7.85833 0.341667 8.07917 0.25 8.3375 0.25H11.6625C11.9208 0.25 12.1417 0.341667 12.325 0.525C12.5083 0.708333 12.6 0.929167 12.6 1.1875V16.8125C12.6 17.0708 12.5083 17.2917 12.325 17.475C12.1417 17.6583 11.9208 17.75 11.6625 17.75H8.3375ZM15.5 17.75C15.2417 17.75 15.0208 17.6583 14.8375 17.475C14.6542 17.2917 14.5625 17.0708 14.5625 16.8125V10.1875C14.5625 9.92917 14.6542 9.70833 14.8375 9.525C15.0208 9.34167 15.2417 9.25 15.5 9.25H18.8125C19.0708 9.25 19.2917 9.34167 19.475 9.525C19.6583 9.70833 19.75 9.92917 19.75 10.1875V16.8125C19.75 17.0708 19.6583 17.2917 19.475 17.475C19.2917 17.6583 19.0708 17.75 18.8125 17.75H15.5Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "reports",
    label: "Reports",
    active: false,
    icon: '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9492 17.4713C14.582 17.8238 14.1406 18 13.625 18H2.375C1.85938 18 1.41797 17.8238 1.05078 17.4713C0.683593 17.1188 0.5 16.695 0.5 16.2V1.8C0.5 1.305 0.683593 0.88125 1.05078 0.52875C1.41797 0.17625 1.85938 0 2.375 0H9.10156C9.35156 0 9.58984 0.045 9.81641 0.135C10.043 0.225 10.2422 0.3525 10.4141 0.5175L14.9609 4.8825C15.1328 5.0475 15.2656 5.23875 15.3594 5.45625C15.4531 5.67375 15.5 5.9025 15.5 6.1425V16.2C15.5 16.695 15.3164 17.1188 14.9492 17.4713ZM4.45876 14.1822C4.59793 14.3274 4.76556 14.4 4.96167 14.4H6.5482C6.74431 14.4 6.91194 14.3274 7.05111 14.1822C7.19028 14.037 7.25987 13.8621 7.25987 13.6575V6.1425C7.25987 5.9379 7.19028 5.763 7.05111 5.6178C6.91194 5.4726 6.74431 5.4 6.5482 5.4H4.96167C4.76556 5.4 4.59793 5.4726 4.45876 5.6178C4.31959 5.763 4.25 5.9379 4.25 6.1425V13.6575C4.25 13.8621 4.31959 14.037 4.45876 14.1822ZM8.95838 14.1822C9.09755 14.3274 9.26518 14.4 9.46129 14.4H11.0383C11.2344 14.4 11.4021 14.3274 11.5412 14.1822C11.6804 14.037 11.75 13.8621 11.75 13.6575V9.3105C11.75 9.1059 11.6804 8.931 11.5412 8.7858C11.4021 8.6406 11.2344 8.568 11.0383 8.568H9.46129C9.26518 8.568 9.09755 8.6406 8.95838 8.7858C8.81921 8.931 8.74962 9.1059 8.74962 9.3105V13.6575C8.74962 13.8621 8.81921 14.037 8.95838 14.1822Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "inventur",
    label: "Inventur",
    active: false,
    icon: '<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.03846 20V10.7143L0 5.98701V14.1948C0 14.5498 0.0833333 14.8745 0.25 15.1688C0.416667 15.4632 0.653846 15.697 0.961538 15.8701L8.03846 20ZM9.96154 20L17.0385 15.8831C17.3462 15.71 17.5833 15.474 17.75 15.1753C17.9167 14.8766 18 14.5498 18 14.1948V6.01299L9.96154 10.7013V20ZM13.9487 6.14286L17.0256 4.35065L9.96154 0.25974C9.65385 0.0865801 9.33333 0 9 0C8.66667 0 8.34615 0.0865801 8.03846 0.25974L5.97436 1.45455L13.9487 6.14286ZM9 9.03896L12.0256 7.27273L4.0641 2.57143L1.01282 4.35065L9 9.03896Z" fill="#0CBA4A"/></svg>',
  },
];

const listItems = [
  {
    id: "favorites",
    label: "Favoriten",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1289 9.06836C20.1289 9.71323 19.9959 10.924 19.2227 12.291C18.798 13.0417 17.9912 13.8866 16.9268 14.8086C15.8406 15.7494 14.4049 16.8378 12.6357 18.0703L12.0654 18.4678L11.4941 18.0713C9.71656 16.8371 8.28598 15.7456 7.20508 14.8027C6.14331 13.8766 5.35091 13.0363 4.92383 12.3008C4.13356 10.9396 4.00002 9.73436 4 9.06836V9.05273L4.00098 9.03613C4.07661 6.66105 6.20605 5.10544 8.48633 5.00098L8.50977 5H8.53223C10.0377 5 11.0447 5.55514 11.8184 6.30469C11.9066 6.39019 11.9881 6.47286 12.0654 6.5498C12.1401 6.47469 12.2193 6.3949 12.3037 6.31152C13.0809 5.54375 14.1772 5.00002 15.5967 5H15.6191L15.6426 5.00098C17.9545 5.10646 20.0521 6.63828 20.1289 9.03613V9.06836Z" stroke="#0CBA4A" stroke-width="2"/></svg>',
  },
  {
    id: "smart1",
    label: "Label",
    icon: '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.285819 0H12.8572V2.28571H0.285819V0ZM0.285767 4.57143H12.8572V6.85714H0.285767V4.57143ZM18.0715 8.5L16.2858 4.57143L14.5001 8.5L10.5715 10.2857L14.5001 12.0714L16.2858 16L18.0715 12.0714L22.0001 10.2857L18.0715 8.5ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "smart2",
    label: "Label",
    icon: '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.285819 0H12.8572V2.28571H0.285819V0ZM0.285767 4.57143H12.8572V6.85714H0.285767V4.57143ZM18.0715 8.5L16.2858 4.57143L14.5001 8.5L10.5715 10.2857L14.5001 12.0714L16.2858 16L18.0715 12.0714L22.0001 10.2857L18.0715 8.5ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "smart3",
    label: "Label",
    icon: '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.285819 0H12.8572V2.28571H0.285819V0ZM0.285767 4.57143H12.8572V6.85714H0.285767V4.57143ZM18.0715 8.5L16.2858 4.57143L14.5001 8.5L10.5715 10.2857L14.5001 12.0714L16.2858 16L18.0715 12.0714L22.0001 10.2857L18.0715 8.5ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "smart4",
    label: "Label",
    icon: '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.285819 0H12.8572V2.28571H0.285819V0ZM0.285767 4.57143H12.8572V6.85714H0.285767V4.57143ZM18.0715 8.5L16.2858 4.57143L14.5001 8.5L10.5715 10.2857L14.5001 12.0714L16.2858 16L18.0715 12.0714L22.0001 10.2857L18.0715 8.5ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "list1",
    label: "Label",
    icon: '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8572 0H0.285819V2.28571H12.8572V0ZM12.8572 4.57143H0.285767V6.85714H12.8572V4.57143ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "list2",
    label: "Label",
    icon: '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8572 0H0.285819V2.28571H12.8572V0ZM12.8572 4.57143H0.285767V6.85714H12.8572V4.57143ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "list3",
    label: "Label",
    icon: '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8572 0H0.285819V2.28571H12.8572V0ZM12.8572 4.57143H0.285767V6.85714H12.8572V4.57143ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "list4",
    label: "Label",
    icon: '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8572 0H0.285819V2.28571H12.8572V0ZM12.8572 4.57143H0.285767V6.85714H12.8572V4.57143ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
];
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

.sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #1b1b1c;
  border-right: 1px solid #222325;
  font-family: "Roboto", -apple-system, Roboto, Helvetica, sans-serif;
  transition: width 0.2s ease;
  width: 64px;
  position: relative;
  z-index: 100;

  &.sidebar--expanded {
    width: 244px;
  }

  &.sidebar--mobile-open {
    position: fixed;
    left: 0;
    top: 0;
    width: 244px;
    height: 100vh;
    z-index: 999;
  }
}

.logo-section {
  display: flex;
  height: 64px;
  padding: 0 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: #1b1b1c;

  .sidebar--expanded & {
    align-items: flex-start;
  }

  .sidebar--mobile-open & {
    align-items: flex-start;
  }
}

.logo-collapsed {
  width: 28px;
  height: 15px;
  flex-shrink: 0;
}

.logo-expanded {
  width: 93px;
  height: 26px;
  flex-shrink: 0;
}

.sidebar-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  align-items: center;

  .sidebar--expanded & {
    align-items: flex-start;
  }

  .sidebar--mobile-open & {
    align-items: flex-start;
  }
}

.nav-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  .sidebar--expanded & {
    padding: 0;
  }

  .sidebar--mobile-open & {
    padding: 0;
  }
}

.nav-item {
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 16px;
  border-radius: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  justify-content: center;

  .sidebar--expanded & {
    justify-content: flex-start;
  }

  .sidebar--mobile-open & {
    justify-content: flex-start;
  }

  &:hover {
    background: rgba(34, 35, 37, 0.5);
  }

  &--active {
    background: #222325;
  }
}

.nav-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.nav-label {
  color: #e6e1f3;
  font-feature-settings: "ss01" on;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
}

.lists-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-top: 16px;

  .sidebar--expanded & {
    align-items: flex-start;
  }

  .sidebar--mobile-open & {
    align-items: flex-start;
  }
}

.lists-header {
  padding: 0 16px;
  color: #9798a5;
  text-align: center;
  font-feature-settings: "ss01" on;
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
}

.lists-items {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.list-item {
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  justify-content: center;

  .sidebar--expanded & {
    justify-content: flex-start;
  }

  .sidebar--mobile-open & {
    justify-content: flex-start;
  }

  &:hover {
    background: rgba(34, 35, 37, 0.5);
  }
}

.list-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.list-label {
  color: #e6e1f3;
  font-feature-settings: "ss01" on;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
}

.footer-section {
  display: flex;
  height: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  background: #1b1b1c;
  box-shadow: 0 0 16px 0 rgba(27, 27, 28, 0.4), 0 0 1px 0 rgba(27, 27, 28, 0.2);

  .sidebar--expanded & {
    align-items: flex-start;
  }

  .sidebar--mobile-open & {
    align-items: flex-start;
  }
}

.add-button {
  display: flex;
  padding: 0 16px;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #e6e1f3;
  transition: opacity 0.2s ease;

  span {
    color: #e6e1f3;
    font-feature-settings: "ss01" on;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
  }

  &:hover {
    opacity: 0.8;
  }
}

@media (max-width: 768px) {
  .sidebar {
    width: 64px;

    &.sidebar--expanded {
      width: 64px;
    }

    &.sidebar--mobile-open {
      width: 244px;
    }
  }
}
</style>
