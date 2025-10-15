import type { Meta, StoryObj } from '@storybook/vue3';
import { useArgs } from '@storybook/preview-api';
import DropArea from '../components/Drop/DropArea.vue';

import './drop.story.scss';

const meta: Meta<typeof DropArea> = {
  title: 'Drop/Drop Area',
  component: DropArea,
  args: {
    state: 'default',
    dragText: 'Ziehe deine Dateien hier hin',
    buttonText: 'DATEIEN AUSWÄHLEN',
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'dragOver'],
      description: 'Visual state of the drop area',
    },
    dragText: {
      control: { type: 'text' },
      description: 'Text displayed in the drop area',
    },
    buttonText: {
      control: { type: 'text' },
      description: 'Text displayed on the button',
    },
  },
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    state: 'default',
  },
  render: (args) => ({
    components: { DropArea },
    setup() {
      return { args };
    },
    template: `
      <div class="drop-story-stage drop-story-stage--area">
        <DropArea
          v-bind="args"
        />
      </div>
    `,
  }),
};

export const DragOver: Story = {
  name: 'Drag Over',
  args: {
    state: 'dragOver',
  },
  render: (args) => ({
    components: { DropArea },
    setup() {
      return { args };
    },
    template: `
      <div class="drop-story-stage drop-story-stage--area">
        <DropArea
          v-bind="args"
        />
      </div>
    `,
  }),
};

export const Interactive: Story = {
  name: 'Interactive Playground',
  args: {
    state: 'default',
    dragText: 'Ziehe deine Dateien hier hin',
    buttonText: 'DATEIEN AUSWÄHLEN',
  },
  render: (args) => ({
    components: { DropArea },
    setup() {
      const [, updateArgs] = useArgs();

      const handleDragOver = () => {
        updateArgs({ state: 'dragOver' });
      };

      const handleDragLeave = () => {
        updateArgs({ state: 'default' });
      };

      const handleFilesSelected = (files: FileList) => {
        console.log('Files selected:', Array.from(files).map(f => f.name));
        updateArgs({ state: 'default' });
      };

      return { 
        args, 
        handleDragOver, 
        handleDragLeave, 
        handleFilesSelected 
      };
    },
    template: `
      <div class="drop-story-stage drop-story-stage--area">
        <DropArea 
          v-bind="args"
          @drag-over="handleDragOver"
          @drag-leave="handleDragLeave"
          @files-selected="handleFilesSelected"
        />
      </div>
    `,
  }),
};
