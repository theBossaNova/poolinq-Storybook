<template>
  <aside :class="['sidebar', { 'sidebar--collapsed': collapsed }]">
    <div class="sidebar-rail">
      <div class="rail-logo">
        <svg
          width="28"
          height="15"
          viewBox="0 0 28 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.8016 11.0503H14.2986C15.1199 9.92695 15.5993 8.57648 15.5993 7.12182C15.5993 4.94212 17.49 3.16898 19.8016 3.16898C22.1387 3.16898 24.0028 4.94212 24.0028 7.12182C24.0028 9.27591 22.1387 11.0503 19.8016 11.0503ZM7.79973 11.0503C5.48914 11.0503 3.59875 9.27591 3.59875 7.12182C3.59875 4.94212 5.48914 3.16898 7.79973 3.16898H13.3064C12.4827 4.29851 12.0018 5.65665 12.0018 7.12182C12.0018 9.27591 10.1368 11.0503 7.79973 11.0503ZM19.8016 0C17.3886 0 15.2311 0.994097 13.8001 2.56448C12.3703 0.994097 10.2128 0 7.79976 0C5.09046 0 2.70294 1.25421 1.30465 3.16893C0.480953 4.29845 0 5.6566 0 7.12176C0 11.0503 3.49374 14.2182 7.79976 14.2182C10.2128 14.2182 12.3703 13.2241 13.8001 11.6586C15.2311 13.2241 17.3886 14.2182 19.8016 14.2182C22.5133 14.2182 24.9024 12.9627 26.2993 11.0503C27.1206 9.9269 27.6 8.57643 27.6 7.12176C27.6 3.16893 24.1076 0 19.8016 0Z"
            fill="#00C164"
          />
        </svg>
      </div>

      <div class="rail-navigation">
        <button
          v-for="item in navItems"
          :key="`rail-${item.id}`"
          :class="[
            'rail-button',
            { 'rail-button--active': item.active },
          ]"
          v-html="item.icon"
        ></button>
      </div>

      <div class="rail-lists">
        <button
          v-for="list in listItems"
          :key="`rail-list-${list.id}`"
          class="rail-button"
          v-html="list.icon"
        ></button>
      </div>

      <div class="rail-footer">
        <button class="rail-button rail-button--add">
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
        </button>
      </div>
    </div>

    <div v-if="!collapsed" class="sidebar-panel">
      <div class="panel-header">
        <div class="panel-logo">
          <svg
            width="92"
            height="25"
            viewBox="0 0 92 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.75905 12.4119C6.36404 12.4119 5.12749 11.9625 4.25889 11.1961V5.43636C5.15274 4.66977 6.39063 4.19493 7.75905 4.19493C10.2066 4.19493 12.0491 5.96485 12.0491 8.31611C12.0491 10.7469 10.2066 12.4119 7.75905 12.4119ZM8.41708 0.890991C6.91678 0.890991 5.44333 1.31379 4.25889 2.00136V1.15577H0.600006V20.1274H4.25889V14.631C5.44333 15.3186 6.89019 15.7147 8.41708 15.7147C12.3915 15.7147 15.6546 12.729 15.6546 8.31606C15.6546 3.8244 12.3915 0.890991 8.41708 0.890991Z"
              fill="#00C164"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.272736 20.1091H3.61819V0.872742H0.272736V20.1091Z"
              fill="#00C164"
              transform="translate(48, -5)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.963654 15.1092H4.30911V0.890991H0.963654V15.1092Z"
              fill="#00C164"
              transform="translate(53, 0)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.01964 0.890991C6.59398 0.890991 5.29696 1.30238 4.25954 2.02336V1.14863H0.654541V15.1092H4.25954V5.21086C5.06301 4.51715 6.10016 4.10576 7.37125 4.10576C9.36801 4.10576 10.4311 5.15891 10.4311 7.31924V15.1092H14.0364V7.31924C14.0364 2.79393 12.1433 0.890991 8.01964 0.890991"
              fill="#00C164"
              transform="translate(60, 0)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9414 11.1961C11.046 11.9625 9.80964 12.4119 8.41461 12.4119C5.96698 12.4119 4.15106 10.7469 4.15106 8.31611C4.15106 5.96485 5.96698 4.19493 8.41461 4.19493C9.80964 4.19493 11.021 4.66977 11.9414 5.43636V11.1961ZM11.9413 1.15577V2.00136C10.7569 1.31379 9.25681 0.890991 7.75622 0.890991C3.78195 0.890991 0.545471 3.8244 0.545471 8.31606C0.545471 12.729 3.78195 15.7147 7.75622 15.7147C9.30999 15.7147 10.7303 15.3186 11.9413 14.631V20.1274H15.6V1.15577H11.9413Z"
              fill="#00C164"
              transform="translate(76, 0)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.1289 11.9413H14.6259C15.4472 10.8179 15.9266 9.46747 15.9266 8.01281C15.9266 5.83311 17.8172 4.05997 20.1289 4.05997C22.466 4.05997 24.3301 5.83311 24.3301 8.01281C24.3301 10.1669 22.466 11.9413 20.1289 11.9413ZM8.127 11.9413C5.81641 11.9413 3.92602 10.1669 3.92602 8.01281C3.92602 5.83311 5.81641 4.05997 8.127 4.05997H13.6337C12.81 5.1895 12.329 6.54765 12.329 8.01281C12.329 10.1669 10.4641 11.9413 8.127 11.9413ZM20.1288 0.890991C17.7158 0.890991 15.5583 1.88509 14.1274 3.45547C12.6975 1.88509 10.54 0.890991 8.12703 0.890991C5.41773 0.890991 3.03021 2.1452 1.63192 4.05992C0.808223 5.18945 0.327271 6.54759 0.327271 8.01275C0.327271 11.9413 3.82101 15.1092 8.12703 15.1092C10.54 15.1092 12.6975 14.1151 14.1274 12.5496C15.5583 14.1151 17.7158 15.1092 20.1288 15.1092C22.8405 15.1092 25.2296 13.8537 26.6266 11.9413C27.4479 10.8179 27.9273 9.46742 27.9273 8.01275C27.9273 4.05992 24.4349 0.890991 20.1288 0.890991Z"
              fill="#00C164"
              transform="translate(16, 0)"
            />
          </svg>
        </div>
      </div>

      <div class="panel-content">
        <div class="panel-navigation">
          <button
            v-for="item in navItems"
            :key="item.id"
            :class="[
              'navigation-item',
              { 'navigation-item--active': item.active },
            ]"
          >
            <div class="nav-icon" v-html="item.icon"></div>
            <div class="nav-label">{{ item.label }}</div>
          </button>
        </div>

        <div class="panel-lists">
          <div class="panel-lists-header">Listen</div>
          <div class="panel-list-group">
            <button v-for="list in listItems" :key="list.id" class="list-item">
              <div class="list-icon" v-html="list.icon"></div>
              <div class="list-label">{{ list.label }}</div>
            </button>
          </div>
        </div>
      </div>

      <div class="panel-footer">
        <button class="panel-add-button">
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
          <span>Liste erstellen</span>
        </button>
      </div>
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
    icon: '<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8 6C11.2477 6 10.8 5.55228 10.8 5V1C10.8 0.447715 11.2477 0 11.8 0H17.8C18.3523 0 18.8 0.447715 18.8 1V5C18.8 5.55228 18.3523 6 17.8 6H11.8ZM1.8 10C1.24772 10 0.800003 9.55229 0.800003 9V1C0.800003 0.447715 1.24772 0 1.8 0H7.8C8.35229 0 8.8 0.447715 8.8 1V9C8.8 9.55228 8.35229 10 7.8 10H1.8ZM11.8 18C11.2477 18 10.8 17.5523 10.8 17V9C10.8 8.44772 11.2477 8 11.8 8H17.8C18.3523 8 18.8 8.44771 18.8 9V17C18.8 17.5523 18.3523 18 17.8 18H11.8ZM1.8 18C1.24772 18 0.800003 17.5523 0.800003 17V13C0.800003 12.4477 1.24772 12 1.8 12H7.8C8.35229 12 8.8 12.4477 8.8 13V17C8.8 17.5523 8.35229 18 7.8 18H1.8Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "wine",
    label: "Meine Weine",
    active: false,
    icon: '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_wine" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24"><rect x="0.600006" width="24" height="24" rx="1" fill="#D9D9D9"/></mask><g mask="url(#mask0_wine)"><path d="M19.1472 21H15.0563" stroke="#0CBA4A" stroke-width="2" stroke-linecap="round"/><path d="M17.1017 16.2273V21" stroke="#0CBA4A" stroke-width="2" stroke-linecap="round"/><path d="M19.4473 7L20.2598 10.918C20.4141 11.6622 20.3547 12.4354 20.0889 13.1475L20.0606 13.2217C19.6849 14.2276 18.9156 15.0373 17.9297 15.4629C17.4013 15.6909 16.8018 15.691 16.2735 15.4629C15.2876 15.0373 14.5182 14.2276 14.1426 13.2217L14.1143 13.1475C13.8484 12.4353 13.7901 11.6623 13.9444 10.918L14.7569 7H19.4473Z" stroke="#0CBA4A" stroke-width="2"/><path d="M19.67 11.5C17.17 11 16.67 13 14.67 12C14.587 12.6927 14.979 14.8242 17.17 14.9904C19.3609 15.1567 19.753 12.5391 19.67 11.5Z" fill="#0CBA4A"/><path d="M5.85751 3C5.85751 2.44771 6.30523 2 6.85751 2H7.48251C8.0348 2 8.48251 2.44772 8.48251 3V8.53417C8.48251 8.61394 8.53178 8.68544 8.60633 8.71384L8.72316 8.75834C9.89536 9.2049 10.67 10.329 10.67 11.5833V21C10.67 21.5523 10.2223 22 9.67001 22H4.67001C4.11773 22 3.67001 21.5523 3.67001 21V11.5833C3.67001 10.329 4.44466 9.2049 5.61686 8.75834L5.73369 8.71384C5.80825 8.68544 5.85751 8.61394 5.85751 8.53417V3Z" fill="#0CBA4A"/></g></svg>',
  },
  {
    id: "insights",
    label: "Insights",
    active: false,
    icon: '<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.78751 17.75C1.52917 17.75 1.30834 17.6583 1.12501 17.475C0.941673 17.2917 0.850006 17.0708 0.850006 16.8125V6.1875C0.850006 5.92917 0.941673 5.70833 1.12501 5.525C1.30834 5.34167 1.52917 5.25 1.78751 5.25H5.10001C5.35834 5.25 5.57917 5.34167 5.76251 5.525C5.94584 5.70833 6.03751 5.92917 6.03751 6.1875V16.8125C6.03751 17.0708 5.94584 17.2917 5.76251 17.475C5.57917 17.6583 5.35834 17.75 5.10001 17.75H1.78751ZM8.93751 17.75C8.67917 17.75 8.45834 17.6583 8.27501 17.475C8.09167 17.2917 8.00001 17.0708 8.00001 16.8125V1.1875C8.00001 0.929167 8.09167 0.708333 8.27501 0.525C8.45834 0.341667 8.67917 0.25 8.93751 0.25H12.2625C12.5208 0.25 12.7417 0.341667 12.925 0.525C13.1083 0.708333 13.2 0.929167 13.2 1.1875V16.8125C13.2 17.0708 13.1083 17.2917 12.925 17.475C12.7417 17.6583 12.5208 17.75 12.2625 17.75H8.93751ZM16.1 17.75C15.8417 17.75 15.6208 17.6583 15.4375 17.475C15.2542 17.2917 15.1625 17.0708 15.1625 16.8125V10.1875C15.1625 9.92917 15.2542 9.70833 15.4375 9.525C15.6208 9.34167 15.8417 9.25 16.1 9.25H19.4125C19.6708 9.25 19.8917 9.34167 20.075 9.525C20.2583 9.70833 20.35 9.92917 20.35 10.1875V16.8125C20.35 17.0708 20.2583 17.2917 20.075 17.475C19.8917 17.6583 19.6708 17.75 19.4125 17.75H16.1Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "reports",
    label: "Reports",
    active: false,
    icon: '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5492 17.4713C14.182 17.8238 13.7406 18 13.225 18H1.97501C1.45938 18 1.01797 17.8238 0.650787 17.4713C0.283599 17.1188 0.100006 16.695 0.100006 16.2V1.8C0.100006 1.305 0.283599 0.88125 0.650787 0.52875C1.01797 0.17625 1.45938 0 1.97501 0H8.70157C8.95157 0 9.18985 0.045 9.41641 0.135C9.64297 0.225 9.84219 0.3525 10.0141 0.5175L14.5609 4.8825C14.7328 5.0475 14.8656 5.23875 14.9594 5.45625C15.0531 5.67375 15.1 5.9025 15.1 6.1425V16.2C15.1 16.695 14.9164 17.1188 14.5492 17.4713ZM4.05876 14.1822C4.19793 14.3274 4.36557 14.4 4.56167 14.4H6.14821C6.34431 14.4 6.51195 14.3274 6.65112 14.1822C6.79029 14.037 6.85987 13.8621 6.85987 13.6575V6.1425C6.85987 5.9379 6.79029 5.763 6.65112 5.6178C6.51195 5.4726 6.34431 5.4 6.14821 5.4H4.56167C4.36557 5.4 4.19793 5.4726 4.05876 5.6178C3.91959 5.763 3.85001 5.9379 3.85001 6.1425V13.6575C3.85001 13.8621 3.91959 14.037 4.05876 14.1822ZM8.55838 14.1822C8.69755 14.3274 8.86519 14.4 9.06129 14.4H10.6383C10.8344 14.4 11.0021 14.3274 11.1413 14.1822C11.2804 14.037 11.35 13.8621 11.35 13.6575V9.3105C11.35 9.1059 11.2804 8.931 11.1413 8.7858C11.0021 8.6406 10.8344 8.568 10.6383 8.568H9.06129C8.86519 8.568 8.69755 8.6406 8.55838 8.7858C8.41921 8.931 8.34963 9.1059 8.34963 9.3105V13.6575C8.34963 13.8621 8.41921 14.037 8.55838 14.1822Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "inventur",
    label: "Inventur",
    active: false,
    icon: '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.63847 20V10.7143L0.600006 5.98701V14.1948C0.600006 14.5498 0.683339 14.8745 0.850006 15.1688C1.01667 15.4632 1.25385 15.697 1.56154 15.8701L8.63847 20ZM10.5615 20L17.6385 15.8831C17.9462 15.71 18.1833 15.474 18.35 15.1753C18.5167 14.8766 18.6 14.5498 18.6 14.1948V6.01299L10.5615 10.7013V20ZM14.5487 6.14286L17.6256 4.35065L10.5615 0.25974C10.2539 0.0865801 9.93334 0 9.60001 0C9.26667 0 8.94616 0.0865801 8.63847 0.25974L6.57437 1.45455L14.5487 6.14286ZM9.60001 9.03896L12.6256 7.27273L4.66411 2.57143L1.61283 4.35065L9.60001 9.03896Z" fill="#0CBA4A"/></svg>',
  },
];

