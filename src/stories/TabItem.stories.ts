import type { Meta, StoryObj } from "@storybook/vue3";
import TabItem from "../components/Tabs/TabItem.vue";

type TabItemMeta = Meta<typeof TabItem>;

const meta: TabItemMeta = {
  title: "Components/Tabs/Tab Item",
  component: TabItem,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "icon"],
      description: "The type of tab item",
    },
    state: {
      control: "select",
      options: ["default", "hover", "active"],
      description: "The state of the tab item",
    },
    style: {
      control: "select",
      options: ["underline", "filled"],
      description: "The visual style of the tab item",
    },
    label: {
      control: "text",
      description: "The label text (for text type)",
    },
    icon: {
      control: "boolean",
      description: "Whether to show icon (for icon type)",
    },
  },
  args: {
    type: "text",
    state: "default",
    style: "underline",
    label: "Item",
    icon: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextDefault: Story = {
  args: {
    type: "text",
    state: "default",
    style: "underline",
  },
};

export const TextHover: Story = {
  args: {
    type: "text",
    state: "hover",
    style: "underline",
  },
};

export const TextActive: Story = {
  args: {
    type: "text",
    state: "active",
    style: "underline",
  },
};

export const TextFilledDefault: Story = {
  args: {
    type: "text",
    state: "default",
    style: "filled",
  },
};

export const TextFilledActive: Story = {
  args: {
    type: "text",
    state: "active",
    style: "filled",
  },
};

export const IconDefault: Story = {
  args: {
    type: "icon",
    state: "default",
    style: "underline",
  },
};

export const IconHover: Story = {
  args: {
    type: "icon",
    state: "hover",
    style: "underline",
  },
};

export const IconActive: Story = {
  args: {
    type: "icon",
    state: "active",
    style: "underline",
  },
};

export const IconFilledDefault: Story = {
  args: {
    type: "icon",
    state: "default",
    style: "filled",
  },
};

export const IconFilledActive: Story = {
  args: {
    type: "icon",
    state: "active",
    style: "filled",
  },
};

export const AllTextStates: Story = {
  render: (args) => ({
    components: { TabItem },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 20px; background: #1a1a1a;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <TabItem type="text" state="default" style="underline" label="Default" />
          <TabItem type="text" state="hover" style="underline" label="Hover" />
          <TabItem type="text" state="active" style="underline" label="Active" />
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <TabItem type="text" state="default" style="filled" label="Default" />
          <TabItem type="text" state="active" style="filled" label="Active" />
        </div>
      </div>
    `,
  }),
};

export const AllIconStates: Story = {
  render: (args) => ({
    components: { TabItem },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 20px; background: #1a1a1a;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <TabItem type="icon" state="default" style="underline" />
          <TabItem type="icon" state="hover" style="underline" />
          <TabItem type="icon" state="active" style="underline" />
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <TabItem type="icon" state="default" style="filled" />
          <TabItem type="icon" state="active" style="filled" />
        </div>
      </div>
    `,
  }),
};
