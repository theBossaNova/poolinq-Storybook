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
    items: {
      control: "object",
      description: "Array of tab items",
    },
    defaultActiveIndex: {
      control: "number",
      description: "The index of the initially active tab",
    },
  },
  args: {
    type: "text",
    style: "underline",
    items: [{ label: "Item" }, { label: "Item" }, { label: "Item" }],
    defaultActiveIndex: 0,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const UnderlineTwoItems: Story = {
  args: {
    type: "text",
    style: "underline",
    items: [{ label: "Item" }, { label: "Item" }],
    defaultActiveIndex: 0,
  },
};

export const UnderlineThreeItems: Story = {
  args: {
    type: "text",
    style: "underline",
    items: [{ label: "Item" }, { label: "Item" }, { label: "Item" }],
    defaultActiveIndex: 1,
  },
};

export const UnderlineFourItems: Story = {
  args: {
    type: "text",
    style: "underline",
    items: [
      { label: "Item" },
      { label: "Item" },
      { label: "Item" },
      { label: "Item" },
    ],
    defaultActiveIndex: 2,
  },
};

export const FilledTwoItems: Story = {
  args: {
    type: "text",
    style: "filled",
    items: [{ label: "Item" }, { label: "Item" }],
    defaultActiveIndex: 0,
  },
};

export const FilledThreeItems: Story = {
  args: {
    type: "text",
    style: "filled",
    items: [{ label: "Item" }, { label: "Item" }, { label: "Item" }],
    defaultActiveIndex: 1,
  },
};

export const FilledFourItems: Story = {
  args: {
    type: "text",
    style: "filled",
    items: [
      { label: "Item" },
      { label: "Item" },
      { label: "Item" },
      { label: "Item" },
    ],
    defaultActiveIndex: 3,
  },
};

export const IconUnderline: Story = {
  args: {
    type: "icon",
    style: "underline",
    items: [{ icon: true }, { icon: true }],
    defaultActiveIndex: 0,
  },
};

export const IconFilled: Story = {
  args: {
    type: "icon",
    style: "filled",
    items: [{ icon: true }, { icon: true }],
    defaultActiveIndex: 1,
  },
};

export const Interactive: Story = {
  render: (args) => ({
    components: { TabBar },
    setup() {
      const handleChange = (index: number) => {
        console.log("Tab changed to:", index);
      };
      return { args, handleChange };
    },
    template: `
      <div style="padding: 20px; background: #1a1a1a;">
        <TabBar v-bind="args" @change="handleChange" />
      </div>
    `,
  }),
  args: {
    type: "text",
    style: "underline",
    items: [
      { label: "Dashboard" },
      { label: "Analytics" },
      { label: "Reports" },
    ],
    defaultActiveIndex: 0,
  },
};

export const AllStyles: Story = {
  render: (args) => ({
    components: { TabBar },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 20px; background: #1a1a1a;">
        <div style="max-width: 600px;">
          <h3 style="color: #fff; margin-bottom: 12px; font-size: 14px;">Underline Style - 2 Items</h3>
          <TabBar type="text" style="underline" :items="[{label: 'Item'}, {label: 'Item'}]" :defaultActiveIndex="0" />
        </div>
        <div style="max-width: 600px;">
          <h3 style="color: #fff; margin-bottom: 12px; font-size: 14px;">Underline Style - 3 Items</h3>
          <TabBar type="text" style="underline" :items="[{label: 'Item'}, {label: 'Item'}, {label: 'Item'}]" :defaultActiveIndex="1" />
        </div>
        <div style="max-width: 600px;">
          <h3 style="color: #fff; margin-bottom: 12px; font-size: 14px;">Underline Style - 4 Items</h3>
          <TabBar type="text" style="underline" :items="[{label: 'Item'}, {label: 'Item'}, {label: 'Item'}, {label: 'Item'}]" :defaultActiveIndex="2" />
        </div>
        <div style="max-width: 600px;">
          <h3 style="color: #fff; margin-bottom: 12px; font-size: 14px;">Filled Style - 2 Items</h3>
          <TabBar type="text" style="filled" :items="[{label: 'Item'}, {label: 'Item'}]" :defaultActiveIndex="0" />
        </div>
        <div style="max-width: 600px;">
          <h3 style="color: #fff; margin-bottom: 12px; font-size: 14px;">Filled Style - 3 Items</h3>
          <TabBar type="text" style="filled" :items="[{label: 'Item'}, {label: 'Item'}, {label: 'Item'}]" :defaultActiveIndex="1" />
        </div>
        <div style="max-width: 600px;">
          <h3 style="color: #fff; margin-bottom: 12px; font-size: 14px;">Filled Style - 4 Items</h3>
          <TabBar type="text" style="filled" :items="[{label: 'Item'}, {label: 'Item'}, {label: 'Item'}, {label: 'Item'}]" :defaultActiveIndex="3" />
        </div>
        <div style="max-width: 200px;">
          <h3 style="color: #fff; margin-bottom: 12px; font-size: 14px;">Icon Underline</h3>
          <TabBar type="icon" style="underline" :items="[{icon: true}, {icon: true}]" :defaultActiveIndex="0" />
        </div>
        <div style="max-width: 200px;">
          <h3 style="color: #fff; margin-bottom: 12px; font-size: 14px;">Icon Filled</h3>
          <TabBar type="icon" style="filled" :items="[{icon: true}, {icon: true}]" :defaultActiveIndex="1" />
        </div>
      </div>
    `,
  }),
};
