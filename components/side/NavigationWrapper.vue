<script setup lang="ts">
import type { NavigationGroup } from "~/types/navigation";

const { title, items } = defineProps<NavigationGroup>();
const route = useRoute();
</script>

<template>
  <nav class="navigation-wrapper" aria-labelledby="navigation-wrapper__title">
    <h2
        v-if="title"
        class="navigation-wrapper__title"
        id="navigation-wrapper__title"
    >
      {{ title }}
    </h2>
    <ul
        v-if="items"
        class="navigation-wrapper__list"
    >
      <li
          v-for="item in items"
          :key="item.navPath"
          :title="item.title"
          :class="['navigation-wrapper__item', { 'navigation-wrapper__item--active': route.path === item.navPath }]"
          @click.prevent="navigateTo(item.navPath)"
      >
        <component
            :is="item.icon"
            class="navigation-wrapper__item-icon"
        />
        <a
            :href="item.navPath"
            class="navigation-wrapper__link"
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use "assets/styles/variables" as *;

.navigation-wrapper {
  &, &__list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__title, &__item {
    width: 100%;
    height: 40px;
    padding: 8px 16px;
    color: $color-text-light-bg;
    font-size: $font-size-base;
  }

  &__title {
    font-weight: $font-weight;
  }

  &__item {
    display: flex;
    gap: 16px;
    cursor: pointer;

    &:hover, &--active {
      background-color: $color-highlight-bg;
      border-radius: $border-radius;
    }
  }

  &__item-icon {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: $breakpoint-md) {
  .navigation-wrapper {
    align-items: center;

    &__title, &__link {
      display: none;
    }

    &__item {
      padding: 8px;
    }
  }
}
</style>