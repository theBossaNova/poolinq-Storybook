import { Story } from "@storybook/vue3";
import Sidebar from "./Sidebar.vue";

export default {
  title: "Navigation/Sidebar",
  component: Sidebar,
  argTypes: {
    collapsed: {
      control: { type: "boolean" },
    },
  },
};

const Template: Story = (args) => ({
  components: { Sidebar },
  setup() {
    return { args };
  },
  template: '<sidebar v-bind="args" />',
});

export const Expanded = Template.bind({});
Expanded.args = {
  collapsed: false,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  collapsed: true,
};
