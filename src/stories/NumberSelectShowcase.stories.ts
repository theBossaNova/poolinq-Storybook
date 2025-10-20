import { Story } from "@storybook/vue3";
import NumberSelectShowcase from "./NumberSelectShowcase.vue";

export default {
  title: "Inputs/Number Select Showcase",
  component: NumberSelectShowcase,
};

const Template: Story = () => ({
  components: { NumberSelectShowcase },
  template: "<number-select-showcase />",
});

export const AllVariants = Template.bind({});
AllVariants.storyName = "All Variants";
