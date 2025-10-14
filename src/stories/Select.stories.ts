import type { Component } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { useArgs } from "@storybook/preview-api";

import SelectInput from "../components/Inputs/Select/SelectInput.vue";
import SelectClosed from "../components/Inputs/Select/Select-Closed.vue";
import SelectOpened from "../components/Inputs/Select/Select-Opened.vue";
import SelectSelected from "../components/Inputs/Select/Select-Selected.vue";
import SelectSelectedOpened from "../components/Inputs/Select/Select-SelectedOpened.vue";
import SelectWarning from "../components/Inputs/Select/Select-Warning.vue";
import SelectError from "../components/Inputs/Select/Select-Error.vue";

import "./select.story.scss";

interface SelectItem {
  label: string;
  value: string | number;
}

type SelectArgs = {
  placeholder: string;
  items: SelectItem[];
  modelValue?: string | number;
  helperText?: string;
  state?: "empty" | "selected" | "warning" | "error";
};

const defaultItems: SelectItem[] = [
  { label: "Item 1", value: "item1" },
  { label: "Item 2", value: "item2" },
  { label: "Item 3", value: "item3" },
];

const meta: Meta<typeof SelectClosed> = {
  title: "Inputs/Select",
  component: SelectClosed,
  args: {
    placeholder: "Placeholder",
    items: defaultItems,
    showMenu: false,
  },
  argTypes: {
    placeholder: {
      control: { type: "text" },
    },
    items: {
      control: { type: "object" },
    },
    modelValue: {
      control: { type: "text" },
      name: "Selected Value",
    },
    helperText: {
      control: { type: "text" },
      name: "Helper Text",
    },
    state: {
      control: { type: "select" },
      options: ["empty", "selected", "warning", "error"],
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
    initialValue?: string | number;
    placeholder?: string;
    items?: SelectItem[];
  }
): Story => ({
  name: options.name,
  args: {
    placeholder: options.placeholder ?? "Placeholder",
    items: options.items ?? defaultItems,
    modelValue: options.initialValue,
  },
  render: (args) => ({
    components: { VariantComponent: component },
    setup() {
      const [, updateArgs] = useArgs();
      const handleUpdate = (value: string | number) => {
        updateArgs({ modelValue: value });
      };

      return { args, handleUpdate };
    },
    template: `
      <div class="select-story-wrapper">
        <VariantComponent
          v-bind="args"
          @update:modelValue="handleUpdate"
        />
      </div>
    `,
  }),
});

export const Closed: Story = createVariantStory(SelectClosed, {
  name: "Closed (Empty)",
});

export const Opened: Story = createVariantStory(SelectOpened, {
  name: "Opened (Empty)",
});

export const Selected: Story = createVariantStory(SelectSelected, {
  name: "Selected (Closed)",
  initialValue: "item2",
});

export const SelectedOpened: Story = createVariantStory(SelectSelectedOpened, {
  name: "Selected (Opened)",
  initialValue: "item2",
});

export const Warning: Story = createVariantStory(SelectWarning, {
  name: "Warning",
  initialValue: "item2",
});

export const Error: Story = createVariantStory(SelectError, {
  name: "Error",
  initialValue: "item2",
});

export const Interactive: Story = {
  name: "Interactive Playground",
  args: {
    placeholder: "Select an option",
    items: defaultItems,
    modelValue: undefined,
    helperText: "",
    state: "empty",
  },
  render: (args) => ({
    components: { SelectInput },
    setup() {
      const [, updateArgs] = useArgs();
      const handleUpdate = (value: string | number) => {
        updateArgs({ modelValue: value });
      };

      return { args, handleUpdate };
    },
    template: `
      <div class="select-story-wrapper">
        <SelectInput
          v-bind="args"
          @update:modelValue="handleUpdate"
        />
      </div>
    `,
  }),
};
