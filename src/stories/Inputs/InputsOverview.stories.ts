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

          .variants-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 24px;
          }

          .variant-card {
            background-color: #1A1A1A;
            border: 1px solid #2A2A2A;
            border-radius: 12px;
            overflow: hidden;
            height: 180px;
            transition: all 0.2s ease;
          }

          .variant-card:hover {
            border-color: #00C47A;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          }
        </style>

        <h1>Inputs Components</h1>
        <p>A collection of input components for user interaction including text inputs, number inputs, and selection fields.</p>

        <div class="components-grid">
          <a href="?path=/story/inputs-number-count--default" class="component-card">
            <div class="component-preview-container">
              <iframe src="?path=/story/inputs-number-count--default&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
            </div>
            <h3>Number Count</h3>
            <p>Numeric counter input for incrementing and decrementing values</p>
            <span class="component-card-action">Open →</span>
          </a>

          <a href="?path=/story/inputs-number-select--default" class="component-card">
            <div class="component-preview-container">
              <iframe src="?path=/story/inputs-number-select--default&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
            </div>
            <h3>Number Select</h3>
            <p>Dropdown select for numeric values</p>
            <span class="component-card-action">Open →</span>
          </a>

          <a href="?path=/story/inputs-select--default" class="component-card">
            <div class="component-preview-container">
              <iframe src="?path=/story/inputs-select--default&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
            </div>
            <h3>Select</h3>
            <p>Standard dropdown select input</p>
            <span class="component-card-action">Open →</span>
          </a>

          <a href="?path=/story/inputs-text-input--default" class="component-card">
            <div class="component-preview-container">
              <iframe src="?path=/story/inputs-text-input--default&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
            </div>
            <h3>Text Input</h3>
            <p>Basic text input field with various states</p>
            <span class="component-card-action">Open →</span>
          </a>

          <a href="?path=/story/inputs-text-select--default" class="component-card">
            <div class="component-preview-container">
              <iframe src="?path=/story/inputs-text-select--default&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
            </div>
            <h3>Text Select</h3>
            <p>Text-based select input with search capability</p>
            <span class="component-card-action">Open →</span>
          </a>
        </div>

        <div style="margin-top: 64px;">
          <h2>Text Input Variants</h2>
          <p style="color: #9B9B9B; margin-bottom: 32px;">Explore all Text Input component variants and states</p>
          <div class="variants-grid">
            <div class="variant-card">
              <iframe src="?path=/story/inputs-text-input--default&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
              <p style="font-size: 13px; color: #9B9B9B; margin-top: 12px;">Default</p>
            </div>
            <div class="variant-card">
              <iframe src="?path=/story/inputs-text-input--filled&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
              <p style="font-size: 13px; color: #9B9B9B; margin-top: 12px;">Filled</p>
            </div>
            <div class="variant-card">
              <iframe src="?path=/story/inputs-text-input--error&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
              <p style="font-size: 13px; color: #9B9B9B; margin-top: 12px;">Error</p>
            </div>
            <div class="variant-card">
              <iframe src="?path=/story/inputs-text-input--warning&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
              <p style="font-size: 13px; color: #9B9B9B; margin-top: 12px;">Warning</p>
            </div>
            <div class="variant-card">
              <iframe src="?path=/story/inputs-text-input--disabled&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
              <p style="font-size: 13px; color: #9B9B9B; margin-top: 12px;">Disabled</p>
            </div>
            <div class="variant-card">
              <iframe src="?path=/story/inputs-text-input--with-search-icon&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
              <p style="font-size: 13px; color: #9B9B9B; margin-top: 12px;">With Search Icon</p>
            </div>
          </div>
        </div>

        <div style="margin-top: 64px;">
          <h2>Select Variants</h2>
          <p style="color: #9B9B9B; margin-bottom: 32px;">Explore all Select component variants and states</p>
          <div class="variants-grid">
            <div class="variant-card">
              <iframe src="?path=/story/inputs-select--closed&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
              <p style="font-size: 13px; color: #9B9B9B; margin-top: 12px;">Closed</p>
            </div>
            <div class="variant-card">
              <iframe src="?path=/story/inputs-select--selected&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
              <p style="font-size: 13px; color: #9B9B9B; margin-top: 12px;">Selected</p>
            </div>
            <div class="variant-card">
              <iframe src="?path=/story/inputs-select--opened&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
              <p style="font-size: 13px; color: #9B9B9B; margin-top: 12px;">Opened</p>
            </div>
            <div class="variant-card">
              <iframe src="?path=/story/inputs-select--error&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
              <p style="font-size: 13px; color: #9B9B9B; margin-top: 12px;">Error</p>
            </div>
            <div class="variant-card">
              <iframe src="?path=/story/inputs-select--warning&viewMode=story" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>
              <p style="font-size: 13px; color: #9B9B9B; margin-top: 12px;">Warning</p>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
