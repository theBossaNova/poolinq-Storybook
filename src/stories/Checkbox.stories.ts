import { Story } from "@storybook/vue3";
import Checkbox from "./Checkbox.vue";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
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
  },
};

const Template: Story = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: '<checkbox v-bind="args" />',
});

// Checkbox - Default State
export const CheckboxChecked = Template.bind({});
CheckboxChecked.args = {
  type: "checkbox",
  checked: true,
  disabled: false,
};

export const CheckboxUnchecked = Template.bind({});
CheckboxUnchecked.args = {
  type: "checkbox",
  checked: false,
  disabled: false,
};

// Checkbox - Disabled State
export const CheckboxCheckedDisabled = Template.bind({});
CheckboxCheckedDisabled.args = {
  type: "checkbox",
  checked: true,
  disabled: true,
};

export const CheckboxUncheckedDisabled = Template.bind({});
CheckboxUncheckedDisabled.args = {
  type: "checkbox",
  checked: false,
  disabled: true,
};

// Radio - Default State
export const RadioChecked = Template.bind({});
RadioChecked.args = {
  type: "radio",
  checked: true,
  disabled: false,
};

export const RadioUnchecked = Template.bind({});
RadioUnchecked.args = {
  type: "radio",
  checked: false,
  disabled: false,
};

// Radio - Disabled State
export const RadioCheckedDisabled = Template.bind({});
RadioCheckedDisabled.args = {
  type: "radio",
  checked: true,
  disabled: true,
};

export const RadioUncheckedDisabled = Template.bind({});
RadioUncheckedDisabled.args = {
  type: "radio",
  checked: false,
  disabled: true,
};
