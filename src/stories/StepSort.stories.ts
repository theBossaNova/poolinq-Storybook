import type { Meta, StoryObj } from "@storybook/vue3";
import StepSort from "../components/SelectionControls/StepSort.vue";

import "./stepSort.story.scss";

const meta: Meta<typeof StepSort> = {
  title: "Selection Controls/Step Sort",
  component: StepSort,
  args: {
    variant: "default",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "disabled-top", "disabled-bottom", "hover-top", "hover-bottom"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  args: {
    variant: "default",
  },
  render: (args) => ({
    components: { StepSort },
    setup() {
      const handleIncrement = () => console.log("Increment");
      const handleDecrement = () => console.log("Decrement");

      return { args, handleIncrement, handleDecrement };
    },
    template: `
      <div class="step-sort-story-surface">
        <StepSort
          v-bind="args"
          @increment="handleIncrement"
          @decrement="handleDecrement"
        />
      </div>
    `,
  }),
};

export const DisabledTop: Story = {
  name: "Disabled Top",
  args: {
    variant: "disabled-top",
  },
  render: (args) => ({
    components: { StepSort },
    setup() {
      const handleIncrement = () => console.log("Increment");
      const handleDecrement = () => console.log("Decrement");

      return { args, handleIncrement, handleDecrement };
    },
    template: `
      <div class="step-sort-story-surface">
        <StepSort
          v-bind="args"
          @increment="handleIncrement"
          @decrement="handleDecrement"
        />
      </div>
    `,
  }),
};

export const DisabledBottom: Story = {
  name: "Disabled Bottom",
  args: {
    variant: "disabled-bottom",
  },
  render: (args) => ({
    components: { StepSort },
    setup() {
      const handleIncrement = () => console.log("Increment");
      const handleDecrement = () => console.log("Decrement");

      return { args, handleIncrement, handleDecrement };
    },
    template: `
      <div class="step-sort-story-surface">
        <StepSort
          v-bind="args"
          @increment="handleIncrement"
          @decrement="handleDecrement"
        />
      </div>
    `,
  }),
};

export const HoverTop: Story = {
  name: "Hover Top",
  args: {
    variant: "hover-top",
  },
  render: (args) => ({
    components: { StepSort },
    setup() {
      const handleIncrement = () => console.log("Increment");
      const handleDecrement = () => console.log("Decrement");

      return { args, handleIncrement, handleDecrement };
    },
    template: `
      <div class="step-sort-story-surface">
        <StepSort
          v-bind="args"
          @increment="handleIncrement"
          @decrement="handleDecrement"
        />
      </div>
    `,
  }),
};

export const HoverBottom: Story = {
  name: "Hover Bottom",
  args: {
    variant: "hover-bottom",
  },
  render: (args) => ({
    components: { StepSort },
    setup() {
      const handleIncrement = () => console.log("Increment");
      const handleDecrement = () => console.log("Decrement");

      return { args, handleIncrement, handleDecrement };
    },
    template: `
      <div class="step-sort-story-surface">
        <StepSort
          v-bind="args"
          @increment="handleIncrement"
          @decrement="handleDecrement"
        />
      </div>
    `,
  }),
};
