import { Story } from "@storybook/vue3";
import SelectionControls from "./SelectionControls.vue";

export default {
  title: "Selection Controls/Radio With Label",
  component: SelectionControls,
};

const Template: Story = () => ({
  components: { SelectionControls },
  setup() {
    const sections = ["radioWithLabel"] as const;
    return { sections };
  },
  template: '<selection-controls :sections="sections" :show-title="false" />',
});

export const States = Template.bind({});
States.storyName = "States";
