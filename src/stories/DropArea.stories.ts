import type { Meta, StoryObj } from "@storybook/vue3";
import DropArea from "../components/Drop/DropArea.vue";

const meta: Meta<typeof DropArea> = {
  title: "Drop/Drop Area",
  component: DropArea,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "default",
  },
};

export const DragOver: Story = {
  args: {
    state: "dragOver",
  },
};
