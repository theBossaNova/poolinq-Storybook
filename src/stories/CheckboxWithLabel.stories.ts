import { Story } from "@storybook/vue3";
import CheckboxWithLabel from "./CheckboxWithLabel.vue";

export default {
  title: "Checkbox/With Label",
  component: CheckboxWithLabel,
  argTypes: {
    onChange: {},
    type: {
      control: { type: "select" },
      options: ["checkbox", "radio"],
    },
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
  components: { CheckboxWithLabel },
  setup() {
    return { args };
  },
  template: '<checkbox-with-label v-bind="args" />',
});

// Default States
export const Default = Template.bind({});
Default.args = {
  type: "checkbox",
  checked: false,
  disabled: false,
  label: "Label",
};

export const Checked = Template.bind({});
Checked.args = {
  type: "checkbox",
  checked: true,
  disabled: false,
  label: "Label",
};

// Disabled States
export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  type: "checkbox",
  checked: false,
  disabled: true,
  label: "Label",
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  type: "checkbox",
  checked: true,
  disabled: true,
  label: "Label",
};

// Custom Label
export const CustomLabel = Template.bind({});
CustomLabel.args = {
  type: "checkbox",
  checked: false,
  disabled: false,
  label: "I agree to the terms and conditions",
};

// Radio with Label
export const RadioWithLabel = Template.bind({});
RadioWithLabel.args = {
  type: "radio",
  checked: true,
  disabled: false,
  label: "Radio option",
};
