import type { Meta, StoryObj } from "@storybook/vue3";
import Filter from "../components/Filter/Filter.vue";
import FilterItem from "../components/Filter/FilterItem.vue";
import CheckboxWithLabel from "./CheckboxWithLabel.vue";

const meta = {
  title: "Components/Filter",
  component: Filter,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the filter",
      defaultValue: "Filter",
    },
    defaultOpen: {
      control: "boolean",
      description: "Whether the filter is open by default",
      defaultValue: false,
    },
    saveButtonText: {
      control: "text",
      description: "Text for the save button",
      defaultValue: "AUSWAHL SPEICHERN",
    },
    saveEnabled: {
      control: "boolean",
      description: "Whether the save button is enabled",
      defaultValue: false,
    },
  },
} as Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    title: "Filter",
    defaultOpen: false,
    saveEnabled: false,
  },
  render: (args) => ({
    components: { Filter, FilterItem },
    setup() {
      return { args };
    },
    template: `
      <Filter v-bind="args">
        <FilterItem label="Filter 1" />
      </Filter>
    `,
  }),
};

export const OpenedWith4Filters: Story = {
  args: {
    title: "Filter",
    defaultOpen: true,
    saveEnabled: false,
  },
  render: (args) => ({
    components: { Filter, FilterItem },
    setup() {
      return { args };
    },
    template: `
      <Filter v-bind="args">
        <FilterItem label="Filter 1" />
        <FilterItem label="Filter 2" />
        <FilterItem label="Filter 3" />
        <FilterItem label="Filter 4" />
      </Filter>
    `,
  }),
};

export const OpenedWith3Filters: Story = {
  args: {
    title: "Filter",
    defaultOpen: true,
    saveEnabled: false,
  },
  render: (args) => ({
    components: { Filter, FilterItem },
    setup() {
      return { args };
    },
    template: `
      <Filter v-bind="args">
        <FilterItem label="Filter 1" />
        <FilterItem label="Filter 1" />
        <FilterItem label="Filter 1" />
      </Filter>
    `,
  }),
};

export const OpenedWith2Filters: Story = {
  args: {
    title: "Filter",
    defaultOpen: true,
    saveEnabled: false,
  },
  render: (args) => ({
    components: { Filter, FilterItem },
    setup() {
      return { args };
    },
    template: `
      <Filter v-bind="args">
        <FilterItem label="Filter 1" />
        <FilterItem label="Filter 1" />
      </Filter>
    `,
  }),
};

export const WithCheckboxes: Story = {
  args: {
    title: "Filter",
    defaultOpen: true,
    saveEnabled: false,
  },
  render: (args) => ({
    components: { Filter, FilterItem, CheckboxWithLabel },
    setup() {
      const selections = {
        option1: true,
        option2: false,
        option3: false,
        option4: false,
      };

      return { args, selections };
    },
    template: `
      <Filter v-bind="args">
        <FilterItem label="Filter Options" :defaultOpen="true">
          <CheckboxWithLabel
            v-model:checked="selections.option1"
            label="Label"
            style="padding: 6px 0;"
          />
          <CheckboxWithLabel
            v-model:checked="selections.option2"
            label="Label"
            style="padding: 6px 0;"
          />
          <CheckboxWithLabel
            v-model:checked="selections.option3"
            label="Label"
            style="padding: 6px 0;"
          />
          <CheckboxWithLabel
            v-model:checked="selections.option4"
            label="Label"
            style="padding: 6px 0;"
          />
        </FilterItem>
      </Filter>
    `,
  }),
};

export const Interactive: Story = {
  args: {
    title: "Filter",
    defaultOpen: true,
    saveEnabled: true,
  },
  render: (args) => ({
    components: { Filter, FilterItem, CheckboxWithLabel },
    setup() {
      const selections = {
        category1: { option1: false, option2: false },
        category2: { option1: false, option2: false },
      };

      const handleSave = () => {
        alert("Filters saved!");
      };

      return { args, selections, handleSave };
    },
    template: `
      <Filter v-bind="args" @save="handleSave">
        <FilterItem label="Category 1" :defaultOpen="true">
          <CheckboxWithLabel
            v-model:checked="selections.category1.option1"
            label="Option 1"
            style="padding: 6px 0;"
          />
          <CheckboxWithLabel
            v-model:checked="selections.category1.option2"
            label="Option 2"
            style="padding: 6px 0;"
          />
        </FilterItem>
        <FilterItem label="Category 2">
          <CheckboxWithLabel
            v-model:checked="selections.category2.option1"
            label="Option A"
            style="padding: 6px 0;"
          />
          <CheckboxWithLabel
            v-model:checked="selections.category2.option2"
            label="Option B"
            style="padding: 6px 0;"
          />
        </FilterItem>
      </Filter>
    `,
  }),
};
