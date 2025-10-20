import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta = {
  title: "Inputs/Inputs Overview",
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
        <h1>Inputs Components</h1>
        <p class="intro-text">A collection of input components for user interaction including text inputs, number inputs, and selection fields.</p>
        
        <div class="components-grid">
          <div class="component-card">
            <h3>Number Count</h3>
            <p>Numeric counter input for incrementing and decrementing values</p>
            <a href="?path=/story/inputs-number-count--default" class="btn-link">View Component →</a>
          </div>

          <div class="component-card">
            <h3>Number Select</h3>
            <p>Dropdown select for numeric values</p>
            <a href="?path=/story/inputs-number-select--default" class="btn-link">View Component →</a>
          </div>

          <div class="component-card">
            <h3>Select</h3>
            <p>Standard dropdown select input</p>
            <a href="?path=/story/inputs-select--default" class="btn-link">View Component →</a>
          </div>

          <div class="component-card">
            <h3>Text Input</h3>
            <p>Basic text input field with various states</p>
            <a href="?path=/story/inputs-text-input--default" class="btn-link">View Component →</a>
          </div>

          <div class="component-card">
            <h3>Text Select</h3>
            <p>Text-based select input with search capability</p>
            <a href="?path=/story/inputs-text-select--default" class="btn-link">View Component →</a>
          </div>
        </div>
      </div>
    `,
  }),
};
