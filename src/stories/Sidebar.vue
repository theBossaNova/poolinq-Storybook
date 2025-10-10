<template>
  <aside :class="['sidebar', { 'sidebar--collapsed': collapsed }]">
    <div class="logo-section">
      <div class="logo">
        <svg
          v-if="collapsed"
          width="29"
          height="15"
          viewBox="0 0 29 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.5289 11.0686H15.0259C15.8472 9.9452 16.3266 8.59473 16.3266 7.14007C16.3266 4.96037 18.2172 3.18723 20.5289 3.18723C22.866 3.18723 24.7301 4.96037 24.7301 7.14007C24.7301 9.29416 22.866 11.0686 20.5289 11.0686ZM8.527 11.0686C6.21641 11.0686 4.32603 9.29416 4.32603 7.14007C4.32603 4.96037 6.21641 3.18723 8.527 3.18723H14.0337C13.21 4.31676 12.729 5.6749 12.729 7.14007C12.729 9.29416 10.8641 11.0686 8.527 11.0686ZM20.5288 0.0182495C18.1158 0.0182495 15.9583 1.01235 14.5274 2.58273C13.0975 1.01235 10.94 0.0182495 8.52704 0.0182495C5.81773 0.0182495 3.43021 1.27246 2.03192 3.18718C1.20822 4.3167 0.727272 5.67485 0.727272 7.14001C0.727272 11.0685 4.22101 14.2364 8.52704 14.2364C10.94 14.2364 13.0975 13.2423 14.5274 11.6768C15.9583 13.2423 18.1158 14.2364 20.5288 14.2364C23.2405 14.2364 25.6296 12.9809 27.0266 11.0685C27.8479 9.94514 28.3273 8.59468 28.3273 7.14001C28.3273 3.18718 24.8349 0.0182495 20.5288 0.0182495V0.0182495Z"
            fill="#00C164"
          />
        </svg>
        <svg
          v-else
          width="92"
          height="25"
          viewBox="0 0 92 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.15905 11.7937C5.76403 11.7937 4.52748 11.3442 3.65889 10.5779V4.81813C4.55274 4.05155 5.79062 3.57671 7.15905 3.57671C9.60663 3.57671 11.4491 5.34663 11.4491 7.69789C11.4491 10.1287 9.60663 11.7937 7.15905 11.7937ZM7.81707 0.272766C6.31677 0.272766 4.84333 0.695561 3.65888 1.38314V0.537552H0V19.5091H3.65888V14.0128C4.84333 14.7004 6.29019 15.0965 7.81707 15.0965C11.7915 15.0965 15.0545 12.1107 15.0545 7.69785C15.0545 3.20618 11.7915 0.272766 7.81707 0.272766Z"
            fill="#00C164"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.6727 19.4909H52.0182V0.254517H48.6727V19.4909Z"
            fill="#00C164"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M54.3636 14.4909H57.7091V0.272766H54.3636V14.4909Z"
            fill="#00C164"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M61.4196 0.272766C59.994 0.272766 58.697 0.684159 57.6595 1.40513V0.530411H54.0545V14.4909H57.6595V4.59263C58.463 3.89893 59.5002 3.48754 60.7713 3.48754C62.768 3.48754 63.8311 4.54069 63.8311 6.70101V14.4909H67.4364V6.70101C67.4364 2.17571 65.5433 0.272766 61.4196 0.272766Z"
            fill="#00C164"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M80.3414 10.5779C79.4459 11.3442 78.2096 11.7937 76.8146 11.7937C74.367 11.7937 72.5511 10.1287 72.5511 7.69789C72.5511 5.34663 74.367 3.57671 76.8146 3.57671C78.2096 3.57671 79.421 4.05155 80.3414 4.81813V10.5779ZM80.3413 0.537552V1.38314C79.1569 0.695561 77.6568 0.272766 76.1562 0.272766C72.1819 0.272766 68.9455 3.20618 68.9455 7.69784C68.9455 12.1107 72.1819 15.0965 76.1562 15.0965C77.71 15.0965 79.1303 14.7004 80.3413 14.0128V19.5091H84V0.537552H80.3413Z"
            fill="#00C164"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.5289 11.3231H15.0259C15.8472 10.1997 16.3266 8.84925 16.3266 7.39459C16.3266 5.21489 18.2172 3.44175 20.5289 3.44175C22.866 3.44175 24.7301 5.21489 24.7301 7.39459C24.7301 9.54868 22.866 11.3231 20.5289 11.3231ZM8.52699 11.3231C6.2164 11.3231 4.32602 9.54868 4.32602 7.39459C4.32602 5.21489 6.2164 3.44175 8.52699 3.44175H14.0337C13.21 4.57128 12.729 5.92942 12.729 7.39459C12.729 9.54868 10.8641 11.3231 8.52699 11.3231ZM20.5288 0.272766C18.1158 0.272766 15.9583 1.26687 14.5274 2.83725C13.0975 1.26687 10.94 0.272766 8.52703 0.272766C5.81772 0.272766 3.4302 1.52698 2.03191 3.4417C1.20822 4.57122 0.727264 5.92937 0.727264 7.39453C0.727264 11.323 4.221 14.4909 8.52703 14.4909C10.94 14.4909 13.0975 13.4968 14.5274 11.9313C15.9583 13.4968 18.1158 14.4909 20.5288 14.4909C23.2405 14.4909 25.6296 13.2354 27.0266 11.323C27.8479 10.1996 28.3273 8.8492 28.3273 7.39453C28.3273 3.4417 24.8349 0.272766 20.5288 0.272766V0.272766Z"
            fill="#00C164"
          />
        </svg>
      </div>
    </div>

    <div class="container">
      <div class="navigation-items">
        <button
          v-for="item in navItems"
          :key="item.id"
          :class="[
            'navigation-item',
            { 'navigation-item--active': item.active },
          ]"
        >
          <div class="nav-icon" v-html="item.icon"></div>
          <div v-if="!collapsed" class="nav-label">{{ item.label }}</div>
        </button>
      </div>

      <div class="lists-section">
        <div v-if="!collapsed" class="section-title">Listen</div>
        <div class="lists-items">
          <button v-for="list in listItems" :key="list.id" class="list-item">
            <div class="list-icon" v-html="list.icon"></div>
            <div v-if="!collapsed" class="list-label">{{ list.label }}</div>
          </button>
        </div>
      </div>
    </div>

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
        <div v-if="!collapsed" class="add-label">Liste erstellen</div>
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
    icon: '<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 6.25452C10.4477 6.25452 10 5.8068 10 5.25452V1.25452C10 0.702232 10.4477 0.254517 11 0.254517H17C17.5523 0.254517 18 0.702232 18 1.25452V5.25452C18 5.8068 17.5523 6.25452 17 6.25452H11ZM1 10.2545C0.447715 10.2545 0 9.8068 0 9.25452V1.25452C0 0.702232 0.447715 0.254517 1 0.254517H7C7.55228 0.254517 8 0.702232 8 1.25452V9.25452C8 9.8068 7.55228 10.2545 7 10.2545H1ZM11 18.2545C10.4477 18.2545 10 17.8068 10 17.2545V9.25452C10 8.70223 10.4477 8.25452 11 8.25452H17C17.5523 8.25452 18 8.70223 18 9.25452V17.2545C18 17.8068 17.5523 18.2545 17 18.2545H11ZM1 18.2545C0.447715 18.2545 0 17.8068 0 17.2545V13.2545C0 12.7022 0.447715 12.2545 1 12.2545H7C7.55228 12.2545 8 12.7022 8 13.2545V17.2545C8 17.8068 7.55228 18.2545 7 18.2545H1Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "wine",
    label: "Meine Weine",
    active: false,
    icon: '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_wine" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25"><rect y="0.254517" width="24" height="24" rx="1" fill="#D9D9D9"/></mask><g mask="url(#mask0_wine)"><path d="M18.5472 21.2545H14.4563" stroke="#0CBA4A" stroke-width="2" stroke-linecap="round"/><path d="M16.5017 16.4818V21.2545" stroke="#0CBA4A" stroke-width="2" stroke-linecap="round"/><path d="M18.8473 7.25452L19.6598 11.1725C19.8141 11.9168 19.7547 12.6899 19.4889 13.402L19.4606 13.4762C19.0849 14.4821 18.3156 15.2919 17.3297 15.7174C16.8013 15.9454 16.2018 15.9455 15.6735 15.7174C14.6876 15.2918 13.9182 14.4821 13.5426 13.4762L13.5143 13.402C13.2484 12.6898 13.1901 11.9168 13.3444 11.1725L14.1569 7.25452H18.8473Z" stroke="#0CBA4A" stroke-width="2"/><path d="M19.07 11.7545C16.5699 11.2545 16.07 13.2545 14.07 12.2545C13.987 12.9472 14.379 15.0787 16.5699 15.2449C18.7609 15.4112 19.153 12.7936 19.07 11.7545Z" fill="#0CBA4A"/><path d="M5.25751 3.25452C5.25751 2.70223 5.70522 2.25452 6.25751 2.25452H6.88251C7.43479 2.25452 7.88251 2.70223 7.88251 3.25452V8.78868C7.88251 8.86846 7.93178 8.93995 8.00633 8.96835L8.12316 9.01286C9.29536 9.45941 10.07 10.5835 10.07 11.8378V21.2545C10.07 21.8068 9.62229 22.2545 9.07001 22.2545H4.07001C3.51772 22.2545 3.07001 21.8068 3.07001 21.2545V11.8378C3.07001 10.5835 3.84466 9.45941 5.01686 9.01286L5.13369 8.96835C5.20824 8.93995 5.25751 8.86846 5.25751 8.78868V3.25452Z" fill="#0CBA4A"/></g></svg>',
  },
  {
    id: "insights",
    label: "Insights",
    active: false,
    icon: '<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.1875 18.0045C0.929167 18.0045 0.708333 17.9129 0.525 17.7295C0.341667 17.5462 0.25 17.3253 0.25 17.067V6.44202C0.25 6.18368 0.341667 5.96285 0.525 5.77952C0.708333 5.59618 0.929167 5.50452 1.1875 5.50452H4.5C4.75833 5.50452 4.97917 5.59618 5.1625 5.77952C5.34583 5.96285 5.4375 6.18368 5.4375 6.44202V17.067C5.4375 17.3253 5.34583 17.5462 5.1625 17.7295C4.97917 17.9129 4.75833 18.0045 4.5 18.0045H1.1875ZM8.3375 18.0045C8.07917 18.0045 7.85833 17.9129 7.675 17.7295C7.49167 17.5462 7.4 17.3253 7.4 17.067V1.44202C7.4 1.18368 7.49167 0.96285 7.675 0.779517C7.85833 0.596183 8.07917 0.504517 8.3375 0.504517H11.6625C11.9208 0.504517 12.1417 0.596183 12.325 0.779517C12.5083 0.96285 12.6 1.18368 12.6 1.44202V17.067C12.6 17.3253 12.5083 17.5462 12.325 17.7295C12.1417 17.9129 11.9208 18.0045 11.6625 18.0045H8.3375ZM15.5 18.0045C15.2417 18.0045 15.0208 17.9129 14.8375 17.7295C14.6542 17.5462 14.5625 17.3253 14.5625 17.067V10.442C14.5625 10.1837 14.6542 9.96285 14.8375 9.77952C15.0208 9.59618 15.2417 9.50452 15.5 9.50452H18.8125C19.0708 9.50452 19.2917 9.59618 19.475 9.77952C19.6583 9.96285 19.75 10.1837 19.75 10.442V17.067C19.75 17.3253 19.6583 17.5462 19.475 17.7295C19.2917 17.9129 19.0708 18.0045 18.8125 18.0045H15.5Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "reports",
    label: "Reports",
    active: false,
    icon: '<svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9492 17.7258C14.582 18.0783 14.1406 18.2545 13.625 18.2545H2.375C1.85938 18.2545 1.41797 18.0783 1.05078 17.7258C0.683593 17.3733 0.5 16.9495 0.5 16.4545V2.05452C0.5 1.55952 0.683593 1.13577 1.05078 0.783267C1.41797 0.430767 1.85938 0.254517 2.375 0.254517H9.10156C9.35156 0.254517 9.58984 0.299517 9.81641 0.389517C10.043 0.479517 10.2422 0.607017 10.4141 0.772017L14.9609 5.13702C15.1328 5.30202 15.2656 5.49327 15.3594 5.71077C15.4531 5.92827 15.5 6.15702 15.5 6.39702V16.4545C15.5 16.9495 15.3164 17.3733 14.9492 17.7258ZM4.45875 14.4367C4.59792 14.5819 4.76556 14.6545 4.96167 14.6545H6.5482C6.74431 14.6545 6.91194 14.5819 7.05111 14.4367C7.19028 14.2915 7.25987 14.1166 7.25987 13.912V6.39702C7.25987 6.19242 7.19028 6.01752 7.05111 5.87232C6.91194 5.72712 6.74431 5.65452 6.5482 5.65452H4.96167C4.76556 5.65452 4.59792 5.72712 4.45875 5.87232C4.31958 6.01752 4.25 6.19242 4.25 6.39702V13.912C4.25 14.1166 4.31958 14.2915 4.45875 14.4367ZM8.95838 14.4367C9.09755 14.5819 9.26518 14.6545 9.46129 14.6545H11.0383C11.2344 14.6545 11.4021 14.5819 11.5412 14.4367C11.6804 14.2915 11.75 14.1166 11.75 13.912V9.56502C11.75 9.36042 11.6804 9.18552 11.5412 9.04032C11.4021 8.89512 11.2344 8.82252 11.0383 8.82252H9.46129C9.26518 8.82252 9.09755 8.89512 8.95838 9.04032C8.81921 9.18552 8.74962 9.36042 8.74962 9.56502V13.912C8.74962 14.1166 8.81921 14.2915 8.95838 14.4367Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "inventur",
    label: "Inventur",
    active: false,
    icon: '<svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.03846 20.2545V10.9688L0 6.24153V14.4493C0 14.8043 0.0833333 15.129 0.25 15.4233C0.416667 15.7177 0.653846 15.9515 0.961538 16.1246L8.03846 20.2545ZM9.96154 20.2545L17.0385 16.1376C17.3462 15.9645 17.5833 15.7285 17.75 15.4298C17.9167 15.1311 18 14.8043 18 14.4493V6.2675L9.96154 10.9558V20.2545ZM13.9487 6.39737L17.0256 4.60517L9.96154 0.514257C9.65385 0.341097 9.33333 0.254517 9 0.254517C8.66667 0.254517 8.34615 0.341097 8.03846 0.514257L5.97436 1.70906L13.9487 6.39737ZM9 9.29348L12.0256 7.52724L4.0641 2.82595L1.01282 4.60517L9 9.29348Z" fill="#0CBA4A"/></svg>',
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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 350px;
  background: #1b1b1c;
  color: #e6e1f3;
  font-family: "Roboto", -apple-system, Roboto, Helvetica, sans-serif;
  transition: width 0.3s ease;

  &--collapsed {
    width: 100px;
  }
}

.logo-section {
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-right: 1px solid #222325;
  background: #1b1b1c;

  .sidebar--collapsed & {
    padding: 24px 0 24px 3px;
  }
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
}

.navigation-items {
  display: flex;
  padding: 0 6px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
}

.navigation-item {
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #222325;
  }

  &--active {
    background: #222325;
  }
}

.nav-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-label {
  color: #e6e1f3;
  font-feature-settings: "ss01" on;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
}

.lists-section {
  display: flex;
  padding: 0 24px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
}

.section-title {
  display: flex;
  padding-bottom: 8px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  color: #9798a5;
  text-align: center;
  font-feature-settings: "ss01" on;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}

.lists-items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
}

.list-item {
  display: flex;
  padding: 8px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #222325;
  }
}

.list-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.list-label {
  flex: 1 0 0;
  color: #e6e1f3;
  font-feature-settings: "ss01" on;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}

.footer-section {
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
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
}

.add-label {
  color: #e6e1f3;
  font-feature-settings: "ss01" on;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}
</style>
