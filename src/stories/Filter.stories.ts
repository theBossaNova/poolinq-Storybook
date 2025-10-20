import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, computed } from "vue";
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

const createSubfilterOptions = (index: number) => {
  const options = [
    { id: `option-${index}-1`, label: "Option 1" },
    { id: `option-${index}-2`, label: "Option 2" },
    { id: `option-${index}-3`, label: "Option 3" },
  ];
  return options;
};

const createSubfilterTemplate = (index: number) => `
  <FilterItem label="Filter ${index + 1}" :index="${index}">
    <template #default="{ selections: itemSelections, onSelectionChange }">
      <CheckboxWithLabel 
        :checked="itemSelections.has('option-${index}-1')" 
        label="Option 1"
        @change="(checked) => onSelectionChange('option-${index}-1', checked)"
        style="padding: 6px 0;"
      />
      <CheckboxWithLabel 
        :checked="itemSelections.has('option-${index}-2')" 
        label="Option 2"
        @change="(checked) => onSelectionChange('option-${index}-2', checked)"
        style="padding: 6px 0;"
      />
      <CheckboxWithLabel 
        :checked="itemSelections.has('option-${index}-3')" 
        label="Option 3"
        @change="(checked) => onSelectionChange('option-${index}-3', checked)"
        style="padding: 6px 0;"
      />
    </template>
  </FilterItem>
`;

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
      <div style="display: flex; gap: 16px;">
        <div>
          <label style="color: #e6e1f3; display: block; margin-bottom: 8px;">
            Subfilter Count: {{ args.subfilterCount }}
          </label>
          <input 
            v-model.number="args.subfilterCount"
            type="range"
            min="1"
            max="6"
            style="width: 100%; margin-bottom: 16px;"
          />
        </div>
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
      </div>
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
      const subfilterCount = ref(args.subfilterCount);

      const handleSave = () => {
        alert("Filters saved!");
      };

      return { args, subfilterCount, handleSave };
    },
    template: `
      <div style="display: flex; gap: 16px;">
        <div>
          <label style="color: #e6e1f3; display: block; margin-bottom: 8px;">
            Subfilter Count: {{ subfilterCount }}
          </label>
          <input 
            v-model.number="subfilterCount"
            type="range"
            min="1"
            max="6"
            style="width: 150px; margin-bottom: 16px;"
          />
        </div>
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
      </div>
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
      <div style="display: flex; gap: 16px;">
        <div>
          <label style="color: #e6e1f3; display: block; margin-bottom: 8px;">
            Subfilter Count: {{ subfilterCount }}
          </label>
          <input 
            v-model.number="subfilterCount"
            type="range"
            min="1"
            max="6"
            style="width: 150px; margin-bottom: 16px;"
          />
        </div>
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
      </div>
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

      const handleSelectionChange = (filterIndex: number, selections: Set<string>) => {
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
      <div style="display: flex; gap: 32px;">
        <div>
          <div style="color: #e6e1f3; margin-bottom: 16px;">
            <label style="display: block; margin-bottom: 8px;">
              Subfilter Count: <strong>{{ subfilterCount }}</strong>
            </label>
            <input 
              v-model.number="subfilterCount"
              type="range"
              min="1"
              max="6"
              style="width: 150px; margin-bottom: 16px;"
            />
          </div>
          <div style="color: #e6e1f3; margin-top: 24px; padding: 12px; background: #363a3e; border-radius: 6px;">
            <div style="font-weight: 700; margin-bottom: 8px;">Active Selections:</div>
            <div v-for="i in getSubfilterItems()" :key="i" style="font-size: 12px; margin-bottom: 4px;">
              Filter {{ i + 1 }}: <strong>{{ (savedSelections.get(i)?.size || 0) }} selected</strong>
            </div>
          </div>
        </div>
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
      </div>
    `,
  }),
};
