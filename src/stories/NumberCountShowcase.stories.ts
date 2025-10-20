import { Story } from "@storybook/vue3";
import NumberCountShowcase from "./NumberCountShowcase.vue";

export default {
  title: "Inputs/Number Count Showcase",
  component: NumberCountShowcase,
};

const Template: Story = () => ({
  components: { NumberCountShowcase },
  template: "<number-count-showcase />",
});

export const AllVariants = Template.bind({});
AllVariants.storyName = "All Variants";
