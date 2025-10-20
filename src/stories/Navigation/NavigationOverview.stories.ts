import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta = {
  title: "Navigation/Navigation Overview",
  parameters: {
    layout: "padded",
    docs: {
      canvas: { sourceState: "hidden" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => ({
    template: `
      <div class="category-overview">
        <h1>Navigation Components</h1>
        <p class="intro-text">Components for page navigation and layout including navigation layouts, sidebars, tabs, and top bars.</p>
        
        <div class="components-grid">
          <div class="component-card">
            <h3>Navigation Layout</h3>
            <p>Complete navigation layout component</p>
            <a href="?path=/story/navigation-navigation-layout--default" class="btn-link">View Component →</a>
          </div>

          <div class="component-card">
            <h3>Sidebar</h3>
            <p>Sidebar navigation component</p>
            <a href="?path=/story/navigation-sidebar--default" class="btn-link">View Component →</a>
          </div>

          <div class="component-card">
            <h3>Tabs</h3>
            <p>Tab navigation with multiple display styles</p>
            <a href="?path=/story/navigation-tabs--default" class="btn-link">View Component →</a>
          </div>

          <div class="component-card">
            <h3>Topbar</h3>
            <p>Top navigation bar component</p>
            <a href="?path=/story/navigation-topbar--default" class="btn-link">View Component →</a>
          </div>
        </div>
      </div>
    `,
  }),
};
