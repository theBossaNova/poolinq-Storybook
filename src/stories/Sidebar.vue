<template>
  <aside :class="['sidebar', { 'sidebar--collapsed': collapsed }]">
    <div class="sidebar-logo">
      <svg v-if="collapsed" width="29" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9644 11.9413H14.4614C15.2828 10.8179 15.7621 9.46747 15.7621 8.01281C15.7621 5.83311 17.6528 4.05997 19.9644 4.05997C22.3015 4.05997 24.1657 5.83311 24.1657 8.01281C24.1657 10.1669 22.3015 11.9413 19.9644 11.9413ZM7.96254 11.9413C5.65195 11.9413 3.76156 10.1669 3.76156 8.01281C3.76156 5.83311 5.65195 4.05997 7.96254 4.05997H13.4692C12.6455 5.1895 12.1646 6.54765 12.1646 8.01281C12.1646 10.1669 10.2997 11.9413 7.96254 11.9413ZM19.9644 0.890991C17.5514 0.890991 15.3939 1.88509 13.9629 3.45547C12.5331 1.88509 10.3756 0.890991 7.96258 0.890991C5.25327 0.890991 2.86575 2.1452 1.46746 4.05992C0.643764 5.18945 0.162811 6.54759 0.162811 8.01275C0.162811 11.9413 3.65655 15.1092 7.96258 15.1092C10.3756 15.1092 12.5331 14.1151 13.9629 12.5496C15.3939 14.1151 17.5514 15.1092 19.9644 15.1092C22.6761 15.1092 25.0652 13.8537 26.4621 11.9413C27.2835 10.8179 27.7628 9.46742 27.7628 8.01275C27.7628 4.05992 24.2704 0.890991 19.9644 0.890991Z" fill="#00C164"/>
      </svg>
      <div v-else class="sidebar-logo-full">
        <svg width="92" height="24" viewBox="0 0 92 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.15905 11.5392C5.76403 11.5392 4.52748 11.0897 3.65889 10.3234V4.56361C4.55274 3.79703 5.79062 3.32219 7.15905 3.32219C9.60663 3.32219 11.4491 5.09211 11.4491 7.44337C11.4491 9.87417 9.60663 11.5392 7.15905 11.5392ZM7.81707 0.0182495C6.31677 0.0182495 4.84333 0.441044 3.65888 1.12862V0.28303H0V19.2546H3.65888V13.7583C4.84333 14.4459 6.29019 14.842 7.81707 14.842C11.7915 14.842 15.0545 11.8562 15.0545 7.44332C15.0545 2.95166 11.7915 0.0182495 7.81707 0.0182495Z" fill="#00C164"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M48.6727 19.2364H52.0182V0H48.6727V19.2364Z" fill="#00C164"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M54.3636 14.2364H57.7091V0.0182495H54.3636V14.2364Z" fill="#00C164"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M61.4196 0.0182495C59.994 0.0182495 58.697 0.42964 57.6595 1.15061V0.275888H54.0545V14.2364H57.6595V4.33811C58.463 3.64441 59.5002 3.23302 60.7713 3.23302C62.768 3.23302 63.8311 4.28617 63.8311 6.44649V14.2364H67.4364V6.44649C67.4364 1.92119 65.5433 0.0182495 61.4196 0.0182495Z" fill="#00C164"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M80.3414 10.3234C79.4459 11.0897 78.2096 11.5392 76.8146 11.5392C74.367 11.5392 72.5511 9.87417 72.5511 7.44337C72.5511 5.09211 74.367 3.32219 76.8146 3.32219C78.2096 3.32219 79.421 3.79703 80.3414 4.56361V10.3234ZM80.3413 0.28303V1.12862C79.1569 0.441044 77.6568 0.0182495 76.1562 0.0182495C72.1819 0.0182495 68.9455 2.95166 68.9455 7.44332C68.9455 11.8562 72.1819 14.842 76.1562 14.842C77.71 14.842 79.1303 14.4459 80.3413 13.7583V19.2546H84V0.28303H80.3413Z" fill="#00C164"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5289 11.0686H15.0259C15.8472 9.9452 16.3266 8.59473 16.3266 7.14007C16.3266 4.96037 18.2172 3.18723 20.5289 3.18723C22.866 3.18723 24.7301 4.96037 24.7301 7.14007C24.7301 9.29416 22.866 11.0686 20.5289 11.0686ZM8.52699 11.0686C6.2164 11.0686 4.32602 9.29416 4.32602 7.14007C4.32602 4.96037 6.2164 3.18723 8.52699 3.18723H14.0337C13.21 4.31676 12.729 5.6749 12.729 7.14007C12.729 9.29416 10.8641 11.0686 8.52699 11.0686ZM20.5288 0.0182495C18.1158 0.0182495 15.9583 1.01235 14.5274 2.58273C13.0975 1.01235 10.94 0.0182495 8.52703 0.0182495C5.81772 0.0182495 3.4302 1.27246 2.03191 3.18718C1.20822 4.3167 0.727264 5.67485 0.727264 7.14001C0.727264 11.0685 4.221 14.2364 8.52703 14.2364C10.94 14.2364 13.0975 13.2423 14.5274 11.6768C15.9583 13.2423 18.1158 14.2364 20.5288 14.2364C23.2405 14.2364 25.6296 12.9809 27.0266 11.0685C27.8479 9.94514 28.3273 8.59468 28.3273 7.14001C28.3273 3.18718 24.8349 0.0182495 20.5288 0.0182495Z" fill="#00C164"/>
        </svg>
      </div>
    </div>

    <nav class="sidebar-nav">
      <div class="nav-items">
        <button 
          v-for="item in navItems" 
          :key="item.id"
          :class="['nav-item', { 'nav-item--active': item.active }]"
        >
          <div class="nav-item-icon" v-html="item.icon"></div>
          <span v-if="!collapsed" class="nav-item-label">{{ item.label }}</span>
        </button>
      </div>

      <div class="sidebar-section">
        <div v-if="!collapsed" class="sidebar-section-title">Listen</div>
        <div class="list-items">
          <button 
            v-for="list in listItems" 
            :key="list.id"
            class="list-item"
          >
            <div class="list-item-icon" v-html="list.icon"></div>
            <span v-if="!collapsed" class="list-item-label">{{ list.label }}</span>
          </button>
        </div>
      </div>
    </nav>

    <div class="sidebar-footer">
      <button class="add-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 7V11H7V13H11V17H13V13H17V11H13V7H11ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z" fill="#00C164"/>
        </svg>
        <span v-if="!collapsed" class="add-button-label">Liste erstellen</span>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  collapsed?: boolean;
}

