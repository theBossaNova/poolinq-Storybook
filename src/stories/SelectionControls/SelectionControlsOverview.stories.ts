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
        <style>
          .category-overview {
            background-color: #0F0F0F;
            color: #E8E8E8;
            font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            padding: 48px 24px;
            min-height: 100vh;
          }

          .category-overview h1 {
            font-size: 32px;
            font-weight: 700;
            margin: 0 0 16px 0;
            color: #F5F5F5;
          }

          .category-overview > p {
            font-size: 16px;
            font-weight: 400;
            color: #9B9B9B;
            margin: 0 0 48px 0;
            max-width: 600px;
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

          .component-preview-container {
            width: 100%;
            height: 140px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #161616;
            border-radius: 8px;
            margin-bottom: 16px;
            overflow: hidden;
            padding: 12px;
            box-sizing: border-box;
          }

          .component-preview-container > * {
            max-width: 100%;
            max-height: 100%;
          }

          .component-card h3 {
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
        </style>

        <h1>Selection Controls Components</h1>
        <p>Components for user selection including checkboxes, radio buttons, and step sorting controls.</p>

        <div class="components-grid">
          <a href="?path=/story/selection-controls-checkbox--default" class="component-card">
            <div class="component-preview-container">
              <div style="font-size: 14px; color: #9B9B9B; text-align: center;">Checkbox Preview</div>
            </div>
            <h3>Checkbox</h3>
            <p>Standard checkbox control with label support</p>
            <span class="component-card-action">Open →</span>
          </a>

          <a href="?path=/story/selection-controls-radio--default" class="component-card">
            <div class="component-preview-container">
              <div style="font-size: 14px; color: #9B9B9B; text-align: center;">Radio Preview</div>
            </div>
            <h3>Radio</h3>
            <p>Radio button control for mutually exclusive selections</p>
            <span class="component-card-action">Open →</span>
          </a>

          <a href="?path=/story/selection-controls-step-sort--default" class="component-card">
            <div class="component-preview-container">
              <div style="font-size: 14px; color: #9B9B9B; text-align: center;">Step Sort Preview</div>
            </div>
            <h3>Step Sort</h3>
            <p>Control for ordering and sorting with step indicators</p>
            <span class="component-card-action">Open →</span>
          </a>
        </div>
      </div>
    `,
  }),
};