const listItems = [
  {
    id: "favorites",
    label: "Favoriten",
    icon: '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7289 9.06836C20.7289 9.71323 20.5959 10.924 19.8227 12.291C19.398 13.0417 18.5913 13.8866 17.5268 14.8086C16.4406 15.7494 15.0049 16.8378 13.2357 18.0703L12.6654 18.4678L12.0941 18.0713C10.3166 16.8371 8.88598 15.7456 7.80508 14.8027C6.74331 13.8766 5.95092 13.0363 5.52383 12.3008C4.73356 10.9396 4.60003 9.73436 4.60001 9.06836V9.05273L4.60098 9.03613C4.67662 6.66105 6.80606 5.10544 9.08633 5.00098L9.10977 5H9.13223C10.6377 5 11.6447 5.55514 12.4184 6.30469C12.5066 6.39019 12.5881 6.47286 12.6654 6.5498C12.7402 6.47469 12.8193 6.3949 12.9037 6.31152C13.6809 5.54375 14.7773 5.00002 16.1967 5H16.2191L16.2426 5.00098C18.5545 5.10646 20.6521 6.63828 20.7289 9.03613V9.06836Z" stroke="#0CBA4A" stroke-width="2"/></svg>',
  },
  {
    id: "smart1",
    label: "Label",
    icon: '<svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.885825 0H13.4573V2.28571H0.885825V0ZM0.885773 4.57143H13.4572V6.85714H0.885773V4.57143ZM18.6715 8.5L16.8858 4.57143L15.1001 8.5L11.1715 10.2857L15.1001 12.0714L16.8858 16L18.6715 12.0714L22.6001 10.2857L18.6715 8.5ZM8.88577 11.4286H0.885773V9.14286H8.88577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "smart2",
    label: "Label",
    icon: '<svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.885825 0H13.4573V2.28571H0.885825V0ZM0.885773 4.57143H13.4572V6.85714H0.885773V4.57143ZM18.6715 8.5L16.8858 4.57143L15.1001 8.5L11.1715 10.2857L15.1001 12.0714L16.8858 16L18.6715 12.0714L22.6001 10.2857L18.6715 8.5ZM8.88577 11.4286H0.885773V9.14286H8.88577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "smart3",
    label: "Label",
    icon: '<svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.885825 0H13.4573V2.28571H0.885825V0ZM0.885773 4.57143H13.4572V6.85714H0.885773V4.57143ZM18.6715 8.5L16.8858 4.57143L15.1001 8.5L11.1715 10.2857L15.1001 12.0714L16.8858 16L18.6715 12.0714L22.6001 10.2857L18.6715 8.5ZM8.88577 11.4286H0.885773V9.14286H8.88577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "smart4",
    label: "Label",
    icon: '<svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.885825 0H13.4573V2.28571H0.885825V0ZM0.885773 4.57143H13.4572V6.85714H0.885773V4.57143ZM18.6715 8.5L16.8858 4.57143L15.1001 8.5L11.1715 10.2857L15.1001 12.0714L16.8858 16L18.6715 12.0714L22.6001 10.2857L18.6715 8.5ZM8.88577 11.4286H0.885773V9.14286H8.88577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "list1",
    label: "Label",
    icon: '<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4573 0H0.885825V2.28571H13.4573V0ZM13.4572 4.57143H0.885773V6.85714H13.4572V4.57143ZM8.88577 11.4286H0.885773V9.14286H8.88577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "list2",
    label: "Label",
    icon: '<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4573 0H0.885825V2.28571H13.4573V0ZM13.4572 4.57143H0.885773V6.85714H13.4572V4.57143ZM8.88577 11.4286H0.885773V9.14286H8.88577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "list3",
    label: "Label",
    icon: '<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4573 0H0.885825V2.28571H13.4573V0ZM13.4572 4.57143H0.885773V6.85714H13.4572V4.57143ZM8.88577 11.4286H0.885773V9.14286H8.88577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "list4",
    label: "Label",
    icon: '<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4573 0H0.885825V2.28571H13.4573V0ZM13.4572 4.57143H0.885773V6.85714H13.4572V4.57143ZM8.88577 11.4286H0.885773V9.14286H8.88577V11.4286Z" fill="#0CBA4A"/></svg>',
  },
];
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.sidebar {
  display: flex;
  height: 100vh;
  width: 312px;
  background: #1b1b1c;
  color: #e6e1f3;
  font-family: "Roboto", -apple-system, Roboto, Helvetica, sans-serif;
  transition: width 0.3s ease;

  &--collapsed {
    width: 68px;
  }
}

