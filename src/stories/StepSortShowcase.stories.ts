import { Story } from "@storybook/vue3";
import StepSortShowcase from "./StepSortShowcase.vue";

export default {
  title: "Selection Controls/Step Sort Showcase",
  component: StepSortShowcase,
};

const Template: Story = () => ({
  components: { StepSortShowcase },
  template: "<step-sort-showcase />",
});

export const AllVariants = Template.bind({});
AllVariants.storyName = "All Variants";
