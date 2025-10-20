import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
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
    defaultOpen: false,
    subfilterCount: 1,
  },
  render: (args) => ({
    components: { Filter, FilterItem, CheckboxWithLabel },
    setup() {
      return { args };
    },
    template: `
      <Filter v-bind="args">
        <FilterItem label="Filter 1" :index="0">
          <template #default="{ selections: itemSelections, onSelectionChange }">
            <CheckboxWithLabel 
              :checked="itemSelections.has('option-0-1')" 
              label="Option 1"
              @change="(checked) => onSelectionChange('option-0-1', checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has('option-0-2')" 
              label="Option 2"
              @change="(checked) => onSelectionChange('option-0-2', checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has('option-0-3')" 
              label="Option 3"
              @change="(checked) => onSelectionChange('option-0-3', checked)"
              style="padding: 6px 0;"
            />
          </template>
        </FilterItem>
      </Filter>
    `,
  }),
};

export const SingleSubfilter: Story = {
  args: {
    title: "Filter",
    defaultOpen: true,
    subfilterCount: 1,
  },
  render: (args) => ({
    components: { Filter, FilterItem, CheckboxWithLabel },
    setup() {
      const handleSave = () => {
        alert("Filters saved!");
      };

      return { args, handleSave };
    },
    template: `
      <Filter v-bind="args" @save="handleSave">
        <FilterItem label="Filter 1" :index="0">
          <template #default="{ selections: itemSelections, onSelectionChange }">
            <CheckboxWithLabel 
              :checked="itemSelections.has('option-0-1')" 
              label="Option 1"
              @change="(checked) => onSelectionChange('option-0-1', checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has('option-0-2')" 
              label="Option 2"
              @change="(checked) => onSelectionChange('option-0-2', checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has('option-0-3')" 
              label="Option 3"
              @change="(checked) => onSelectionChange('option-0-3', checked)"
              style="padding: 6px 0;"
            />
          </template>
        </FilterItem>
      </Filter>
    `,
  }),
};

export const MultipleSubfilters: Story = {
  args: {
    title: "Filter",
    defaultOpen: true,
    subfilterCount: 4,
  },
  render: (args) => ({
    components: { Filter, FilterItem, CheckboxWithLabel },
    setup() {
      const subfilterCount = ref(args.subfilterCount);

      const handleSave = () => {
        alert("Filters saved!");
      };

      const getSubfilterItems = () => {
        const items = [];
        for (let i = 0; i < subfilterCount.value; i++) {
          items.push(i);
        }
        return items;
      };

      return { args, subfilterCount, handleSave, getSubfilterItems };
    },
    template: `
      <Filter v-bind="args" @save="handleSave">
        <FilterItem v-for="i in getSubfilterItems()" :key="i" :label="'Filter ' + (i + 1)" :index="i">
          <template #default="{ selections: itemSelections, onSelectionChange }">
            <CheckboxWithLabel 
              :checked="itemSelections.has(\`option-\${i}-1\`)" 
              label="Option 1"
              @change="(checked) => onSelectionChange(\`option-\${i}-1\`, checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has(\`option-\${i}-2\`)" 
              label="Option 2"
              @change="(checked) => onSelectionChange(\`option-\${i}-2\`, checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has(\`option-\${i}-3\`)" 
              label="Option 3"
              @change="(checked) => onSelectionChange(\`option-\${i}-3\`, checked)"
              style="padding: 6px 0;"
            />
          </template>
        </FilterItem>
      </Filter>
    `,
  }),
};

export const Interactive: Story = {
  args: {
    title: "Filter",
    defaultOpen: true,
    subfilterCount: 3,
  },
  render: (args) => ({
    components: { Filter, FilterItem, CheckboxWithLabel },
    setup() {
      const subfilterCount = ref(args.subfilterCount);
      const savedSelections = ref<Map<number, Set<string>>>(new Map());

      const handleSave = () => {
        const totalCount = Array.from(savedSelections.value.values()).reduce(
          (sum, set) => sum + set.size,
          0
        );
        alert(
          `Filters saved! Total active selections: ${totalCount}\n\nSubfilter selections: ${
            subfilterCount.value > 0
              ? Array.from({ length: subfilterCount.value })
                  .map((_, i) => {
                    const count = savedSelections.value.get(i)?.size || 0;
                    return `Filter ${i + 1}: ${count} selection(s)`;
                  })
                  .join(", ")
              : "None"
          }`
        );
      };

      const handleSelectionChange = (
        filterIndex: number,
        selections: Set<string>
      ) => {
        savedSelections.value.set(filterIndex, new Set(selections));
      };

      const getSubfilterItems = () => {
        const items = [];
        for (let i = 0; i < subfilterCount.value; i++) {
          items.push(i);
        }
        return items;
      };

      return {
        args,
        subfilterCount,
        handleSave,
        handleSelectionChange,
        getSubfilterItems,
        savedSelections,
      };
    },
    template: `
      <Filter v-bind="args" @save="handleSave">
        <FilterItem 
          v-for="i in getSubfilterItems()" 
          :key="i" 
          :label="'Filter ' + (i + 1)" 
          :index="i"
          @selection-change="handleSelectionChange"
        >
          <template #default="{ selections: itemSelections, onSelectionChange }">
            <CheckboxWithLabel 
              :checked="itemSelections.has(\`option-\${i}-1\`)" 
              label="Option 1"
              @change="(checked) => onSelectionChange(\`option-\${i}-1\`, checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has(\`option-\${i}-2\`)" 
              label="Option 2"
              @change="(checked) => onSelectionChange(\`option-\${i}-2\`, checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has(\`option-\${i}-3\`)" 
              label="Option 3"
              @change="(checked) => onSelectionChange(\`option-\${i}-3\`, checked)"
              style="padding: 6px 0;"
            />
          </template>
        </FilterItem>
      </Filter>
    `,
  }),
};
