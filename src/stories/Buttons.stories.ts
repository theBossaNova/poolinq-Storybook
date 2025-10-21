import { Story } from "@storybook/vue3";
import Buttons from "./Buttons.vue";

export default {
  title: "Example/Buttons",
  component: Buttons,
};

const Template: Story = () => ({
  components: { Buttons },
  template: "<buttons />",
});

export const AllVariants = Template.bind({});
AllVariants.storyName = "All Variants";
