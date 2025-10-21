import type { Meta, StoryObj } from "@storybook/vue3";
import { useArgs } from "@storybook/preview-api";

import NumberCountSmall from "../../components/Inputs/Number Count/NumberCount-Small.vue";
import NumberCountLarge from "../../components/Inputs/Number Count/NumberCount-Large.vue";
import NumberCountMinDefault from "../../components/Inputs/Number Count/NumberCount-MinDefault.vue";
import NumberCountMaxDefault from "../../components/Inputs/Number Count/NumberCount-MaxDefault.vue";
import NumberCountDisabled from "../../components/Inputs/Number Count/NumberCount-Disabled.vue";

import "../numberCount.story.scss";

type NumberCountArgs = {
  modelValue: number;
  min: number;
  max: number;
  step: number;
};

const meta: Meta<typeof NumberCountLarge> = {
  title: "Inputs/Number Count",
  component: NumberCountLarge,
  args: {
    modelValue: 0,
    min: 0,
    max: 10,
    step: 1,
  },
  argTypes: {
    modelValue: {
      control: { type: "number" },
      name: "Value",
    },
    min: {
      control: { type: "number" },
    },
    max: {
      control: { type: "number" },
    },
    step: {
      control: { type: "number" },
    },
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const createStory = (
  component: any,
  options: {
    name: string;
    initialValue?: number;
    min?: number;
    max?: number;
  }
): Story => ({
  name: options.name,
  args: {
    modelValue: options.initialValue ?? 0,
    min: options.min ?? 0,
    max: options.max ?? 10,
  },
  render: (args) => ({
    components: { VariantComponent: component },
    setup() {
      const [, updateArgs] = useArgs();
      const handleUpdate = (value: number) => {
        updateArgs({ modelValue: value });
      };

      return { args, handleUpdate };
    },
    template: `
      <div class="number-count-story-surface">
        <VariantComponent
          v-bind="args"
          @update:modelValue="handleUpdate"
        />
      </div>
    `,
  }),
});

export const AtMaximum: Story = createStory(NumberCountMaxDefault, {
  name: "At Maximum",
  initialValue: 10,
  min: 0,
  max: 10,
});

export const AtMinimum: Story = createStory(NumberCountMinDefault, {
  name: "At Minimum",
  initialValue: 0,
  min: 0,
  max: 10,
});

export const Disabled: Story = createStory(NumberCountDisabled, {
  name: "Disabled",
  initialValue: 5,
});

export const Large: Story = createStory(NumberCountLarge, {
  name: "Large",
  initialValue: 5,
});

export const Small: Story = createStory(NumberCountSmall, {
  name: "Small",
  initialValue: 5,
});
