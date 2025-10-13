import { Story } from "@storybook/vue3";
import Checkbox from "./Checkbox.vue";
import CheckboxShowcase from "./CheckboxShowcase.vue";

export default {
  title: "Checkbox",
  component: Checkbox,
};

const Template: Story = () => ({
  components: { CheckboxShowcase },
  template: "<checkbox-showcase />",
});

export const AllVariants = Template.bind({});
AllVariants.storyName = "All Variants";
