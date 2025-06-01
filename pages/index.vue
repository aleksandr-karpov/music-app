<script setup lang="ts">
import TabPanels from "~/components/tab-panels/TabPanels.vue";
import Tabs from "~/components/tab-panels/Tabs.vue";
import ActionBtn from "~/components/base/buttons/ActionBtn.vue";
import type { Tab } from "~/types/tabs";
import Stub from "~/components/base/Stub.vue";
import PlaylistsShowcase from "~/components/showcases/PlaylistsShowcase.vue";
import ArtistsShowcase from "~/components/showcases/ArtistsShowcase.vue";

const tabs_collection = [
  {
    name: 'tab1',
    label: 'Tab',
  },
  {
    name: 'tab2',
    label: 'Tab',
  },
  {
    name: 'tab3',
    label: 'Tab',
  },
];
const activeTab = ref<Tab['name']>(tabs_collection[0].name);
</script>

<template>
  <section class="home-page">
    <div class="home-page__navigation">
      <Tabs :tabs="tabs_collection" v-model="activeTab" />
      <ActionBtn label="Call to action"/>
    </div>
    <TabPanels
        :tabs="tabs_collection"
        :active-tab="activeTab"
        class="home-page__tab-panels vertical-scroll-area"
    >
      <template v-slot:tab1>
        <div class="home-page__showcases">
          <PlaylistsShowcase />
          <ArtistsShowcase />
        </div>
      </template>
      <template v-slot:tab2>
        <Stub msg="This tab is empty"/>
      </template>
      <template v-slot:tab3>
        <Stub msg="This tab is empty"/>
      </template>
    </TabPanels>
  </section>
</template>

<style scoped lang="scss">
@use "assets/styles/variables" as *;

.home-page {
  width: 100%;
  height: 100%;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__navigation, &__tab-panels {
    padding: 0 80px;
  }

  &__navigation {
    display: flex;
    justify-content: space-between;
  }

  &__tab-panels {
    width: 100%;
    height: 100%;
  }

  &__showcases {
    display: flex;
    flex-direction: column;
    gap: 96px;
  }
}

@media (max-width: $breakpoint-md) {
  .home-page {

    &__navigation, &__tab-panels {
      padding: 0 24px;
    }
  }
}
</style>
