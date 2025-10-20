import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta = {
  title: "All Components",
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
      <div class="all-components-overview">
        <h1>Design System Components</h1>
        <p class="intro-text">Complete library of reusable components organized by category. Click on any category to explore its components.</p>
        
        <div class="components-grid">
          <div class="category-card">
            <h2>Inputs</h2>
            <p>Text inputs, number inputs, select menus, and text selection fields</p>
            <ul class="component-list">
              <li><a href="?path=/docs/inputs-inputs-overview--overview">Inputs Overview</a></li>
              <li><a href="?path=/story/inputs-number-count--default">Number Count</a></li>
              <li><a href="?path=/story/inputs-number-select--default">Number Select</a></li>
              <li><a href="?path=/story/inputs-select--default">Select</a></li>
              <li><a href="?path=/story/inputs-text-input--default">Text Input</a></li>
              <li><a href="?path=/story/inputs-text-select--default">Text Select</a></li>
            </ul>
          </div>

          <div class="category-card">
            <h2>Selection Controls</h2>
            <p>Checkboxes, radio buttons, and step sorting controls</p>
            <ul class="component-list">
              <li><a href="?path=/docs/selection-controls-selection-controls-overview--overview">Selection Controls Overview</a></li>
              <li><a href="?path=/story/selection-controls-checkbox--default">Checkbox</a></li>
              <li><a href="?path=/story/selection-controls-radio--default">Radio</a></li>
              <li><a href="?path=/story/selection-controls-step-sort--default">Step Sort</a></li>
            </ul>
          </div>

          <div class="category-card">
            <h2>Navigation</h2>
            <p>Navigation layouts, sidebars, and top bars</p>
            <ul class="component-list">
              <li><a href="?path=/docs/navigation-navigation-overview--overview">Navigation Overview</a></li>
              <li><a href="?path=/story/navigation-navigation-layout--default">Navigation Layout</a></li>
              <li><a href="?path=/story/navigation-sidebar--default">Sidebar</a></li>
              <li><a href="?path=/story/navigation-tabs--default">Tabs</a></li>
              <li><a href="?path=/story/navigation-topbar--default">Topbar</a></li>
            </ul>
          </div>

          <div class="category-card">
            <h2>Feedback</h2>
            <p>Badges, badges, and status indicators</p>
            <ul class="component-list">
              <li><a href="?path=/docs/feedback-feedback-overview--overview">Feedback Overview</a></li>
              <li><a href="?path=/story/feedback-badge--default">Badge</a></li>
            </ul>
          </div>

          <div class="category-card">
            <h2>Dropzone</h2>
            <p>File upload and drag-and-drop components</p>
            <ul class="component-list">
              <li><a href="?path=/docs/dropzone-dropzone-overview--overview">Dropzone Overview</a></li>
              <li><a href="?path=/story/dropzone-drop-area--default">Drop Area</a></li>
              <li><a href="?path=/story/dropzone-upload-states--default">Upload States</a></li>
            </ul>
          </div>

          <div class="category-card">
            <h2>Filters</h2>
            <p>Filter components and controls</p>
            <ul class="component-list">
              <li><a href="?path=/docs/filters-filters-overview--overview">Filters Overview</a></li>
              <li><a href="?path=/story/filters-filter--closed">Filter</a></li>
            </ul>
          </div>
        </div>
      </div>
    `,
  }),
};
