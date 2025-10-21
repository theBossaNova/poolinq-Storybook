import type { Meta, StoryObj } from "@storybook/vue3";
import Badge from "../../components/Badges/Badge.vue";

type BadgeMeta = Meta<typeof Badge>;

const meta: BadgeMeta = {
  title: "Feedback/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "warning", "error", "neutral"],
      description: "The semantic type of the badge",
    },
    variant: {
      control: "select",
      options: ["outline", "subtle", "filled"],
      description: "The visual variant of the badge",
    },
    shape: {
      control: "select",
      options: ["sharp", "rounded"],
      description: "The shape of the badge corners",
    },
    text: {
      control: "text",
      description: "The text content of the badge",
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the check icon",
    },
    showDelete: {
      control: "boolean",
      description: "Whether to show the delete button",
    },
  },
  args: {
    type: "success",
    variant: "outline",
    shape: "rounded",
    text: "Placeholder",
    showIcon: true,
    showDelete: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllErrorVariants: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 20px; background: #1a1a1a;">
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <Badge type="error" variant="outline" shape="sharp" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
          <Badge type="error" variant="outline" shape="rounded" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <Badge type="error" variant="subtle" shape="sharp" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
          <Badge type="error" variant="subtle" shape="rounded" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <Badge type="error" variant="filled" shape="sharp" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
          <Badge type="error" variant="filled" shape="rounded" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
        </div>
      </div>
    `,
  }),
};

export const AllNeutralVariants: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 20px; background: #1a1a1a;">
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <Badge type="neutral" variant="outline" shape="sharp" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
          <Badge type="neutral" variant="outline" shape="rounded" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <Badge type="neutral" variant="subtle" shape="sharp" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
          <Badge type="neutral" variant="subtle" shape="rounded" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <Badge type="neutral" variant="filled" shape="sharp" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
          <Badge type="neutral" variant="filled" shape="rounded" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
        </div>
      </div>
    `,
  }),
};

export const AllSuccessVariants: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 20px; background: #1a1a1a;">
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <Badge type="success" variant="outline" shape="sharp" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
          <Badge type="success" variant="outline" shape="rounded" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <Badge type="success" variant="subtle" shape="sharp" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
          <Badge type="success" variant="subtle" shape="rounded" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <Badge type="success" variant="filled" shape="sharp" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
          <Badge type="success" variant="filled" shape="rounded" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
        </div>
      </div>
    `,
  }),
};

export const AllWarningVariants: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 20px; background: #1a1a1a;">
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <Badge type="warning" variant="outline" shape="sharp" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
          <Badge type="warning" variant="outline" shape="rounded" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <Badge type="warning" variant="subtle" shape="sharp" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
          <Badge type="warning" variant="subtle" shape="rounded" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <Badge type="warning" variant="filled" shape="sharp" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
          <Badge type="warning" variant="filled" shape="rounded" :text="args.text" :showIcon="args.showIcon" :showDelete="args.showDelete" />
        </div>
      </div>
    `,
  }),
};

export const CustomText: Story = {
  args: {
    type: "success",
    variant: "filled",
    shape: "rounded",
    text: "Custom Badge Text",
  },
};

export const Default: Story = {
  args: {
    type: "success",
    variant: "outline",
    shape: "rounded",
  },
};

export const ErrorFilledRounded: Story = {
  args: {
    type: "error",
    variant: "filled",
    shape: "rounded",
  },
};

export const ErrorFilledSharp: Story = {
  args: {
    type: "error",
    variant: "filled",
    shape: "sharp",
  },
};

export const ErrorOutlineRounded: Story = {
  args: {
    type: "error",
    variant: "outline",
    shape: "rounded",
  },
};

export const ErrorOutlineSharp: Story = {
  args: {
    type: "error",
    variant: "outline",
    shape: "sharp",
  },
};

export const ErrorSubtleRounded: Story = {
  args: {
    type: "error",
    variant: "subtle",
    shape: "rounded",
  },
};

export const ErrorSubtleSharp: Story = {
  args: {
    type: "error",
    variant: "subtle",
    shape: "sharp",
  },
};

export const Interactive: Story = {
  render: (args) => ({
    components: { Badge },
    setup() {
      const handleDelete = () => {
        alert("Badge deleted!");
      };
      return { args, handleDelete };
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px; padding: 20px; background: #1a1a1a;">
        <Badge
          v-bind="args"
          @delete="handleDelete"
        />
      </div>
    `,
  }),
};

export const NeutralFilledRounded: Story = {
  args: {
    type: "neutral",
    variant: "filled",
    shape: "rounded",
  },
};

export const NeutralFilledSharp: Story = {
  args: {
    type: "neutral",
    variant: "filled",
    shape: "sharp",
  },
};

export const NeutralOutlineRounded: Story = {
  args: {
    type: "neutral",
    variant: "outline",
    shape: "rounded",
  },
};

export const NeutralOutlineSharp: Story = {
  args: {
    type: "neutral",
    variant: "outline",
    shape: "sharp",
  },
};

export const NeutralSubtleRounded: Story = {
  args: {
    type: "neutral",
    variant: "subtle",
    shape: "rounded",
  },
};

export const NeutralSubtleSharp: Story = {
  args: {
    type: "neutral",
    variant: "subtle",
    shape: "sharp",
  },
};

export const SuccessFilledRounded: Story = {
  args: {
    type: "success",
    variant: "filled",
    shape: "rounded",
  },
};

export const SuccessFilledSharp: Story = {
  args: {
    type: "success",
    variant: "filled",
    shape: "sharp",
  },
};

export const SuccessOutlineRounded: Story = {
  args: {
    type: "success",
    variant: "outline",
    shape: "rounded",
  },
};

export const SuccessOutlineSharp: Story = {
  args: {
    type: "success",
    variant: "outline",
    shape: "sharp",
  },
};

export const SuccessSubtleRounded: Story = {
  args: {
    type: "success",
    variant: "subtle",
    shape: "rounded",
  },
};

export const SuccessSubtleSharp: Story = {
  args: {
    type: "success",
    variant: "subtle",
    shape: "sharp",
  },
};

export const WarningFilledRounded: Story = {
  args: {
    type: "warning",
    variant: "filled",
    shape: "rounded",
  },
};

export const WarningFilledSharp: Story = {
  args: {
    type: "warning",
    variant: "filled",
    shape: "sharp",
  },
};

export const WarningOutlineRounded: Story = {
  args: {
    type: "warning",
    variant: "outline",
    shape: "rounded",
  },
};

export const WarningOutlineSharp: Story = {
  args: {
    type: "warning",
    variant: "outline",
    shape: "sharp",
  },
};

export const WarningSubtleRounded: Story = {
  args: {
    type: "warning",
    variant: "subtle",
    shape: "rounded",
  },
};

export const WarningSubtleSharp: Story = {
  args: {
    type: "warning",
    variant: "subtle",
    shape: "sharp",
  },
};

export const WithoutDelete: Story = {
  args: {
    type: "success",
    variant: "filled",
    shape: "rounded",
    showDelete: false,
  },
};

export const WithoutIcon: Story = {
  args: {
    type: "success",
    variant: "filled",
    shape: "rounded",
    showIcon: false,
  },
};
