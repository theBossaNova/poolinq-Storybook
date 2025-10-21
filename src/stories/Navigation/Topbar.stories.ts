import { Story } from "@storybook/vue3";
import Topbar from "../Topbar.vue";

export default {
  title: "Navigation/Topbar",
  component: Topbar,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    showMenuButton: {
      control: { type: "boolean" },
    },
  },
};

const Template: Story = (args) => ({
  components: { Topbar },
  setup() {
    return { args };
  },
  template: '<topbar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: "Inventur",
  showMenuButton: false,
};

export const WithMenuButton = Template.bind({});
WithMenuButton.args = {
  title: "Inventur",
  showMenuButton: true,
};
