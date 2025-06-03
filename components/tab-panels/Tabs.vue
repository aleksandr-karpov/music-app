<script setup lang="ts">
import type { Tab } from "~/types/tabs";

const { tabs } = defineProps<{
  tabs: Tab[];
}>()
const model: ReturnType<typeof defineModel> = defineModel();

function changeActiveTab (tabName: Tab['name']): void {
  model.value = tabName;
}
</script>

<template>
  <div class="tabs">
    <a
        v-for="tab in tabs"
        :class="['tabs__item', { 'tabs__item--active': tab.name === model }]"
        @click='changeActiveTab(tab.name)'
    >
      {{ tab.label }}
    </a>
  </div>
</template>

<style lang="scss">
@use "assets/styles/variables" as *;

.tabs {
  display: inline-block;
  height: 40px;
  background-color: $color-highlight-bg;
  border-radius: $border-radius;
  padding: 8px;

  &__item {
    padding: 4px 12px;
    font-size: $font-size-base;
    color: $color-text-light-bg;
    cursor: pointer;

    &--active {
      background-color: $color-bg-light;
      border-radius: 4px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>