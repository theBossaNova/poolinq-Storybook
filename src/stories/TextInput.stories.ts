import type { Component } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { useArgs } from "@storybook/preview-api";

import InputDefault from "../components/Inputs/text Input/Input-Default.vue";
import InputTyping from "../components/Inputs/text Input/Input-Typing.vue";
import InputFilled from "../components/Inputs/text Input/Input-Filled.vue";
import InputWarning from "../components/Inputs/text Input/Input-Warning.vue";
import InputError from "../components/Inputs/text Input/Input-Error.vue";
import InputDisabled from "../components/Inputs/text Input/Input-Disabled.vue";

import "./textInput.story.scss";

interface SuggestionItem {
  label: string;
  value: string;
}

type TextInputArgs = {
  placeholder: string;
  modelValue: string;
  autofocus?: boolean;
  showSearchIcon?: boolean;
  showMenu?: boolean;
  suggestions?: SuggestionItem[];
};

const defaultSuggestions: SuggestionItem[] = [
  { label: "Lorem ipsum", value: "lorem1" },
  { label: "Lorem ipsum", value: "lorem2" },
  { label: "Lorem ipsum", value: "lorem3" },
];

const meta: Meta<typeof InputDefault> = {
  title: "Inputs/Text Input",
  component: InputDefault,
  args: {
    placeholder: "Placeholder",
    modelValue: "",
    size: "256",
  },
  argTypes: {
    placeholder: {
      control: { type: "text" },
    },
    modelValue: {
      control: { type: "text" },
      name: "Value",
    },
    size: {
      control: { type: "select" },
      options: ["256", "160", "100", "80", "64"],
      name: "Size (px)",
    },
    showSearchIcon: {
      control: { type: "boolean" },
      name: "Show Search Icon",
    },
    showMenu: {
      control: { type: "boolean" },
      name: "Show Menu",
    },
    suggestions: {
      control: { type: "object" },
      name: "Suggestions",
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

export const WithSearchIcon: Story = {
  name: "With Search Icon",
  args: {
    placeholder: "Placeholder",
    modelValue: "",
    showSearchIcon: true,
  },
  render: (args) => ({
    components: { TextInputVariant: InputDefault },
    setup() {
      const [, updateArgs] = useArgs();
      const handleUpdate = (value: string) => {
        updateArgs({ modelValue: value });
      };

      return { args, handleUpdate };
    },
    template: `
      <div class="text-input-story-wrapper">
        <TextInputVariant
          variant="empty"
          v-bind="args"
          @update:modelValue="handleUpdate"
        />
      </div>
    `,
  }),
};

export const WithMenu: Story = {
  name: "With Menu (Typing)",
  args: {
    placeholder: "Placeholder",
    modelValue: "I",
    showMenu: true,
    suggestions: defaultSuggestions,
    autofocus: true,
  },
  render: (args) => ({
    components: { TextInputVariant: InputDefault },
    setup() {
      const [, updateArgs] = useArgs();
      const handleUpdate = (value: string) => {
        updateArgs({ modelValue: value });
      };

      return { args, handleUpdate };
    },
    template: `
      <div class="text-input-story-wrapper">
        <TextInputVariant
          variant="focused"
          v-bind="args"
          @update:modelValue="handleUpdate"
        />
      </div>
    `,
  }),
};

export const FilledWithMenu: Story = {
  name: "Filled With Menu",
  args: {
    placeholder: "Placeholder",
    modelValue: "Input",
    showMenu: true,
    suggestions: defaultSuggestions,
  },
  render: (args) => ({
    components: { TextInputVariant: InputDefault },
    setup() {
      const [, updateArgs] = useArgs();
      const handleUpdate = (value: string) => {
        updateArgs({ modelValue: value });
      };

      return { args, handleUpdate };
    },
    template: `
      <div class="text-input-story-wrapper">
        <TextInputVariant
          variant="filled"
          v-bind="args"
          @update:modelValue="handleUpdate"
        />
      </div>
    `,
  }),
};
