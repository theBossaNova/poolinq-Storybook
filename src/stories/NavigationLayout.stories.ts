import { Story } from "@storybook/vue3";
import Sidebar from "./Sidebar.vue";
import Topbar from "./Topbar.vue";

export default {
  title: "Navigation/Complete Layout",
  component: Sidebar,
};

const DefaultLayoutTemplate: Story = () => ({
  components: { Sidebar, Topbar },
  template: `
    <div style="display: flex; height: 100vh; font-family: 'Roboto', sans-serif; background: #222325;">
      <sidebar />
      <div style="flex: 1; display: flex; flex-direction: column;">
        <topbar />
        <main style="flex: 1; padding: 32px; background: #222325; color: #E6E1F3;">
          <h2 style="margin: 0 0 16px; font-size: 24px; font-weight: 400;">Main Content Area</h2>
          <p style="margin: 0; color: #9798A5;">Hover over the sidebar to expand it. The default state is collapsed.</p>
        </main>
      </div>
    </div>
  `,
});

export const DefaultLayout = DefaultLayoutTemplate.bind({});

const MobileLayoutTemplate: Story = () => ({
  components: { Sidebar, Topbar },
  template: `
    <div style="display: flex; flex-direction: column; height: 100vh; font-family: 'Roboto', sans-serif; background: #222325;">
      <topbar show-menu-button />
      <main style="flex: 1; padding: 24px; background: #222325; color: #E6E1F3;">
        <h2 style="margin: 0 0 16px; font-size: 20px; font-weight: 400;">Mobile Layout</h2>
        <p style="margin: 0; color: #9798A5;">On mobile, the sidebar is hidden and toggled via the menu button.</p>
      </main>
    </div>
  `,
});

export const MobileView = MobileLayoutTemplate.bind({});
