<template>
  <aside :class="['sidebar', { 'sidebar--collapsed': collapsed }]">
    <!-- Collapsed State: Just the icon rail -->
    <div v-if="collapsed" class="sidebar-collapsed">
      <div class="collapsed-logo">
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

      <div class="collapsed-container">
        <div class="collapsed-nav-items">
          <button
            v-for="item in navItems"
            :key="`collapsed-${item.id}`"
            :class="[
              'collapsed-nav-button',
              { 'collapsed-nav-button--active': item.active },
            ]"
            v-html="item.icon"
          ></button>
        </div>

        <div class="collapsed-list-items">
          <button
            v-for="list in listItems"
            :key="`collapsed-list-${list.id}`"
            class="collapsed-nav-button"
            v-html="list.icon"
          ></button>
        </div>
      </div>

      <div class="collapsed-footer">
        <button class="collapsed-add-button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8 8V16M8.80005 12H16.8M22.8 12C22.8 17.5228 18.3229 22 12.8 22C7.2772 22 2.80005 17.5228 2.80005 12C2.80005 6.47715 7.2772 2 12.8 2C18.3229 2 22.8 6.47715 22.8 12Z"
              stroke="#0CBA4A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Expanded State: Full sidebar with labels -->
    <div v-else class="sidebar-expanded">
      <div class="expanded-logo-section">
        <div class="expanded-logo">
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
              d="M7.15905 12.4119C5.76403 12.4119 4.52748 11.9625 3.65889 11.1961V5.43636C4.55274 4.66977 5.79062 4.19493 7.15905 4.19493C9.60663 4.19493 11.4491 5.96485 11.4491 8.31611C11.4491 10.7469 9.60663 12.4119 7.15905 12.4119ZM7.81707 0.890991C6.31677 0.890991 4.84333 1.31379 3.65888 2.00136V1.15577H0V20.1274H3.65888V14.631C4.84333 15.3186 6.29019 15.7147 7.81707 15.7147C11.7915 15.7147 15.0545 12.729 15.0545 8.31606C15.0545 3.8244 11.7915 0.890991 7.81707 0.890991V0.890991Z"
              fill="#00C164"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.672852 20.1091H4.01831V0.872742H0.672852V20.1091Z"
              fill="#00C164"
              transform="translate(48, 0)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.363525 15.1092H3.70898V0.890991H0.363525V15.1092Z"
              fill="#00C164"
              transform="translate(54, 5)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.41954 0.890991C5.99388 0.890991 4.69686 1.30238 3.65945 2.02336V1.14863H0.0544434V15.1092H3.65945V5.21086C4.46292 4.51715 5.50007 4.10576 6.77116 4.10576C8.76791 4.10576 9.831 5.15891 9.831 7.31924V15.1092H13.4363V7.31924C13.4363 2.79393 11.5432 0.890991 7.41954 0.890991"
              fill="#00C164"
              transform="translate(61, 5)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3415 11.1961C11.446 11.9625 10.2097 12.4119 8.81469 12.4119C6.36706 12.4119 4.55115 10.7469 4.55115 8.31611C4.55115 5.96485 6.36706 4.19493 8.81469 4.19493C10.2097 4.19493 11.421 4.66977 12.3415 5.43636V11.1961ZM12.3414 1.15577V2.00136C11.157 1.31379 9.6569 0.890991 8.15631 0.890991C4.18203 0.890991 0.945557 3.8244 0.945557 8.31606C0.945557 12.729 4.18203 15.7147 8.15631 15.7147C9.71007 15.7147 11.1304 15.3186 12.3414 14.631V20.1274H16.0001V1.15577H12.3414V1.15577Z"
              fill="#00C164"
              transform="translate(76, 0)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.5289 11.9413H15.0259C15.8472 10.8179 16.3266 9.46747 16.3266 8.01281C16.3266 5.83311 18.2172 4.05997 20.5289 4.05997C22.866 4.05997 24.7301 5.83311 24.7301 8.01281C24.7301 10.1669 22.866 11.9413 20.5289 11.9413ZM8.52702 11.9413C6.21643 11.9413 4.32605 10.1669 4.32605 8.01281C4.32605 5.83311 6.21643 4.05997 8.52702 4.05997H14.0337C13.21 5.1895 12.7291 6.54765 12.7291 8.01281C12.7291 10.1669 10.8641 11.9413 8.52702 11.9413ZM20.5289 0.890991C18.1159 0.890991 15.9583 1.88509 14.5274 3.45547C13.0976 1.88509 10.94 0.890991 8.52706 0.890991C5.81775 0.890991 3.43023 2.1452 2.03194 4.05992C1.20825 5.18945 0.727295 6.54759 0.727295 8.01275C0.727295 11.9413 4.22103 15.1092 8.52706 15.1092C10.94 15.1092 13.0976 14.1151 14.5274 12.5496C15.9583 14.1151 18.1159 15.1092 20.5289 15.1092C23.2406 15.1092 25.6297 13.8537 27.0266 11.9413C27.8479 10.8179 28.3273 9.46742 28.3273 8.01275C28.3273 4.05992 24.8349 0.890991 20.5289 0.890991V0.890991Z"
              fill="#00C164"
              transform="translate(16, 5)"
            />
          </svg>
        </div>
      </div>

      <div class="expanded-container">
        <div class="expanded-nav-section">
          <button
            v-for="item in navItems"
            :key="item.id"
            :class="[
              'expanded-nav-item',
              { 'expanded-nav-item--active': item.active },
            ]"
          >
            <div class="nav-icon" v-html="item.icon"></div>
            <div class="nav-label">{{ item.label }}</div>
          </button>
        </div>

        <div class="expanded-lists-section">
          <div class="lists-header">Listen</div>
          <div class="lists-items">
            <button
              v-for="list in listItems"
              :key="list.id"
              class="list-item"
            >
              <div class="list-icon" v-html="list.icon"></div>
              <div class="list-label">{{ list.label }}</div>
            </button>
          </div>
        </div>
      </div>

      <div class="expanded-footer">
        <button class="expanded-add-button">
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
    icon: '<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8 6C11.2478 6 10.8 5.55228 10.8 5V1C10.8 0.447715 11.2478 0 11.8 0H17.8C18.3523 0 18.8 0.447715 18.8 1V5C18.8 5.55228 18.3523 6 17.8 6H11.8ZM1.80005 10C1.24776 10 0.800049 9.55228 0.800049 9V1C0.800049 0.447716 1.24776 0 1.80005 0H7.80005C8.35233 0 8.80005 0.447715 8.80005 1V9C8.80005 9.55228 8.35233 10 7.80005 10H1.80005ZM11.8 18C11.2478 18 10.8 17.5523 10.8 17V9C10.8 8.44772 11.2478 8 11.8 8H17.8C18.3523 8 18.8 8.44772 18.8 9V17C18.8 17.5523 18.3523 18 17.8 18H11.8ZM1.80005 18C1.24776 18 0.800049 17.5523 0.800049 17V13C0.800049 12.4477 1.24776 12 1.80005 12H7.80005C8.35233 12 8.80005 12.4477 8.80005 13V17C8.80005 17.5523 8.35233 18 7.80005 18H1.80005Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "wine",
    label: "Meine Weine",
    active: false,
    icon: '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_wine" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24"><rect x="0.800049" width="24" height="24" rx="1" fill="#D9D9D9"/></mask><g mask="url(#mask0_wine)"><path d="M19.3472 21H15.2563" stroke="#0CBA4A" stroke-width="2" stroke-linecap="round"/><path d="M17.3016 16.2273V21" stroke="#0CBA4A" stroke-width="2" stroke-linecap="round"/><path d="M19.6472 7L20.4597 10.918C20.614 11.6622 20.5547 12.4354 20.2888 13.1475L20.2605 13.2217C19.8849 14.2276 19.1155 15.0373 18.1296 15.4629C17.6012 15.6909 17.0018 15.691 16.4734 15.4629C15.4875 15.0373 14.7181 14.2276 14.3425 13.2217L14.3142 13.1475C14.0483 12.4353 13.99 11.6623 14.1443 10.918L14.9568 7H19.6472Z" stroke="#0CBA4A" stroke-width="2"/><path d="M19.8699 11.5C17.3698 11 16.8699 13 14.8699 12C14.7869 12.6927 15.1789 14.8242 17.3698 14.9904C19.5607 15.1567 19.9528 12.5391 19.8699 11.5Z" fill="#0CBA4A"/><path d="M6.0575 3C6.0575 2.44771 6.50521 2 7.0575 2H7.6825C8.23478 2 8.6825 2.44772 8.6825 3V8.53417C8.6825 8.61394 8.73176 8.68544 8.80632 8.71384L8.92315 8.75834C10.0953 9.2049 10.87 10.329 10.87 11.5833V21C10.87 21.5523 10.4223 22 9.87 22H4.87C4.31771 22 3.87 21.5523 3.87 21V11.5833C3.87 10.329 4.64464 9.2049 5.81684 8.75834L5.93367 8.71384C6.00823 8.68544 6.0575 8.61394 6.0575 8.53417V3Z" fill="#0CBA4A"/></g></svg>',
  },
  {
    id: "insights",
    label: "Insights",
    active: false,
    icon: '<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.987549 17.75C0.729216 17.75 0.508382 17.6583 0.325049 17.475C0.141715 17.2917 0.0500488 17.0708 0.0500488 16.8125V6.1875C0.0500488 5.92917 0.141715 5.70833 0.325049 5.525C0.508382 5.34167 0.729216 5.25 0.987549 5.25H4.30005C4.55838 5.25 4.77922 5.34167 4.96255 5.525C5.14588 5.70833 5.23755 5.92917 5.23755 6.1875V16.8125C5.23755 17.0708 5.14588 17.2917 4.96255 17.475C4.77922 17.6583 4.55838 17.75 4.30005 17.75H0.987549ZM8.13755 17.75C7.87922 17.75 7.65838 17.6583 7.47505 17.475C7.29172 17.2917 7.20005 17.0708 7.20005 16.8125V1.1875C7.20005 0.929167 7.29172 0.708333 7.47505 0.525C7.65838 0.341667 7.87922 0.25 8.13755 0.25H11.4625C11.7209 0.25 11.9417 0.341667 12.125 0.525C12.3084 0.708333 12.4 0.929167 12.4 1.1875V16.8125C12.4 17.0708 12.3084 17.2917 12.125 17.475C11.9417 17.6583 11.7209 17.75 11.4625 17.75H8.13755ZM15.3 17.75C15.0417 17.75 14.8209 17.6583 14.6375 17.475C14.4542 17.2917 14.3625 17.0708 14.3625 16.8125V10.1875C14.3625 9.92917 14.4542 9.70833 14.6375 9.525C14.8209 9.34167 15.0417 9.25 15.3 9.25H18.6125C18.8709 9.25 19.0917 9.34167 19.275 9.525C19.4584 9.70833 19.55 9.92917 19.55 10.1875V16.8125C19.55 17.0708 19.4584 17.2917 19.275 17.475C19.0917 17.6583 18.8709 17.75 18.6125 17.75H15.3Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "reports",
    label: "Reports",
    active: false,
    icon: '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7493 17.4713C14.3821 17.8238 13.9407 18 13.425 18H2.17505C1.65942 18 1.21802 17.8238 0.85083 17.4713C0.483642 17.1188 0.300049 16.695 0.300049 16.2V1.8C0.300049 1.305 0.483642 0.88125 0.85083 0.52875C1.21802 0.17625 1.65942 0 2.17505 0H8.90161C9.15161 0 9.38989 0.045 9.61646 0.135C9.84302 0.225 10.0422 0.3525 10.2141 0.5175L14.761 4.8825C14.9329 5.0475 15.0657 5.23875 15.1594 5.45625C15.2532 5.67375 15.3 5.9025 15.3 6.1425V16.2C15.3 16.695 15.1165 17.1188 14.7493 17.4713ZM4.2588 14.1822C4.39797 14.3274 4.56561 14.4 4.76171 14.4H6.34825C6.54436 14.4 6.71199 14.3274 6.85116 14.1822C6.99033 14.037 7.05992 13.8621 7.05992 13.6575V6.1425C7.05992 5.9379 6.99033 5.763 6.85116 5.6178C6.71199 5.4726 6.54436 5.4 6.34825 5.4H4.76171C4.56561 5.4 4.39797 5.4726 4.2588 5.6178C4.11963 5.763 4.05005 5.9379 4.05005 6.1425V13.6575C4.05005 13.8621 4.11963 14.037 4.2588 14.1822ZM8.75842 14.1822C8.89759 14.3274 9.06523 14.4 9.26133 14.4H10.8384C11.0345 14.4 11.2021 14.3274 11.3413 14.1822C11.4805 14.037 11.55 13.8621 11.55 13.6575V9.3105C11.55 9.1059 11.4805 8.931 11.3413 8.7858C11.2021 8.6406 11.0345 8.568 10.8384 8.568H9.26133C9.06523 8.568 8.89759 8.6406 8.75842 8.7858C8.61925 8.931 8.54967 9.1059 8.54967 9.3105V13.6575C8.54967 13.8621 8.61925 14.037 8.75842 14.1822Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "inventur",
    label: "Inventur",
    active: false,
    icon: '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.83851 20V10.7143L0.800049 5.98701V14.1948C0.800049 14.5498 0.883382 14.8745 1.05005 15.1688C1.21672 15.4632 1.45389 15.697 1.76159 15.8701L8.83851 20ZM10.7616 20L17.8385 15.8831C18.1462 15.71 18.3834 15.474 18.55 15.1753C18.7167 14.8766 18.8 14.5498 18.8 14.1948V6.01299L10.7616 10.7013V20ZM14.7488 6.14286L17.8257 4.35065L10.7616 0.25974C10.4539 0.0865801 10.1334 0 9.80005 0C9.46672 0 9.1462 0.0865801 8.83851 0.25974L6.77441 1.45455L14.7488 6.14286ZM9.80005 9.03896L12.8257 7.27273L4.86415 2.57143L1.81287 4.35065L9.80005 9.03896Z" fill="#0CBA4A"/></svg>',
  },
];

