import { Story } from "@storybook/vue3";
import Inputs from "./Inputs.vue";

export default {
  title: "Inputs",
  component: Inputs,
};

const Template: Story = () => ({
  components: { Inputs },
  template: "<inputs />",
});

export const AllVariants = Template.bind({});
AllVariants.storyName = "All Variants";
