import { Story } from "@storybook/vue3";
import Badges from "./Badges.vue";

export default {
  title: "Feedback",
  component: Badges,
};

const Template: Story = () => ({
  components: { Badges },
  template: "<badges />",
});

export const AllVariants = Template.bind({});
AllVariants.storyName = "All Variants";
