import type { Component } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { useArgs } from "@storybook/preview-api";

import InputDefault from "@/components/Inputs/text Input/Input-Default.vue";
import InputTyping from "@/components/Inputs/text Input/Input-Typing.vue";
import InputFilled from "@/components/Inputs/text Input/Input-Filled.vue";
import InputWarning from "@/components/Inputs/text Input/Input-Warning.vue";
import InputError from "@/components/Inputs/text Input/Input-Error.vue";
import InputDisabled from "@/components/Inputs/text Input/Input-Disabled.vue";

import "./textInput.story.scss";

type TextInputArgs = {
  placeholder: string;
  modelValue: string;
  autofocus?: boolean;
};

const meta: Meta<typeof InputDefault> = {
  title: "Inputs/Text Input",
  component: InputDefault,
  args: {
    placeholder: "Placeholder",
    modelValue: "",
  },
  argTypes: {
    placeholder: {
      control: { type: "text" },
    },
    modelValue: {
      control: { type: "text" },
      name: "Value",
    },
    autofocus: {
      control: { type: "boolean" },
      table: { disable: true },
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
    initialValue?: string;
    placeholder?: string;
    extraArgs?: Partial<TextInputArgs>;
  }
): Story => ({
  name: options.name,
  args: {
    placeholder: options.placeholder ?? "Placeholder",
    modelValue: options.initialValue ?? "",
    ...(options.extraArgs ?? {}),
  },
  render: (args) => ({
    components: { VariantComponent: component },
    setup() {
      const [, updateArgs] = useArgs();
      const handleUpdate = (value: string) => {
        updateArgs({ modelValue: value });
      };

      return { args, handleUpdate };
    },
    template: `
      <div class="text-input-story-wrapper">
        <VariantComponent
          v-bind="args"
          @update:modelValue="handleUpdate"
        />
      </div>
    `,
  }),
});

export const Default: Story = createVariantStory(InputDefault, {
  name: "Default",
});

export const Typing: Story = createVariantStory(InputTyping, {
  name: "Typing",
  initialValue: "Pl",
  extraArgs: { autofocus: true },
});

export const Filled: Story = createVariantStory(InputFilled, {
  name: "Filled",
  initialValue: "Placeholder text",
});

export const Warning: Story = createVariantStory(InputWarning, {
  name: "Warning",
  initialValue: "Placeholder text",
});

export const Error: Story = createVariantStory(InputError, {
  name: "Error",
  initialValue: "Placeholder text",
});

export const Disabled: Story = createVariantStory(InputDisabled, {
  name: "Disabled",
  initialValue: "Disabled state",
});
