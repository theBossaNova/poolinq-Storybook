import { Story } from "@storybook/vue3";
import { ref } from "vue";
import Sidebar from "./Sidebar.vue";
import Topbar from "./Topbar.vue";

export default {
  title: "Navigation/Complete Layout",
  component: Sidebar,
};

const DefaultLayoutTemplate: Story = () => {
  const mobileOpen = ref(false);

  return {
    components: { Sidebar, Topbar },
    setup() {
      return { mobileOpen };
    },
    template: `
      <div style="display: flex; height: 100vh; font-family: 'Roboto', sans-serif; background: #222325;">
        <sidebar v-model:mobile-open="mobileOpen" />
        <div style="flex: 1; display: flex; flex-direction: column;">
          <topbar />
          <main style="flex: 1; padding: 32px; background: #222325; color: #E6E1F3;">
            <h2 style="margin: 0 0 16px; font-size: 24px; font-weight: 400;">Main Content Area</h2>
            <p style="margin: 0; color: #9798A5;">Hover over the sidebar to expand it. The default state is collapsed.</p>
          </main>
        </div>
      </div>
    `,
  };
};

export const DefaultLayout = DefaultLayoutTemplate.bind({});

const MobileLayoutTemplate: Story = () => {
  return {
    components: { Sidebar, Topbar },
    data() {
      return {
        mobileOpen: false,
      };
    },
    methods: {
      toggleMobileSidebar() {
        this.mobileOpen = !this.mobileOpen;
      },
    },
    template: `
      <div style="display: flex; flex-direction: column; height: 100vh; font-family: 'Roboto', sans-serif; background: #222325; position: relative;">
        <div style="display: flex; position: relative; z-index: 50;">
          <button 
            @click="toggleMobileSidebar"
            style="position: absolute; top: 24px; left: 24px; z-index: 101; width: 31px; height: 31px; padding: 8px; border-radius: 6px; background: transparent; border: none; cursor: pointer; transition: background 0.2s ease;"
            @mouseenter="$event.target.style.background = '#222325'"
            @mouseleave="$event.target.style.background = 'transparent'"
          >
            <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_menu)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 2.835C0.5 2.37384 0.873842 2 1.335 2H15.335C15.7962 2 16.17 2.37384 16.17 2.835C16.17 3.29616 15.7962 3.67 15.335 3.67H1.335C0.873842 3.67 0.5 3.29616 0.5 2.835ZM0.5 8.085C0.5 7.62384 0.873842 7.25 1.335 7.25H15.335C15.7962 7.25 16.17 7.62384 16.17 8.085C16.17 8.54616 15.7962 8.92 15.335 8.92H1.335C0.873842 8.92 0.5 8.54616 0.5 8.085ZM0.5 13.335C0.5 12.8738 0.873842 12.5 1.335 12.5H15.335C15.7962 12.5 16.17 12.8738 16.17 13.335C16.17 13.7962 15.7962 14.17 15.335 14.17H1.335C0.873842 14.17 0.5 13.7962 0.5 13.335Z" fill="#0CBA4A"/>
              </g>
              <defs>
                <clipPath id="clip0_menu">
                  <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
                </clipPath>
              </defs>
            </svg>
          </button>
          <topbar show-menu-button />
        </div>
        <sidebar 
          v-model:mobile-open="mobileOpen" 
          is-mobile 
          :mobile-open="mobileOpen" 
        />
        <main 
          v-if="!mobileOpen"
          style="flex: 1; padding: 24px; padding-top: 80px; background: #222325; color: #E6E1F3; overflow-y: auto; position: relative; z-index: 10;"
        >
          <h2 style="margin: 0 0 16px; font-size: 20px; font-weight: 400;">Mobile Layout</h2>
          <p style="margin: 0; color: #9798A5;">Click the menu icon to toggle the sidebar on mobile view.</p>
        </main>
        <div 
          v-if="mobileOpen"
          @click="mobileOpen = false"
          style="position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); z-index: 500;"
        ></div>
      </div>
    `,
  };
};

export const MobileView = MobileLayoutTemplate.bind({});
