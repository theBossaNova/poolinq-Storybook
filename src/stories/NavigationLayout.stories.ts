import { Story } from "@storybook/vue3";
import Sidebar from "./Sidebar.vue";
import Topbar from "./Topbar.vue";

export default {
  title: "Navigation/Complete Layout",
  component: Sidebar,
};

const FullLayoutTemplate: Story = () => ({
  components: { Sidebar, Topbar },
  template: `
    <div style="display: flex; height: 100vh; font-family: 'Roboto', sans-serif; background: #222325;">
      <sidebar :collapsed="false" />
      <div style="flex: 1; display: flex; flex-direction: column;">
        <topbar />
        <main style="flex: 1; padding: 32px; background: #222325; color: #E6E1F3;">
          <h2 style="margin: 0 0 16px; font-size: 24px; font-weight: 400;">Main Content Area</h2>
          <p style="margin: 0; color: #9798A5;">This is the expanded sidebar layout with the full navigation visible.</p>
        </main>
      </div>
    </div>
  `,
});

export const ExpandedSidebar = FullLayoutTemplate.bind({});

const CollapsedLayoutTemplate: Story = () => ({
  components: { Sidebar, Topbar },
  template: `
    <div style="display: flex; height: 100vh; font-family: 'Roboto', sans-serif; background: #222325;">
      <sidebar :collapsed="true" />
      <div style="flex: 1; display: flex; flex-direction: column;">
        <topbar />
        <main style="flex: 1; padding: 32px; background: #222325; color: #E6E1F3;">
          <h2 style="margin: 0 0 16px; font-size: 24px; font-weight: 400;">Main Content Area</h2>
          <p style="margin: 0; color: #9798A5;">This is the collapsed sidebar layout with icons only.</p>
        </main>
      </div>
    </div>
  `,
});

export const CollapsedSidebar = CollapsedLayoutTemplate.bind({});
