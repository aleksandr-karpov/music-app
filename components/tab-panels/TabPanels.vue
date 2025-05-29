<script setup lang="ts">
import type { TabPanels } from "~/types/tabs";

const { tabs, activeTab } = defineProps<TabPanels>();
</script>

<template>
  <div class="tab-panels">
    <div
        v-for="tab in tabs"
        :key="tab.name"
        class="tab-panels__panel"
    >
      <slot
          v-if="$slots[tab.name] && activeTab === tab.name"
          :name="tab.name"
      />
    </div>
  </div>
</template>
