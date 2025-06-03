<script setup lang="ts">
import TabPanels from "~/components/tab-panels/TabPanels.vue";
import Tabs from "~/components/tab-panels/Tabs.vue";
import ActionBtn from "~/components/base/buttons/ActionBtn.vue";
import type { Tab } from "~/types/tabs";
import Stub from "~/components/base/Stub.vue";
import PlaylistsShowcase from "~/components/showcases/PlaylistsShowcase.vue";
import ArtistsShowcase from "~/components/showcases/ArtistsShowcase.vue";

useSeoMeta({
  title: 'Home - Music App',
  ogTitle: 'Home - Music App',
  description: 'This is music app!',
  ogDescription: 'This is music app!',
  ogImage: 'https://i.ibb.co/SXHTNdd3/2025-06-02-06-21-36.png',
});

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
        class="home-page__tab-panels"
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

<style lang="scss">
@use "assets/styles/variables" as *;

.home-page {

  &__navigation {
    position: sticky;
    top: 0;
    padding: 24px 80px;
    display: flex;
    justify-content: space-between;
    background-color: $color-bg-light;
    z-index: 1;
  }

  &__tab-panels {
    padding: 8px 80px 24px;
  }

  &__showcases {
    display: flex;
    flex-direction: column;
    gap: 96px;
  }
}

@media (max-width: $breakpoint-md) {
  .home-page {

    &__navigation {
      padding: 24px;
    }

    &__tab-panels {
      padding: 8px 24px 24px;
    }
  }
}
</style>
