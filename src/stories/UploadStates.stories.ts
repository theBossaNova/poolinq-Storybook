import type { Meta, StoryObj } from "@storybook/vue3";
import UploadStates from "../components/Drop/UploadStates.vue";

const meta: Meta<typeof UploadStates> = {
  title: "Drop/Upload States",
  component: UploadStates,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Uploading: Story = {
  args: {
    status: "uploading",
    filename: "document.pdf",
    progress: 80,
  },
};

export const Success: Story = {
  args: {
    status: "success",
    filename: "document.pdf",
    progress: 100,
  },
};

export const Pending: Story = {
  args: {
    status: "pending",
    filename: "document.pdf",
    progress: 0,
  },
};

export const Error: Story = {
  args: {
    status: "error",
    filename: "document.pdf",
    progress: 65,
  },
};
