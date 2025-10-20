import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta = {
  title: "Feedback/Feedback Overview",
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
        <h1>Feedback Components</h1>
        <p class="intro-text">Components for displaying feedback, status, and alerts including badges and indicators.</p>
        
        <div class="components-grid">
          <div class="component-card">
            <h3>Badge</h3>
            <p>Status badges with various types, variants, and shapes</p>
            <a href="?path=/story/feedback-badge--default" class="btn-link">View Component →</a>
          </div>
        </div>
      </div>
    `,
  }),
};
