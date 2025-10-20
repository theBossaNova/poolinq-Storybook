import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Filter from "../components/Filter/Filter.vue";
import FilterItem from "../components/Filter/FilterItem.vue";

const meta = {
  title: "Components/Filter",
  component: Filter,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Main filter title",
      defaultValue: "Filter",
    },
    buttonText: {
      control: "text",
      description: "Save button text",
      defaultValue: "AUSWAHL SPEICHERN",
    },
    defaultOpen: {
      control: "boolean",
      description: "Whether the filter is open by default",
      defaultValue: false,
    },
    subfilterCount: {
      control: { type: "number", min: 1, max: 6, step: 1 },
      description: "Number of subfilters to display (1-6)",
      defaultValue: 2,
    },
  },
} as Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    title: "Filter",
    buttonText: "AUSWAHL SPEICHERN",
    defaultOpen: false,
    subfilterCount: 1,
  },
  render: (args) => ({
    components: { Filter, FilterItem },
    setup() {
      return { args };
    },
    template: `
      <Filter v-bind="args">
        <FilterItem
          label="Filter 1"
          :index="0"
          :optionCount="3"
          :optionLabels="['Option 1', 'Option 2', 'Option 3']"
        />
      </Filter>
    `,
  }),
};

export const SingleSubfilter: Story = {
  args: {
    title: "Filter",
    buttonText: "AUSWAHL SPEICHERN",
    defaultOpen: true,
    subfilterCount: 1,
  },
  render: (args) => ({
    components: { Filter, FilterItem },
    setup() {
      const handleSave = () => {
        alert("Filters saved!");
      };

      return { args, handleSave };
    },
    template: `
      <Filter v-bind="args" @save="handleSave">
        <FilterItem
          label="Filter 1"
          :index="0"
          :optionCount="4"
          :optionLabels="['Option A', 'Option B', 'Option C', 'Option D']"
        />
      </Filter>
    `,
  }),
};

export const MultipleSubfilters: Story = {
  args: {
    title: "Filter",
    buttonText: "AUSWAHL SPEICHERN",
    defaultOpen: true,
    subfilterCount: 4,
  },
  render: (args) => ({
    components: { Filter, FilterItem },
    setup() {
      const subfilterConfig = ref([
        {
          label: "Filter 1",
          optionCount: 3,
          optionLabels: ["Option 1", "Option 2", "Option 3"],
        },
        {
          label: "Filter 2",
          optionCount: 4,
          optionLabels: ["Option A", "Option B", "Option C", "Option D"],
        },
        {
          label: "Filter 3",
          optionCount: 2,
          optionLabels: ["Category 1", "Category 2"],
        },
        {
          label: "Filter 4",
          optionCount: 5,
          optionLabels: [
            "Item 1",
            "Item 2",
            "Item 3",
            "Item 4",
            "Item 5",
          ],
        },
      ]);

      const handleSave = () => {
        alert("Filters saved!");
      };

      const getConfig = (index: number) => {
        return subfilterConfig.value[index] || {
          label: `Filter ${index + 1}`,
          optionCount: 3,
          optionLabels: ["Option 1", "Option 2", "Option 3"],
        };
      };

      return { args, subfilterConfig, handleSave, getConfig };
    },
    template: `
      <Filter v-bind="args" @save="handleSave">
        <FilterItem
          v-for="i in args.subfilterCount"
          :key="i - 1"
          :label="getConfig(i - 1).label"
          :index="i - 1"
          :optionCount="getConfig(i - 1).optionCount"
          :optionLabels="getConfig(i - 1).optionLabels"
        />
      </Filter>
    `,
  }),
};