const listItems = [
  {
    id: "favorites",
    label: "Favoriten",
    icon: '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.929 9.06836C20.9289 9.71323 20.7959 10.924 20.0227 12.291C19.598 13.0417 18.7913 13.8866 17.7268 14.8086C16.6406 15.7494 15.205 16.8378 13.4358 18.0703L12.8655 18.4678L12.2942 18.0713C10.5166 16.8371 9.08602 15.7456 8.00513 14.8027C6.94335 13.8766 6.15096 13.0363 5.72388 12.3008C4.9336 10.9396 4.80007 9.73436 4.80005 9.06836V9.05273L4.80103 9.03613C4.87666 6.66105 7.0061 5.10544 9.28638 5.00098L9.30981 5H9.33228C10.8378 5 11.8448 5.55514 12.6184 6.30469C12.7067 6.39019 12.7881 6.47286 12.8655 6.5498C12.9402 6.47469 13.0194 6.3949 13.1038 6.31152C13.881 5.54375 14.9773 5.00002 16.3967 5H16.4192L16.4426 5.00098C18.7546 5.10646 20.8522 6.63828 20.929 9.03613V9.06836Z" stroke="#0CBA4A" stroke-width="2"/></svg>',
  },
  {
    id: "smart1",
    label: "Label",
    icon: '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0858677 0H12.6573V2.28571H0.0858677V0ZM0.0858154 4.57143H12.6572V6.85714H0.0858154V4.57143ZM17.8715 8.5L16.0858 4.57143L14.3001 8.5L10.3715 10.2857L14.3001 12.0714L16.0858 16L17.8715 12.0714L21.8001 10.2857L17.8715 8.5ZM8.08582 11.4286H0.0858154V9.14286H8.08582V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "smart2",
    label: "Label",
    icon: '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0858677 0H12.6573V2.28571H0.0858677V0ZM0.0858154 4.57143H12.6572V6.85714H0.0858154V4.57143ZM17.8715 8.5L16.0858 4.57143L14.3001 8.5L10.3715 10.2857L14.3001 12.0714L16.0858 16L17.8715 12.0714L21.8001 10.2857L17.8715 8.5ZM8.08582 11.4286H0.0858154V9.14286H8.08582V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "smart3",
    label: "Label",
    icon: '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0858677 0H12.6573V2.28571H0.0858677V0ZM0.0858154 4.57143H12.6572V6.85714H0.0858154V4.57143ZM17.8715 8.5L16.0858 4.57143L14.3001 8.5L10.3715 10.2857L14.3001 12.0714L16.0858 16L17.8715 12.0714L21.8001 10.2857L17.8715 8.5ZM8.08582 11.4286H0.0858154V9.14286H8.08582V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "smart4",
    label: "Label",
    icon: '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0858677 0H12.6573V2.28571H0.0858677V0ZM0.0858154 4.57143H12.6572V6.85714H0.0858154V4.57143ZM17.8715 8.5L16.0858 4.57143L14.3001 8.5L10.3715 10.2857L14.3001 12.0714L16.0858 16L17.8715 12.0714L21.8001 10.2857L17.8715 8.5ZM8.08582 11.4286H0.0858154V9.14286H8.08582V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "list1",
    label: "Label",
    icon: '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6573 0H0.0858677V2.28571H12.6573V0ZM12.6572 4.57143H0.0858154V6.85714H12.6572V4.57143ZM8.08582 11.4286H0.0858154V9.14286H8.08582V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "list2",
    label: "Label",
    icon: '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6573 0H0.0858677V2.28571H12.6573V0ZM12.6572 4.57143H0.0858154V6.85714H12.6572V4.57143ZM8.08582 11.4286H0.0858154V9.14286H8.08582V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "list3",
    label: "Label",
    icon: '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6573 0H0.0858677V2.28571H12.6573V0ZM12.6572 4.57143H0.0858154V6.85714H12.6572V4.57143ZM8.08582 11.4286H0.0858154V9.14286H8.08582V11.4286Z" fill="#0CBA4A"/></svg>',
  },
  {
    id: "list4",
    label: "Label",
    icon: '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6573 0H0.0858677V2.28571H12.6573V0ZM12.6572 4.57143H0.0858154V6.85714H12.6572V4.57143ZM8.08582 11.4286H0.0858154V9.14286H8.08582V11.4286Z" fill="#0CBA4A"/></svg>',
  },
];
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.sidebar {
  display: flex;
  height: 100vh;
  font-family: "Roboto", -apple-system, Roboto, Helvetica, sans-serif;
  background: #1b1b1c;
  color: #e6e1f3;
}

