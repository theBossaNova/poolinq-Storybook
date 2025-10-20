import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta = {
  title: "Filters/Filters Overview",
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
        <h1>Filters Components</h1>
        <p class="intro-text">Filter components for data filtering and selection.</p>
        
        <div class="components-grid">
          <div class="component-card">
            <h3>Filter</h3>
            <p>Comprehensive filter control with multiple subfilters</p>
            <a href="?path=/story/filters-filter--closed" class="btn-link">View Component →</a>
          </div>
        </div>
      </div>
    `,
  }),
};
