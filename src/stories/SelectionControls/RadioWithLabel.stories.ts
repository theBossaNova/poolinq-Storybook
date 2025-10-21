import type { Meta, StoryObj } from "@storybook/vue3";
import { useArgs } from "@storybook/preview-api";
import RadioWithLabel from "../RadioWithLabel.vue";
import "../selectionControls.story.scss";

const meta: Meta<typeof RadioWithLabel> = {
  title: "Selection Controls/Radio With Label",
  component: RadioWithLabel,
  args: {
    checked: false,
    disabled: false,
    label: "Label",
    state: "default",
  },
  argTypes: {
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
    components: { RadioWithLabel },
    setup() {
      const [, updateArgs] = useArgs();
      const handleUpdate = (value: boolean) => {
        updateArgs({ checked: value });
      };
      return { args, handleUpdate };
    },
    template: `
      <div class="control-story-wrapper">
        <radio-with-label v-bind="args" @update:checked="handleUpdate" />
      </div>
    `,
  }),
};
