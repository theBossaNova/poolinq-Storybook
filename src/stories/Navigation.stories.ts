import { Story } from "@storybook/vue3";
import Navigation from "./Navigation.vue";

export default {
  title: "Navigation",
  component: Navigation,
};

const Template: Story = () => ({
  components: { Navigation },
  template: "<navigation />",
});

export const AllVariants = Template.bind({});
AllVariants.storyName = "All Variants";