export const Interactive: Story = {
  args: {
    title: "My Filters",
    buttonText: "SAVE SELECTION",
    defaultOpen: true,
    subfilterCount: 3,
  },
  render: (args) => ({
    components: { Filter, FilterItem },
    setup() {
      const subfilterConfig = ref([
        {
          label: "Size",
          optionCount: 4,
          optionLabels: ["Small", "Medium", "Large", "XL"],
        },
        {
          label: "Color",
          optionCount: 5,
          optionLabels: ["Red", "Blue", "Green", "Black", "White"],
        },
        {
          label: "Brand",
          optionCount: 3,
          optionLabels: ["Brand A", "Brand B", "Brand C"],
        },
      ]);

      const activeCount = ref(0);

      const handleSave = () => {
        alert(`Selections saved! Total active: ${activeCount.value}`);
      };

      const handleSelectionChange = () => {
        // Count total selections
        let count = 0;
        // This would be updated when FilterItem emits selection-change
        activeCount.value = count;
      };

      const getConfig = (index: number) => {
        return subfilterConfig.value[index] || {
          label: `Filter ${index + 1}`,
          optionCount: 3,
          optionLabels: ["Option 1", "Option 2", "Option 3"],
        };
      };

      return {
        args,
        subfilterConfig,
        handleSave,
        handleSelectionChange,
        getConfig,
        activeCount,
      };
    },
    template: `
      <Filter v-bind="args" @save="handleSave">
        <FilterItem
          v-for="i in args.subfilterCount"
          :key="i - 1"
          :label="getConfig(i - 1).label"
          :index="i - 1"
          :optionCount="getConfig(i - 1).optionCount"
          :optionLabels="getConfig(i - 1).optionLabels"
          @selection-change="handleSelectionChange"
        />
      </Filter>
    `,
  }),
};

export const CustomizedTexts: Story = {
  args: {
    title: "Verfeinern Sie Ihre Suche",
    buttonText: "ERGEBNISSE ANZEIGEN",
    defaultOpen: true,
    subfilterCount: 2,
  },
  render: (args) => ({
    components: { Filter, FilterItem },
    setup() {
      const subfilterConfig = ref([
        {
          label: "Größe",
          optionCount: 4,
          optionLabels: ["Klein", "Mittel", "Groß", "Extra Groß"],
        },
        {
          label: "Marke",
          optionCount: 3,
          optionLabels: ["Marke X", "Marke Y", "Marke Z"],
        },
      ]);

      const handleSave = () => {
        alert("Suchkriterien gespeichert!");
      };

      const getConfig = (index: number) => {
        return subfilterConfig.value[index] || {
          label: `Filter ${index + 1}`,
          optionCount: 3,
          optionLabels: ["Option 1", "Option 2", "Option 3"],
        };
      };

      return { args, subfilterConfig, handleSave, getConfig };
    },
    template: `
      <Filter v-bind="args" @save="handleSave">
        <FilterItem
          v-for="i in args.subfilterCount"
          :key="i - 1"
          :label="getConfig(i - 1).label"
          :index="i - 1"
          :optionCount="getConfig(i - 1).optionCount"
          :optionLabels="getConfig(i - 1).optionLabels"
        />
      </Filter>
    `,
  }),
};

export const ManyOptions: Story = {
  args: {
    title: "Filter",
    buttonText: "AUSWAHL SPEICHERN",
    defaultOpen: true,
    subfilterCount: 2,
  },
  render: (args) => ({
    components: { Filter, FilterItem },
    setup() {
      const subfilterConfig = ref([
        {
          label: "Categories",
          optionCount: 8,
          optionLabels: [
            "Category 1",
            "Category 2",
            "Category 3",
            "Category 4",
            "Category 5",
            "Category 6",
            "Category 7",
            "Category 8",
          ],
        },
        {
          label: "Tags",
          optionCount: 6,
          optionLabels: [
            "Tag A",
            "Tag B",
            "Tag C",
            "Tag D",
            "Tag E",
            "Tag F",
          ],
        },
      ]);

      const handleSave = () => {
        alert("Filters saved!");
      };

      const getConfig = (index: number) => {
        return subfilterConfig.value[index] || {
          label: `Filter ${index + 1}`,
          optionCount: 3,
          optionLabels: ["Option 1", "Option 2", "Option 3"],
        };
      };

      return { args, subfilterConfig, handleSave, getConfig };
    },
    template: `
      <Filter v-bind="args" @save="handleSave">
        <FilterItem
          v-for="i in args.subfilterCount"
          :key="i - 1"
          :label="getConfig(i - 1).label"
          :index="i - 1"
          :optionCount="getConfig(i - 1).optionCount"
          :optionLabels="getConfig(i - 1).optionLabels"
        />
      </Filter>
    `,
  }),
};
