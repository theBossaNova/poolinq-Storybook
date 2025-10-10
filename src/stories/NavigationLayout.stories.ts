import { Story } from "@storybook/vue3";
import Sidebar from "./Sidebar.vue";
import Topbar from "./Topbar.vue";

export default {
  title: "Navigation/Complete Layout",
  component: Sidebar,
};

const LayoutTemplate: Story = () => ({
  components: { Sidebar, Topbar },
  template: `
    <div style="display: flex; height: 100vh; font-family: 'Roboto', sans-serif;">
      <sidebar />
      <div style="flex: 1; display: flex; flex-direction: column; background: #1B1B1C;">
        <topbar />
        <main style="flex: 1; padding: 32px; background: #0F0F0F; color: #E6E1F3;">
          <h2 style="margin: 0 0 16px; font-size: 24px; font-weight: 400;">Main Content Area</h2>
          <p style="margin: 0; color: #9798A5;">This is where your main content would appear.</p>
        </main>
      </div>
    </div>
  `,
});

export const FullLayout = LayoutTemplate.bind({});

const LayoutCollapsedTemplate: Story = () => ({
  components: { Sidebar, Topbar },
  template: `
    <div style="display: flex; height: 100vh; font-family: 'Roboto', sans-serif;">
      <sidebar collapsed />
      <div style="flex: 1; display: flex; flex-direction: column; background: #1B1B1C;">
        <topbar />
        <main style="flex: 1; padding: 32px; background: #0F0F0F; color: #E6E1F3;">
          <h2 style="margin: 0 0 16px; font-size: 24px; font-weight: 400;">Main Content Area</h2>
          <p style="margin: 0; color: #9798A5;">This is where your main content would appear.</p>
        </main>
      </div>
    </div>
  `,
});

export const CollapsedSidebar = LayoutCollapsedTemplate.bind({});

const MobileLayoutTemplate: Story = () => ({
  components: { Topbar },
  template: `
    <div style="display: flex; flex-direction: column; height: 100vh; font-family: 'Roboto', sans-serif;">
      <topbar show-menu-button />
      <main style="flex: 1; padding: 24px; background: #0F0F0F; color: #E6E1F3;">
        <h2 style="margin: 0 0 16px; font-size: 20px; font-weight: 400;">Mobile Layout</h2>
        <p style="margin: 0; color: #9798A5;">On mobile, the sidebar is hidden and toggled via the menu button.</p>
      </main>
    </div>
  `,
});

export const MobileView = MobileLayoutTemplate.bind({});
