import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta = {
  title: "Selection Controls/Selection Controls Overview",
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
        <h1>Selection Controls Components</h1>
        <p class="intro-text">Components for user selection including checkboxes, radio buttons, and step sorting controls.</p>
        
        <div class="components-grid">
          <div class="component-card">
            <h3>Checkbox</h3>
            <p>Standard checkbox control with label support</p>
            <a href="?path=/story/selection-controls-checkbox--default" class="btn-link">View Component →</a>
          </div>

          <div class="component-card">
            <h3>Radio</h3>
            <p>Radio button control for mutually exclusive selections</p>
            <a href="?path=/story/selection-controls-radio--default" class="btn-link">View Component →</a>
          </div>

          <div class="component-card">
            <h3>Step Sort</h3>
            <p>Control for ordering and sorting with step indicators</p>
            <a href="?path=/story/selection-controls-step-sort--default" class="btn-link">View Component →</a>
          </div>
        </div>
      </div>
    `,
  }),
};
