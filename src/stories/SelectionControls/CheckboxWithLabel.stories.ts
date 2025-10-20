import type { Meta, StoryObj } from "@storybook/vue3";
import { useArgs } from "@storybook/preview-api";
import CheckboxWithLabel from "../CheckboxWithLabel.vue";
import "../selectionControls.story.scss";

const meta: Meta<typeof CheckboxWithLabel> = {
  title: "Selection Controls/Checkbox With Label",
  component: CheckboxWithLabel,
  args: {
    type: "checkbox",
    checked: false,
    disabled: false,
    label: "Label",
    state: "default",
  },
  argTypes: {
    type: { table: { disable: true } },
    state: { table: { disable: true } },
    checked: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    label: { control: { type: "text" } },
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  name: "Interactive",
  render: (args) => ({
    components: { CheckboxWithLabel },
    setup() {
      const [, updateArgs] = useArgs();
      const handleUpdate = (value: boolean) => {
        updateArgs({ checked: value });
      };
      return { args, handleUpdate };
    },
    template: `
      <div class="control-story-wrapper">
        <checkbox-with-label v-bind="args" @update:checked="handleUpdate" />
      </div>
    `,
  }),
};
