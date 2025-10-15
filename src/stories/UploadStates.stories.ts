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
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['uploading', 'success', 'pending', 'error'],
      description: 'Current upload status',
    },
    filename: {
      control: { type: 'text' },
      description: 'Name of the file being uploaded',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Upload progress percentage (0-100)',
    },
  },
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Uploading: Story = {
  name: 'Uploading',
  args: {
    status: 'uploading',
    filename: 'meine_datei.pdf',
    progress: 80,
  },
  render: (args) => ({
    components: { UploadStates },
    setup() {
      const handleCancel = () => {
        console.log('Upload cancelled');
      };

      return { args, handleCancel };
    },
    template: `
      <div style="padding: 32px; min-width: 600px;">
        <UploadStates 
          v-bind="args"
          @cancel="handleCancel"
        />
      </div>
    `,
  }),
};

export const Success: Story = {
  name: 'Upload Complete',
  args: {
    status: 'success',
    filename: 'meine_datei.pdf',
    progress: 100,
  },
  render: (args) => ({
    components: { UploadStates },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 32px; min-width: 600px;">
        <UploadStates v-bind="args" />
      </div>
    `,
  }),
};

export const Pending: Story = {
  name: 'Upload Pending',
  args: {
    status: 'pending',
    filename: 'meine_datei.pdf',
    progress: 0,
  },
  render: (args) => ({
    components: { UploadStates },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 32px; min-width: 600px;">
        <UploadStates v-bind="args" />
      </div>
    `,
  }),
};

export const Error: Story = {
  name: 'Upload Error',
  args: {
    status: 'error',
    filename: 'meine_datei.pdf',
    progress: 70,
  },
  render: (args) => ({
    components: { UploadStates },
    setup() {
      const handleRetry = () => {
        console.log('Retrying upload');
      };

      const handleCancel = () => {
        console.log('Upload cancelled');
      };

      return { args, handleRetry, handleCancel };
    },
    template: `
      <div style="padding: 32px; min-width: 600px;">
        <UploadStates 
          v-bind="args"
          @retry="handleRetry"
          @cancel="handleCancel"
        />
      </div>
    `,
  }),
};

export const AllStates: Story = {
  name: 'All Upload States',
  render: () => ({
    components: { UploadStates },
    setup() {
      const handleRetry = () => {
        console.log('Retrying upload');
      };

      const handleCancel = () => {
        console.log('Upload cancelled');
      };

      return { handleRetry, handleCancel };
    },
    template: `
      <div style="padding: 32px; display: flex; flex-direction: column; gap: 16px; min-width: 600px;">
        <UploadStates 
          status="uploading" 
          filename="document_uploading.pdf" 
          :progress="80"
          @cancel="handleCancel"
        />
        <UploadStates 
          status="success" 
          filename="document_complete.pdf" 
          :progress="100"
        />
        <UploadStates 
          status="pending" 
          filename="document_pending.pdf" 
          :progress="0"
        />
        <UploadStates 
          status="error" 
          filename="document_error.pdf" 
          :progress="65"
          @retry="handleRetry"
          @cancel="handleCancel"
        />
      </div>
    `,
  }),
};
