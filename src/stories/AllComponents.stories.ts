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
        <style>
          .all-components-overview {
            background-color: #0F0F0F;
            color: #E8E8E8;
            font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            padding: 48px 24px;
            min-height: 100vh;
          }

          .all-components-overview h1 {
            font-size: 32px;
            font-weight: 700;
            margin: 0 0 16px 0;
            color: #F5F5F5;
          }

          .all-components-overview > p {
            font-size: 16px;
            font-weight: 400;
            color: #9B9B9B;
            margin: 0 0 48px 0;
            max-width: 600px;
          }

          .category-section {
            margin-bottom: 64px;
          }

          .category-section > h2 {
            font-size: 20px;
            font-weight: 700;
            color: #F5F5F5;
            margin: 0 0 24px 0;
          }

          .components-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 16px;
          }

          .component-card {
            background-color: #1A1A1A;
            border: 1px solid #2A2A2A;
            border-radius: 12px;
            padding: 24px;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            flex-direction: column;
            text-decoration: none;
            color: inherit;
          }

          .component-card:hover {
            transform: translateY(-4px);
            border-color: #00C47A;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          }

          .component-card h3,
          .component-card h2 {
            font-size: 18px;
            font-weight: 700;
            color: #F5F5F5;
            margin: 0 0 8px 0;
          }

          .component-card > p {
            font-size: 14px;
            font-weight: 400;
            color: #9B9B9B;
            margin: 0 0 16px 0;
            flex-grow: 1;
          }

          .component-card-action {
            font-size: 14px;
            font-weight: 600;
            color: #00C47A;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s ease;
          }

          .component-card:hover .component-card-action {
            gap: 10px;
          }

          .overview-gallery-section {
            margin-top: 80px;
            padding-top: 48px;
            border-top: 1px solid #2A2A2A;
          }

          .overview-gallery-section h2 {
            font-size: 24px;
            font-weight: 700;
            color: #F5F5F5;
            margin: 0 0 16px 0;
          }

          .overview-gallery-section > p {
            font-size: 16px;
            font-weight: 400;
            color: #9B9B9B;
            margin: 0 0 32px 0;
          }

          .overview-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 24px;
          }

          .overview-card {
            background-color: #1A1A1A;
            border: 1px solid #2A2A2A;
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.2s ease;
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: column;
            cursor: pointer;
          }

          .overview-card:hover {
            border-color: #00C47A;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
            transform: translateY(-4px);
          }

          .overview-preview {
            width: 100%;
            height: 200px;
            border-bottom: 1px solid #2A2A2A;
            overflow: hidden;
          }

          .overview-preview iframe {
            width: 100%;
            height: 100%;
            border: none;
          }

          .overview-content {
            padding: 20px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          }

          .overview-card h3 {
            font-size: 18px;
            font-weight: 700;
            color: #F5F5F5;
            margin: 0 0 8px 0;
          }

          .overview-card p {
            font-size: 14px;
            font-weight: 400;
            color: #9B9B9B;
            margin: 0;
            flex-grow: 1;
          }
        </style>

        <h1>Design System Components</h1>
        <p>Complete library of reusable components organized by category. Click on any category to explore its components.</p>

        <div class="category-section">
          <h2>Inputs</h2>
          <div class="components-grid">
            <a href="?path=/docs/inputs-inputs-overview--overview" class="component-card">
              <h3>Inputs Overview</h3>
              <p>Complete input components reference</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/inputs-number-count--small" class="component-card">
              <h3>Number Count</h3>
              <p>Numeric counter input for incrementing and decrementing values</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/inputs-number-select--default" class="component-card">
              <h3>Number Select</h3>
              <p>Dropdown select for numeric values</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/inputs-select--closed" class="component-card">
              <h3>Select</h3>
              <p>Standard dropdown select input</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/inputs-text-input--default" class="component-card">
              <h3>Text Input</h3>
              <p>Basic text input field with various states</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/inputs-text-select--empty" class="component-card">
              <h3>Text Select</h3>
              <p>Text-based select input with search capability</p>
              <span class="component-card-action">Open →</span>
            </a>
          </div>
        </div>

        <div class="category-section">
          <h2>Selection Controls</h2>
          <div class="components-grid">
            <a href="?path=/docs/selection-controls-selection-controls-overview--overview" class="component-card">
              <h3>Selection Controls Overview</h3>
              <p>Complete selection controls reference</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/selection-controls-checkbox--interactive" class="component-card">
              <h3>Checkbox</h3>
              <p>Standard checkbox control with label support</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/selection-controls-checkbox-with-label--interactive" class="component-card">
              <h3>Checkbox With Label</h3>
              <p>Checkbox with integrated label component</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/selection-controls-radio--interactive" class="component-card">
              <h3>Radio</h3>
              <p>Radio button control for mutually exclusive selections</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/selection-controls-radio-with-label--interactive" class="component-card">
              <h3>Radio With Label</h3>
              <p>Radio button with integrated label component</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/selection-controls-step-sort--default" class="component-card">
              <h3>Step Sort</h3>
              <p>Control for ordering and sorting with step indicators</p>
              <span class="component-card-action">Open →</span>
            </a>
          </div>
        </div>

        <div class="category-section">
          <h2>Navigation</h2>
          <div class="components-grid">
            <a href="?path=/docs/navigation-navigation-overview--overview" class="component-card">
              <h3>Navigation Overview</h3>
              <p>Complete navigation components reference</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/navigation-navigation-layout--defaultlayout" class="component-card">
              <h3>Navigation Layout</h3>
              <p>Complete navigation layout component</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/navigation-sidebar--collapsed" class="component-card">
              <h3>Sidebar</h3>
              <p>Sidebar navigation component</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/navigation-tab-item--textdefault" class="component-card">
              <h3>Tab Item</h3>
              <p>Individual tab item component</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/navigation-tabs--underlinetwoitems" class="component-card">
              <h3>Tabs</h3>
              <p>Tab navigation with multiple display styles</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/navigation-topbar--default" class="component-card">
              <h3>Topbar</h3>
              <p>Top navigation bar component</p>
              <span class="component-card-action">Open →</span>
            </a>
          </div>
        </div>

        <div class="category-section">
          <h2>Feedback</h2>
          <div class="components-grid">
            <a href="?path=/docs/feedback-feedback-overview--overview" class="component-card">
              <h3>Feedback Overview</h3>
              <p>Complete feedback components reference</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/feedback-badge--default" class="component-card">
              <h3>Badge</h3>
              <p>Status badges with various types, variants, and shapes</p>
              <span class="component-card-action">Open →</span>
            </a>
          </div>
        </div>

        <div class="category-section">
          <h2>Dropzone</h2>
          <div class="components-grid">
            <a href="?path=/docs/dropzone-dropzone-overview--overview" class="component-card">
              <h3>Dropzone Overview</h3>
              <p>Complete dropzone components reference</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/dropzone-drop-area--default" class="component-card">
              <h3>Drop Area</h3>
              <p>Drag-and-drop area for file uploads</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/dropzone-upload-states--error" class="component-card">
              <h3>Upload States</h3>
              <p>Upload progress and state indicators</p>
              <span class="component-card-action">Open →</span>
            </a>
          </div>
        </div>

        <div class="category-section">
          <h2>Filters</h2>
          <div class="components-grid">
            <a href="?path=/docs/filters-filters-overview--overview" class="component-card">
              <h3>Filters Overview</h3>
              <p>Complete filters components reference</p>
              <span class="component-card-action">Open →</span>
            </a>
            <a href="?path=/story/filters-filter--closed" class="component-card">
              <h3>Filter</h3>
              <p>Comprehensive filter control with multiple subfilters</p>
              <span class="component-card-action">Open →</span>
            </a>
          </div>
        </div>
      </div>
    `,
  }),
};
