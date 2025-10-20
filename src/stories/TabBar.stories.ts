import type { Meta, StoryObj } from "@storybook/vue3";
import TabBar from "../components/Tabs/TabBar.vue";

type TabBarMeta = Meta<typeof TabBar>;

const meta: TabBarMeta = {
  title: "Components/Tabs/Tab Bar",
  component: TabBar,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "icon"],
      description: "The type of tabs",
    },
    style: {
      control: "select",
      options: ["underline", "filled"],
      description: "The visual style of the tab bar",
    },
    itemCount: {
      control: "number",
      min: 1,
      max: 6,
      step: 1,
      description: "Number of tab items to display",
    },
    items: {
      control: "object",
      description: "Array of tab items (overrides itemCount if provided)",
    },
    defaultActiveIndex: {
      control: "number",
      description: "The index of the initially active tab",
    },
  },
  args: {
    type: "text",
    style: "underline",
    itemCount: 3,
    defaultActiveIndex: 0,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const UnderlineTwoItems: Story = {
  args: {
    type: "text",
    style: "underline",
    itemCount: 2,
    defaultActiveIndex: 0,
  },
};

export const UnderlineThreeItems: Story = {
  args: {
    type: "text",
    style: "underline",
    itemCount: 3,
    defaultActiveIndex: 1,
  },
};

export const UnderlineFourItems: Story = {
  args: {
    type: "text",
    style: "underline",
    itemCount: 4,
    defaultActiveIndex: 2,
  },
};

export const FilledTwoItems: Story = {
  args: {
    type: "text",
    style: "filled",
    itemCount: 2,
    defaultActiveIndex: 0,
  },
};

export const FilledThreeItems: Story = {
  args: {
    type: "text",
    style: "filled",
    itemCount: 3,
    defaultActiveIndex: 1,
  },
};

export const FilledFourItems: Story = {
  args: {
    type: "text",
    style: "filled",
    itemCount: 4,
    defaultActiveIndex: 3,
  },
};

export const IconUnderline: Story = {
  args: {
    type: "icon",
    style: "underline",
    itemCount: 2,
    defaultActiveIndex: 0,
  },
};

export const IconFilled: Story = {
  args: {
    type: "icon",
    style: "filled",
    itemCount: 2,
    defaultActiveIndex: 1,
  },
};

export const Interactive: Story = {
  args: {
    type: "text",
    style: "underline",
    itemCount: 3,
    defaultActiveIndex: 0,
  },
};

export const WithItemCountControl: Story = {
  args: {
    type: "text",
    style: "underline",
    itemCount: 3,
    defaultActiveIndex: 0,
  },
};

export const AllStyles: Story = {
  parameters: {
    layout: "padded",
  },
  args: {
    type: "text",
    style: "underline",
    itemCount: 3,
    defaultActiveIndex: 0,
  },
};