.sidebar-rail {
  display: flex;
  width: 68px;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  background: #1b1b1c;
  border-right: 1px solid #222325;
  gap: 24px;
}

.rail-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.rail-navigation,
.rail-lists {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.rail-lists {
  gap: 8px;
  margin-top: 16px;
}

.rail-button {
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, opacity 0.2s ease;

  &:hover {
    background: rgba(34, 35, 37, 0.5);
  }

  &--active {
    background: #222325;
  }
}

.rail-button--add {
  width: 44px;
  height: 44px;
}

.rail-footer {
  margin-top: auto;
  display: flex;
  justify-content: center;
  width: 100%;
}

.sidebar--collapsed .sidebar-panel {
  display: none;
}

.sidebar-panel {
  display: flex;
  width: 244px;
  flex-direction: column;
  background: #1b1b1c;
}

.panel-header {
  display: flex;
  height: 60px;
  padding: 24px;
  align-items: center;
  border-bottom: 1px solid #222325;
}

.panel-logo {
  display: flex;
  align-items: center;
}

.panel-content {
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  padding: 16px 24px 0;
  gap: 24px;
}

.panel-navigation {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.navigation-item {
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 16px;
  border-radius: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;

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
}

.nav-label {
  color: #e6e1f3;
  font-feature-settings: "ss01" on;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
}

.panel-lists {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.panel-lists-header {
  color: #9798a5;
  font-feature-settings: "ss01" on;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.panel-list-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.list-item {
  display: flex;
  padding: 8px 0;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(34, 35, 37, 0.5);
  }
}

.list-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-label {
  color: #e6e1f3;
  font-feature-settings: "ss01" on;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}

.panel-footer {
  display: flex;
  padding: 24px;
  justify-content: center;
  align-items: center;
  background: #1b1b1c;
  box-shadow: 0 0 16px 0 rgba(27, 27, 28, 0.4), 0 0 1px 0 rgba(27, 27, 28, 0.2);
}

.panel-add-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: #e6e1f3;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
}
</style>