/* Collapsed State Styles */
.sidebar-collapsed {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 72px;
  border-right: 1px solid #222325;
  background: #1b1b1c;
}

.collapsed-logo {
  display: flex;
  height: 72px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}

.collapsed-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  padding: 0 6px;
}

.collapsed-nav-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
}

.collapsed-nav-button {
  display: flex;
  width: 100%;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
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

.collapsed-list-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
  margin-top: 16px;
}

.collapsed-footer {
  display: flex;
  padding: 25px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: #1b1b1c;
  box-shadow: 0 0 16px 0 rgba(27, 27, 28, 0.4), 0 0 1px 0 rgba(27, 27, 28, 0.2);
}

.collapsed-add-button {
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

/* Expanded State Styles */
.sidebar-expanded {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 244px;
  border-right: 1px solid #222325;
  background: #1b1b1c;
}

.expanded-logo-section {
  display: flex;
  height: 72px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border-right: 1px solid #222325;
  background: #1b1b1c;
}

.expanded-logo {
  width: 92px;
  height: 24.255px;
  flex-shrink: 0;
}

.expanded-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
}

.expanded-nav-section {
  display: flex;
  padding: 0 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
}

.expanded-nav-item {
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
  line-height: normal;
  text-transform: uppercase;
}

.expanded-lists-section {
  display: flex;
  padding: 0 24px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
}

.lists-header {
  color: #9798a5;
  text-align: center;
  font-feature-settings: "ss01" on;
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
  padding-bottom: 8px;
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
  width: 100%;
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
  justify-content: center;
  align-items: center;
}

.list-label {
  flex: 1 0 0;
  color: #e6e1f3;
  font-feature-settings: "ss01" on;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
}

.expanded-footer {
  display: flex;
  padding: 24px 24px 24px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background: #1b1b1c;
  box-shadow: 0 0 16px 0 rgba(27, 27, 28, 0.4), 0 0 1px 0 rgba(27, 27, 28, 0.2);
}

.expanded-add-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: #e6e1f3;
  cursor: pointer;
  transition: opacity 0.2s ease;

  span {
    color: #e6e1f3;
    font-feature-settings: "ss01" on;
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
