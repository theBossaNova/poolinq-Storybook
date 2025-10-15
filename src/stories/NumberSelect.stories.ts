import type { Component } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { useArgs } from "@storybook/preview-api";

import NumberSelectDefault from "../components/Inputs/Number Select/NumberSelect-Default.vue";
import NumberSelectFocused from "../components/Inputs/Number Select/NumberSelect-Focused.vue";
import NumberSelectFilled from "../components/Inputs/Number Select/NumberSelect-Filled.vue";
import NumberSelectWarning from "../components/Inputs/Number Select/NumberSelect-Warning.vue";
import NumberSelectError from "../components/Inputs/Number Select/NumberSelect-Error.vue";

type NumberSelectArgs = {
  modelValue: number;
  currency: string;
  min: number;
  max: number;
  step: number;
};

const meta: Meta<typeof NumberSelectDefault> = {
  title: "Inputs/Number Select",
  component: NumberSelectDefault,
  args: {
    modelValue: 0,
    currency: "€",
    min: 0,
    max: 999999,
    step: 1,
  },
  argTypes: {
    modelValue: {
      control: { type: "number" },
      name: "Value",
    },
    currency: {
      control: { type: "text" },
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

const createVariantStory = (
  component: Component,
  options: {
    name: string;
    initialValue?: number;
    extraArgs?: Partial<NumberSelectArgs>;
  }
): Story => ({
  name: options.name,
  args: {
    modelValue: options.initialValue ?? 0,
    ...(options.extraArgs ?? {}),
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
      <div style="padding: 20px;">
        <VariantComponent
          v-bind="args"
          @update:modelValue="handleUpdate"
        />
      </div>
    `,
  }),
});

export const Default: Story = createVariantStory(NumberSelectDefault, {
  name: "Default",
});

export const Focused: Story = createVariantStory(NumberSelectFocused, {
  name: "Focused",
  initialValue: 0,
});

export const Filled: Story = createVariantStory(NumberSelectFilled, {
  name: "Filled",
  initialValue: 8,
});

export const Warning: Story = createVariantStory(NumberSelectWarning, {
  name: "Warning",
  initialValue: 8,
});

export const Error: Story = createVariantStory(NumberSelectError, {
  name: "Error",
  initialValue: 8,
});
