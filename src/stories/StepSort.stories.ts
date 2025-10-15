import type { Meta as StoryMeta, StoryObj } from "@storybook/vue3";

import StepSort from "../components/SelectionControls/StepSort.vue";

import "./stepSort.story.scss";

const meta: StoryMeta<typeof StepSort> = {
  title: "Selection Controls/Step Sort",
  component: StepSort,
  args: {
    variant: "default",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "disabled-top",
        "disabled-bottom",
        "hover-top",
        "hover-bottom",
      ],
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

type StepSortVariantOption =
  | "default"
  | "disabled-top"
  | "disabled-bottom"
  | "hover-top"
  | "hover-bottom";

const renderComponent: Story["render"] = (args) => ({
  components: { StepSort },
  setup() {
    return { args };
  },
  template: `
    <div class="step-sort-story-surface">
      <StepSort v-bind="args" />
    </div>
  `,
});

const createStory = (variant: StepSortVariantOption): Story => ({
  args: { variant },
  render: renderComponent,
});

export const Default: Story = createStory("default");

export const DisabledTop: Story = createStory("disabled-top");

export const DisabledBottom: Story = createStory("disabled-bottom");

export const HoverTop: Story = createStory("hover-top");

export const HoverBottom: Story = createStory("hover-bottom");