withDefaults(defineProps<Props>(), {
  collapsed: false,
});

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    active: true,
    icon: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 6C10.4477 6 10 5.55228 10 5V1C10 0.447715 10.4477 0 11 0H17C17.5523 0 18 0.447715 18 1V5C18 5.55228 17.5523 6 17 6H11ZM1 10C0.447715 10 0 9.55229 0 9V1C0 0.447715 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1V9C8 9.55228 7.55228 10 7 10H1ZM11 18C10.4477 18 10 17.5523 10 17V9C10 8.44772 10.4477 8 11 8H17C17.5523 8 18 8.44771 18 9V17C18 17.5523 17.5523 18 17 18H11ZM1 18C0.447715 18 0 17.5523 0 17V13C0 12.4477 0.447715 12 1 12H7C7.55228 12 8 12.4477 8 13V17C8 17.5523 7.55228 18 7 18H1Z" fill="currentColor"/></svg>',
  },
  {
    id: "wine",
    label: "Meine Weine",
    active: false,
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5472 21H14.4563" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M16.5017 16.2273V21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18.8473 7L19.6598 10.918C19.8141 11.6622 19.7547 12.4354 19.4889 13.1475L19.4606 13.2217C19.0849 14.2276 18.3156 15.0373 17.3297 15.4629C16.8013 15.6909 16.2018 15.691 15.6735 15.4629C14.6876 15.0373 13.9182 14.2276 13.5426 13.2217L13.5143 13.1475C13.2484 12.4353 13.1901 11.6623 13.3444 10.918L14.1569 7H18.8473Z" stroke="currentColor" stroke-width="2"/><path d="M19.07 11.5C16.5699 11 16.07 13 14.07 12C13.987 12.6927 14.379 14.8242 16.5699 14.9904C18.7609 15.1567 19.153 12.5391 19.07 11.5Z" fill="currentColor"/><path d="M5.25751 3C5.25751 2.44771 5.70522 2 6.25751 2H6.88251C7.43479 2 7.88251 2.44772 7.88251 3V8.53417C7.88251 8.61394 7.93178 8.68544 8.00633 8.71384L8.12316 8.75834C9.29536 9.2049 10.07 10.329 10.07 11.5833V21C10.07 21.5523 9.62229 22 9.07001 22H4.07001C3.51772 22 3.07001 21.5523 3.07001 21V11.5833C3.07001 10.329 3.84466 9.2049 5.01686 8.75834L5.13369 8.71384C5.20824 8.68544 5.25751 8.61394 5.25751 8.53417V3Z" fill="currentColor"/></svg>',
  },
  {
    id: "insights",
    label: "Insights",
    active: false,
    icon: '<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.1875 17.75C0.929167 17.75 0.708333 17.6583 0.525 17.475C0.341667 17.2917 0.25 17.0708 0.25 16.8125V6.1875C0.25 5.92917 0.341667 5.70833 0.525 5.525C0.708333 5.34167 0.929167 5.25 1.1875 5.25H4.5C4.75833 5.25 4.97917 5.34167 5.1625 5.525C5.34583 5.70833 5.4375 5.92917 5.4375 6.1875V16.8125C5.4375 17.0708 5.34583 17.2917 5.1625 17.475C4.97917 17.6583 4.75833 17.75 4.5 17.75H1.1875ZM8.3375 17.75C8.07917 17.75 7.85833 17.6583 7.675 17.475C7.49167 17.2917 7.4 17.0708 7.4 16.8125V1.1875C7.4 0.929167 7.49167 0.708333 7.675 0.525C7.85833 0.341667 8.07917 0.25 8.3375 0.25H11.6625C11.9208 0.25 12.1417 0.341667 12.325 0.525C12.5083 0.708333 12.6 0.929167 12.6 1.1875V16.8125C12.6 17.0708 12.5083 17.2917 12.325 17.475C12.1417 17.6583 11.9208 17.75 11.6625 17.75H8.3375ZM15.5 17.75C15.2417 17.75 15.0208 17.6583 14.8375 17.475C14.6542 17.2917 14.5625 17.0708 14.5625 16.8125V10.1875C14.5625 9.92917 14.6542 9.70833 14.8375 9.525C15.0208 9.34167 15.2417 9.25 15.5 9.25H18.8125C19.0708 9.25 19.2917 9.34167 19.475 9.525C19.6583 9.70833 19.75 9.92917 19.75 10.1875V16.8125C19.75 17.0708 19.6583 17.2917 19.475 17.475C19.2917 17.6583 19.0708 17.75 18.8125 17.75H15.5Z" fill="currentColor"/></svg>',
  },
  {
    id: "reports",
    label: "Reports",
    active: false,
    icon: '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9492 17.4713C14.582 17.8238 14.1406 18 13.625 18H2.375C1.85938 18 1.41797 17.8238 1.05078 17.4713C0.683593 17.1188 0.5 16.695 0.5 16.2V1.8C0.5 1.305 0.683593 0.88125 1.05078 0.52875C1.41797 0.17625 1.85938 0 2.375 0H9.10156C9.35156 0 9.58984 0.045 9.81641 0.135C10.043 0.225 10.2422 0.3525 10.4141 0.5175L14.9609 4.8825C15.1328 5.0475 15.2656 5.23875 15.3594 5.45625C15.4531 5.67375 15.5 5.9025 15.5 6.1425V16.2C15.5 16.695 15.3164 17.1188 14.9492 17.4713ZM4.45876 14.1822C4.59793 14.3274 4.76556 14.4 4.96167 14.4H6.5482C6.74431 14.4 6.91194 14.3274 7.05111 14.1822C7.19028 14.037 7.25987 13.8621 7.25987 13.6575V6.1425C7.25987 5.9379 7.19028 5.763 7.05111 5.6178C6.91194 5.4726 6.74431 5.4 6.5482 5.4H4.96167C4.76556 5.4 4.59793 5.4726 4.45876 5.6178C4.31959 5.763 4.25 5.9379 4.25 6.1425V13.6575C4.25 13.8621 4.31959 14.037 4.45876 14.1822ZM8.95838 14.1822C9.09755 14.3274 9.26518 14.4 9.46129 14.4H11.0383C11.2344 14.4 11.4021 14.3274 11.5412 14.1822C11.6804 14.037 11.75 13.8621 11.75 13.6575V9.3105C11.75 9.1059 11.6804 8.931 11.5412 8.7858C11.4021 8.6406 11.2344 8.568 11.0383 8.568H9.46129C9.26518 8.568 9.09755 8.6406 8.95838 8.7858C8.81921 8.931 8.74962 9.1059 8.74962 9.3105V13.6575C8.74962 13.8621 8.81921 14.037 8.95838 14.1822Z" fill="currentColor"/></svg>',
  },
  {
    id: "inventur",
    label: "Inventur",
    active: false,
    icon: '<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.03846 20V10.7143L0 5.98701V14.1948C0 14.5498 0.0833333 14.8745 0.25 15.1688C0.416667 15.4632 0.653846 15.697 0.961538 15.8701L8.03846 20ZM9.96154 20L17.0385 15.8831C17.3462 15.71 17.5833 15.474 17.75 15.1753C17.9167 14.8766 18 14.5498 18 14.1948V6.01299L9.96154 10.7013V20ZM13.9487 6.14286L17.0256 4.35065L9.96154 0.25974C9.65385 0.0865801 9.33333 0 9 0C8.66667 0 8.34615 0.0865801 8.03846 0.25974L5.97436 1.45455L13.9487 6.14286ZM9 9.03896L12.0256 7.27273L4.0641 2.57143L1.01282 4.35065L9 9.03896Z" fill="currentColor"/></svg>',
  },
];

