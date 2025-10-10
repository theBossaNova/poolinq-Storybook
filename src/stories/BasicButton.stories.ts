import { Story } from "@storybook/vue3";
import BasicButton from "./BasicButton.vue";

export default {
  title: "Example/Basic Button",
  component: BasicButton,
  argTypes: {
    onClick: {},
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    primary: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

const Template: Story = (args) => ({
  components: { BasicButton },
  setup() {
    return { args };
  },
  template: '<basic-button v-bind="args" />',
});

// Primary Buttons
export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  primary: true,
  label: "Button",
  size: "large",
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  primary: true,
  label: "Button",
  size: "medium",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  primary: true,
  label: "Button",
  size: "small",
};

// Primary Disabled
export const PrimaryLargeDisabled = Template.bind({});
PrimaryLargeDisabled.args = {
  primary: true,
  label: "Button",
  size: "large",
  disabled: true,
};

export const PrimaryMediumDisabled = Template.bind({});
PrimaryMediumDisabled.args = {
  primary: true,
  label: "Button",
  size: "medium",
  disabled: true,
};

export const PrimarySmallDisabled = Template.bind({});
PrimarySmallDisabled.args = {
  primary: true,
  label: "Button",
  size: "small",
  disabled: true,
};

// Secondary Buttons
export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  primary: false,
  label: "Button",
  size: "large",
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  primary: false,
  label: "Button",
  size: "medium",
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  primary: false,
  label: "Button",
  size: "small",
};

// Secondary Disabled
export const SecondaryLargeDisabled = Template.bind({});
SecondaryLargeDisabled.args = {
  primary: false,
  label: "Button",
  size: "large",
  disabled: true,
};

export const SecondaryMediumDisabled = Template.bind({});
SecondaryMediumDisabled.args = {
  primary: false,
  label: "Button",
  size: "medium",
  disabled: true,
};

export const SecondarySmallDisabled = Template.bind({});
SecondarySmallDisabled.args = {
  primary: false,
  label: "Button",
  size: "small",
  disabled: true,
};
