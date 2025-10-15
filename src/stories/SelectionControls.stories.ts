import { Story } from "@storybook/vue3";
import SelectionControls from "./SelectionControls.vue";

export default {
  title: "Selection Controls",
  component: SelectionControls,
};

const Template: Story = () => ({
  components: { SelectionControls },
  template: "<selection-controls />",
});

export const AllVariants = Template.bind({});
AllVariants.storyName = "All Variants";
