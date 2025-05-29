<script setup lang="ts">
import AppTitle from "~/components/side/AppTitle.vue";
import NavigationWrapper from "~/components/side/NavigationWrapper.vue";
import type { NavigationGroup } from "~/types/navigation";
import { defineAsyncComponent } from 'vue';

const discoverNavigation: NavigationGroup = {
  title: 'Discover',
  items: [
    {
      title: 'Home',
      icon: defineAsyncComponent(() => import('~/assets/icons/svg/home.svg')),
      navPath: '/',
    },
    {
      title: 'Browse',
      icon: defineAsyncComponent(() => import('~/assets/icons/svg/search.svg')),
      navPath: '/',
    },
    {
      title: 'Radio',
      icon: defineAsyncComponent(() => import('~/assets/icons/svg/radio.svg')),
      navPath: '/',
    },
  ]
}

const libraryNavigation: NavigationGroup = {
  title: 'Library',
  items: [
    {
      title: 'Playlists',
      icon: defineAsyncComponent(() => import('~/assets/icons/svg/list.svg')),
      navPath: '/',
    },
    {
      title: 'Songs',
      icon: defineAsyncComponent(() => import('~/assets/icons/svg/music.svg')),
      navPath: '/',
    },
    {
      title: 'Personal picks',
      icon: defineAsyncComponent(() => import('~/assets/icons/svg/smile.svg')),
      navPath: '/',
    },
  ]
}
</script>

<template>
  <aside class="sidebar">
    <AppTitle
        title="Music app"
        class="sidebar__title"
    />
    <div class="sidebar__navs vertical-scroll-area">
      <NavigationWrapper v-bind="discoverNavigation"/>
      <NavigationWrapper v-bind="libraryNavigation"/>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@use "assets/styles/variables" as *;

.sidebar {
  width: 255px;
  border-right: 1px solid #E0E0E0;
  box-shadow: 1px 0 3px -1px rgba(0, 0, 0, 0.5);
  padding: 24px 0;

  &, &__navs {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__title, &__navs {
    padding: 0 8px;
  }
}

@media (max-width: $breakpoint-md) {
  .sidebar {
    width: 65px;
  }
}
</style>