import { Story } from "@storybook/vue3";
import RadioWithLabel from "./RadioWithLabel.vue";

export default {
  title: "Radio/With Label",
  component: RadioWithLabel,
  argTypes: {
    onChange: {},
    checked: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
  },
};

const Template: Story = (args) => ({
  components: { RadioWithLabel },
  setup() {
    return { args };
  },
  template: '<radio-with-label v-bind="args" />',
});

// Default States
export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
  label: "Label",
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
  label: "Label",
};

// Disabled States
export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  checked: false,
  disabled: true,
  label: "Label",
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  checked: true,
  disabled: true,
  label: "Label",
};

// Custom Label
export const CustomLabel = Template.bind({});
CustomLabel.args = {
  checked: false,
  disabled: false,
  label: "Radio option",
};
