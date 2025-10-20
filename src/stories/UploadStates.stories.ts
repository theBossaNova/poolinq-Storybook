import type { Meta, StoryObj } from '@storybook/vue3';
import UploadStates from '../components/Drop/UploadStates.vue';

const meta: Meta<typeof UploadStates> = {
  title: 'Drop/Upload States',
  component: UploadStates,
  args: {
    filename: 'meine_datei.pdf',
    status: 'uploading',
    progress: 80,
  },
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Uploading: Story = {
  args: {
    status: 'uploading',
    filename: 'meine_datei.pdf',
    progress: 80,
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    filename: 'meine_datei.pdf',
    progress: 100,
  },
};

export const Pending: Story = {
  args: {
    status: 'pending',
    filename: 'meine_datei.pdf',
    progress: 0,
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    filename: 'meine_datei.pdf',
    progress: 70,
  },
};
