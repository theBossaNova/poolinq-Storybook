import type { Meta, StoryObj } from "@storybook/vue3";
import { useArgs } from "@storybook/preview-api";
import Checkbox from "./Checkbox.vue";
import "./selectionControls.story.scss";

const meta: Meta<typeof Checkbox> = {
  title: "Selection Controls/Checkbox",
  component: Checkbox,
  args: {
    type: "checkbox",
    checked: false,
    disabled: false,
  },
  argTypes: {
    type: { table: { disable: true } },
    state: { table: { disable: true } },
    checked: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
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
    components: { Checkbox },
    setup() {
      const [, updateArgs] = useArgs();
      const handleUpdate = (value: boolean) => {
        updateArgs({ checked: value });
      };
      return { args, handleUpdate };
    },
    template: `
      <div class="control-story-wrapper">
        <checkbox v-bind="args" @update:checked="handleUpdate" />
      </div>
    `,
  }),
};
