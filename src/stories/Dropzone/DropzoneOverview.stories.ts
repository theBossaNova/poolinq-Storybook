import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta = {
  title: "Dropzone/Dropzone Overview",
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
        <h1>Dropzone Components</h1>
        <p class="intro-text">File upload and drag-and-drop components for handling file submissions.</p>
        
        <div class="components-grid">
          <div class="component-card">
            <h3>Drop Area</h3>
            <p>Drag-and-drop area for file uploads</p>
            <a href="?path=/story/dropzone-drop-area--default" class="btn-link">View Component →</a>
          </div>

          <div class="component-card">
            <h3>Upload States</h3>
            <p>Upload progress and state indicators</p>
            <a href="?path=/story/dropzone-upload-states--default" class="btn-link">View Component →</a>
          </div>
        </div>
      </div>
    `,
  }),
};
