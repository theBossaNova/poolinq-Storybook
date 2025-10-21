import { Story } from "@storybook/vue3";
import Filters from "./Filters.vue";

export default {
  title: "Filters",
  component: Filters,
};

const Template: Story = () => ({
  components: { Filters },
  template: "<filters />",
});

export const AllVariants = Template.bind({});
AllVariants.storyName = "All Variants";
