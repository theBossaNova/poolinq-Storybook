import type { Component } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { useArgs } from "@storybook/preview-api";

import TextSelectEmpty from "../components/Inputs/Text Select/TextSelect-Empty.vue";
import TextSelectEmptyTyping from "../components/Inputs/Text Select/TextSelect-EmptyTyping.vue";
import TextSelectFilled from "../components/Inputs/Text Select/TextSelect-Filled.vue";
import TextSelectFilledTyping from "../components/Inputs/Text Select/TextSelect-FilledTyping.vue";
import TextSelectWarning from "../components/Inputs/Text Select/TextSelect-Warning.vue";
import TextSelectError from "../components/Inputs/Text Select/TextSelect-Error.vue";

import "./textSelect.story.scss";

interface SuggestionItem {
  label: string;
  value: string;
}

type TextSelectArgs = {
  placeholder: string;
  suggestions: SuggestionItem[];
  modelValue?: string;
};

const defaultSuggestions: SuggestionItem[] = [
  { label: "Lorem ipsum", value: "lorem1" },
  { label: "Input", value: "input" },
  { label: "Lorem ipsum", value: "lorem2" },
];

const meta: Meta<typeof TextSelectEmpty> = {
  title: "Inputs/Text Select",
  component: TextSelectEmpty,
  args: {
    placeholder: "Placeholder",
    suggestions: defaultSuggestions,
  },
  argTypes: {
    placeholder: {
      control: { type: "text" },
    },
    suggestions: {
      control: { type: "object" },
    },
    modelValue: {
      control: { type: "text" },
      name: "Value",
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
    suggestions?: SuggestionItem[];
  }
): Story => ({
  name: options.name,
  args: {
    placeholder: options.placeholder ?? "Placeholder",
    suggestions: options.suggestions ?? defaultSuggestions,
    modelValue: options.initialValue,
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
      <div class="text-select-story-wrapper">
        <VariantComponent
          v-bind="args"
          @update:modelValue="handleUpdate"
        />
      </div>
    `,
  }),
});

export const Empty: Story = createVariantStory(TextSelectEmpty, {
  name: "Empty (Closed)",
});

export const EmptyTyping: Story = createVariantStory(TextSelectEmptyTyping, {
  name: "Empty (Typing with Dropdown)",
});

export const Filled: Story = createVariantStory(TextSelectFilled, {
  name: "Filled (Closed)",
  initialValue: "Input",
});

export const FilledTyping: Story = createVariantStory(TextSelectFilledTyping, {
  name: "Filled (Typing with Dropdown)",
  initialValue: "Input",
  suggestions: [
    { label: "Lorem ipsum", value: "lorem1" },
    { label: "Lorem ipsum", value: "lorem2" },
    { label: "Lorem ipsum", value: "lorem3" },
  ],
});

export const Warning: Story = createVariantStory(TextSelectWarning, {
  name: "Warning",
  initialValue: "Input",
});

export const Error: Story = createVariantStory(TextSelectError, {
  name: "Error",
  initialValue: "Input",
});