const listItems = [
  {
    id: "favorites",
    label: "Favoriten",
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1289 9.06836C20.1289 9.71323 19.9959 10.924 19.2227 12.291C18.798 13.0417 17.9912 13.8866 16.9268 14.8086C15.8406 15.7494 14.4049 16.8378 12.6357 18.0703L12.0654 18.4678L11.4941 18.0713C9.71656 16.8371 8.28598 15.7456 7.20508 14.8027C6.14331 13.8766 5.35091 13.0363 4.92383 12.3008C4.13356 10.9396 4.00002 9.73436 4 9.06836V9.05273L4.00098 9.03613C4.07661 6.66105 6.20605 5.10544 8.48633 5.00098L8.50977 5H8.53223C10.0377 5 11.0447 5.55514 11.8184 6.30469C11.9066 6.39019 11.9881 6.47286 12.0654 6.5498C12.1401 6.47469 12.2193 6.3949 12.3037 6.31152C13.0809 5.54375 14.1772 5.00002 15.5967 5H15.6191L15.6426 5.00098C17.9545 5.10646 20.0521 6.63828 20.1289 9.03613V9.06836Z" stroke="currentColor" stroke-width="2"/></svg>',
  },
  {
    id: "smart1",
    label: "Label",
    icon: '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.285819 0H12.8572V2.28571H0.285819V0ZM0.285767 4.57143H12.8572V6.85714H0.285767V4.57143ZM18.0715 8.5L16.2858 4.57143L14.5001 8.5L10.5715 10.2857L14.5001 12.0714L16.2858 16L18.0715 12.0714L22.0001 10.2857L18.0715 8.5ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="currentColor"/></svg>',
  },
  {
    id: "smart2",
    label: "Label",
    icon: '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.285819 0H12.8572V2.28571H0.285819V0ZM0.285767 4.57143H12.8572V6.85714H0.285767V4.57143ZM18.0715 8.5L16.2858 4.57143L14.5001 8.5L10.5715 10.2857L14.5001 12.0714L16.2858 16L18.0715 12.0714L22.0001 10.2857L18.0715 8.5ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="currentColor"/></svg>',
  },
  {
    id: "smart3",
    label: "Label",
    icon: '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.285819 0H12.8572V2.28571H0.285819V0ZM0.285767 4.57143H12.8572V6.85714H0.285767V4.57143ZM18.0715 8.5L16.2858 4.57143L14.5001 8.5L10.5715 10.2857L14.5001 12.0714L16.2858 16L18.0715 12.0714L22.0001 10.2857L18.0715 8.5ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="currentColor"/></svg>',
  },
  {
    id: "smart4",
    label: "Label",
    icon: '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.285819 0H12.8572V2.28571H0.285819V0ZM0.285767 4.57143H12.8572V6.85714H0.285767V4.57143ZM18.0715 8.5L16.2858 4.57143L14.5001 8.5L10.5715 10.2857L14.5001 12.0714L16.2858 16L18.0715 12.0714L22.0001 10.2857L18.0715 8.5ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="currentColor"/></svg>',
  },
  {
    id: "list1",
    label: "Label",
    icon: '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8572 0H0.285819V2.28571H12.8572V0ZM12.8572 4.57143H0.285767V6.85714H12.8572V4.57143ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="currentColor"/></svg>',
  },
  {
    id: "list2",
    label: "Label",
    icon: '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8572 0H0.285819V2.28571H12.8572V0ZM12.8572 4.57143H0.285767V6.85714H12.8572V4.57143ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="currentColor"/></svg>',
  },
  {
    id: "list3",
    label: "Label",
    icon: '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8572 0H0.285819V2.28571H12.8572V0ZM12.8572 4.57143H0.285767V6.85714H12.8572V4.57143ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="currentColor"/></svg>',
  },
  {
    id: "list4",
    label: "Label",
    icon: '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8572 0H0.285819V2.28571H12.8572V0ZM12.8572 4.57143H0.285767V6.85714H12.8572V4.57143ZM8.28577 11.4286H0.285767V9.14286H8.28577V11.4286Z" fill="currentColor"/></svg>',
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
  color: #e6e1f3;
  font-family: "Roboto", -apple-system, Roboto, Helvetica, sans-serif;
  transition: width 0.3s ease;
  width: 264px;

  &--collapsed {
    width: 88px;
  }
}

.sidebar-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  padding: 24px;
  border-right: 1px solid #222325;
  background: #1b1b1c;

  svg {
    fill: #00c164;
  }
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px 16px;
  gap: 24px;
  overflow-y: auto;
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
  color: #e6e1f3;

  &:hover {
    background: #222325;
  }

  &--active {
    background: #222325;

    .nav-item-icon {
      color: #0cba4a;
    }
  }
}

.nav-item-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: #0cba4a;
}

.nav-item-label {
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
}

.sidebar-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar-section-title {
  padding: 0 0 8px 16px;
  color: #9798a5;
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
}

.list-items {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
  color: #e6e1f3;

  &:hover {
    background: #222325;
  }
}

.list-item-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: #00c164;
}

.list-item-label {
  flex: 1;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
}

.sidebar-footer {
  display: flex;
  padding: 8px 32px 24px;
  background: #1b1b1c;
  box-shadow: 0 0 16px 0 rgba(27, 27, 28, 0.4), 0 0 1px 0 rgba(27, 27, 28, 0.2);
}

.add-button {
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
    fill: #00c164;
  }
}

.add-button-label {
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
}
</style>
