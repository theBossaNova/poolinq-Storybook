<template>
<div :class="tabBarClasses">
    <template v-for="(item, index) in items" :key="index">
      <div
        v-if="style === 'filled' && index > 0"
        class="tab-bar__separator"
      ></div>
      <TabItem
        :type="type"
        :style="style"
        :state="activeIndex === index ? 'active' : 'default'"
        :label="item.label"
        :icon="item.icon"
        @click="handleTabClick(index)"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import TabItem from "./TabItem.vue";

interface TabItemData {
  label?: string;
  icon?: boolean;
}

interface Props {
  type?: "text" | "icon";
  style?: "underline" | "filled";
  items?: TabItemData[];
  defaultActiveIndex?: number;
}

interface Emits {
  (event: "change", index: number): void;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  style: "underline",
  items: () => [
    { label: "Item" },
    { label: "Item" },
    { label: "Item" },
  ],
  defaultActiveIndex: 0,
});

const emit = defineEmits<Emits>();

const activeIndex = ref(props.defaultActiveIndex);

const tabBarClasses = computed(() => ({
  "tab-bar": true,
  [`tab-bar--${props.style}`]: true,
  [`tab-bar--${props.type}`]: true,
}));

const handleTabClick = (index: number) => {
  activeIndex.value = index;
  emit("change", index);
};

defineExpose({
  activeIndex,
  setActiveIndex: (index: number) => {
    activeIndex.value = index;
  },
});
</script>

<style lang="scss" scoped>
.tab-bar {
  display: flex;
  align-items: stretch;
  width: 100%;
  max-width: 100%;
  gap: 0;
}

.tab-bar--text :deep(.tab-item) {
  flex: 1 0 0;
  min-width: 0;
}

.tab-bar--icon :deep(.tab-item) {
  flex: 0 0 auto;
}

.tab-bar--filled {
  gap: 0;
}

.tab-bar--filled :deep(.tab-item--text) {
  flex: 1 0 0;
}

.tab-bar--filled :deep(.tab-item--icon) {
  flex: 0 0 auto;
}

.tab-bar--underline {
  border-bottom: 1px solid #363a3e;
  gap: 0;
}

.tab-bar__separator {
  width: 1px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 2px;
  background: #222325;
}
</style>
