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
  },
} as Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    title: "Filter",
    defaultOpen: false,
  },
  render: (args) => ({
    components: { Filter, FilterItem, CheckboxWithLabel },
    setup() {
      return { args };
    },
    template: `
      <Filter v-bind="args">
        <FilterItem label="Filter 1" :index="0" />
      </Filter>
    `,
  }),
};

export const WithSingleSubfilter: Story = {
  args: {
    title: "Filter",
    defaultOpen: true,
  },
  render: (args) => ({
    components: { Filter, FilterItem, CheckboxWithLabel },
    setup() {
      const selections = ref({
        filter1: {
          option1: false,
          option2: false,
          option3: false,
        },
      });

      const handleFilterSave = (filterIndex: number, selections: Set<string>) => {
        console.log(`Filter ${filterIndex} saved with selections:`, selections);
      };

      return { args, selections, handleFilterSave };
    },
    template: `
      <Filter v-bind="args" @subfilter-save="handleFilterSave">
        <FilterItem label="Filter 1" :index="0" @save="handleFilterSave">
          <template #default="{ selections: itemSelections, onSelectionChange }">
            <CheckboxWithLabel 
              :checked="itemSelections.has('option1')" 
              label="Option 1"
              @change="(checked) => onSelectionChange('option1', checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has('option2')" 
              label="Option 2"
              @change="(checked) => onSelectionChange('option2', checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has('option3')" 
              label="Option 3"
              @change="(checked) => onSelectionChange('option3', checked)"
              style="padding: 6px 0;"
            />
          </template>
        </FilterItem>
      </Filter>
    `,
  }),
};

export const WithMultipleSubfilters: Story = {
  args: {
    title: "Filter",
    defaultOpen: true,
  },
  render: (args) => ({
    components: { Filter, FilterItem, CheckboxWithLabel },
    setup() {
      const handleFilterSave = (filterIndex: number, selections: Set<string>) => {
        console.log(`Filter ${filterIndex} saved with selections:`, selections);
      };

      return { args, handleFilterSave };
    },
    template: `
      <Filter v-bind="args" @subfilter-save="handleFilterSave">
        <FilterItem label="Filter 1" :index="0" @save="handleFilterSave">
          <template #default="{ selections: itemSelections, onSelectionChange }">
            <CheckboxWithLabel 
              :checked="itemSelections.has('filter1-option1')" 
              label="Option 1"
              @change="(checked) => onSelectionChange('filter1-option1', checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has('filter1-option2')" 
              label="Option 2"
              @change="(checked) => onSelectionChange('filter1-option2', checked)"
              style="padding: 6px 0;"
            />
          </template>
        </FilterItem>
        <FilterItem label="Filter 2" :index="1" @save="handleFilterSave">
          <template #default="{ selections: itemSelections, onSelectionChange }">
            <CheckboxWithLabel 
              :checked="itemSelections.has('filter2-option1')" 
              label="Option A"
              @change="(checked) => onSelectionChange('filter2-option1', checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has('filter2-option2')" 
              label="Option B"
              @change="(checked) => onSelectionChange('filter2-option2', checked)"
              style="padding: 6px 0;"
            />
          </template>
        </FilterItem>
        <FilterItem label="Filter 3" :index="2" @save="handleFilterSave">
          <template #default="{ selections: itemSelections, onSelectionChange }">
            <CheckboxWithLabel 
              :checked="itemSelections.has('filter3-option1')" 
              label="Option X"
              @change="(checked) => onSelectionChange('filter3-option1', checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has('filter3-option2')" 
              label="Option Y"
              @change="(checked) => onSelectionChange('filter3-option2', checked)"
              style="padding: 6px 0;"
            />
          </template>
        </FilterItem>
        <FilterItem label="Filter 4" :index="3" @save="handleFilterSave">
          <template #default="{ selections: itemSelections, onSelectionChange }">
            <CheckboxWithLabel 
              :checked="itemSelections.has('filter4-option1')" 
              label="Option Alpha"
              @change="(checked) => onSelectionChange('filter4-option1', checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has('filter4-option2')" 
              label="Option Beta"
              @change="(checked) => onSelectionChange('filter4-option2', checked)"
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
  },
  render: (args) => ({
    components: { Filter, FilterItem, CheckboxWithLabel },
    setup() {
      const selections = ref(new Map());

      const handleFilterSave = (filterIndex: number, filterSelections: Set<string>) => {
        selections.value.set(filterIndex, filterSelections);
        alert(`Filter ${filterIndex} saved! Total active filters: ${getTotalCount()}`);
      };

      const getTotalCount = () => {
        let total = 0;
        selections.value.forEach((set) => {
          total += set.size;
        });
        return total;
      };

      return { args, handleFilterSave, selections };
    },
    template: `
      <Filter v-bind="args" @subfilter-save="handleFilterSave">
        <FilterItem label="Category 1" :index="0" @save="handleFilterSave">
          <template #default="{ selections: itemSelections, onSelectionChange }">
            <CheckboxWithLabel 
              :checked="itemSelections.has('cat1-a')" 
              label="Type A"
              @change="(checked) => onSelectionChange('cat1-a', checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has('cat1-b')" 
              label="Type B"
              @change="(checked) => onSelectionChange('cat1-b', checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has('cat1-c')" 
              label="Type C"
              @change="(checked) => onSelectionChange('cat1-c', checked)"
              style="padding: 6px 0;"
            />
          </template>
        </FilterItem>
        <FilterItem label="Category 2" :index="1" @save="handleFilterSave">
          <template #default="{ selections: itemSelections, onSelectionChange }">
            <CheckboxWithLabel 
              :checked="itemSelections.has('cat2-small')" 
              label="Small"
              @change="(checked) => onSelectionChange('cat2-small', checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has('cat2-medium')" 
              label="Medium"
              @change="(checked) => onSelectionChange('cat2-medium', checked)"
              style="padding: 6px 0;"
            />
            <CheckboxWithLabel 
              :checked="itemSelections.has('cat2-large')" 
              label="Large"
              @change="(checked) => onSelectionChange('cat2-large', checked)"
              style="padding: 6px 0;"
            />
          </template>
        </FilterItem>
      </Filter>
    `,
  }),
};
