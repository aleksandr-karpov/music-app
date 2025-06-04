<script setup lang="ts">
import type { NavigationGroup } from "~/types/navigation";

const { title, items } = defineProps<NavigationGroup>();
const route = useRoute();
const baseURL = useRuntimeConfig().public.baseURL || '';
</script>

<template>
  <nav class="navigation-wrapper">
    <h2
        v-if="title"
        class="navigation-wrapper__title"
    >
      {{ title }}
    </h2>
    <ul
        class="navigation-wrapper__list"
    >
      <li
          v-for="item in items"
          :key="item.navPath"
          :title="item.title"
          class="navigation-wrapper__item"
          @click.prevent="navigateTo(item.navPath)"
      >
        <a
            :href="`${baseURL}${item.navPath}`"
            :class="['navigation-link', { 'navigation-link--active': route.path === `/${item.navPath}` }]"
        >
          <component
              :is="item.icon"
              class="navigation-link__icon"
          />
          <div class="navigation-link__title">{{ item.title }}</div>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@use "assets/styles/variables" as *;

.navigation-wrapper {
  &, &__list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__title, .navigation-link {
    width: 100%;
    height: 40px;
    padding: 8px 16px;
    color: $color-text-light-bg;
    font-size: $font-size-base;
  }

  &__title {
    font-weight: $font-weight-base;
  }
}

.navigation-link {
  display: flex;
  gap: 16px;

  &:hover, &--active {
    background-color: $color-highlight-bg;
    border-radius: 8px;
  }

  &__icon {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: $breakpoint-md) {
  .navigation-wrapper {
    align-items: center;

    &__title {
      display: none;
    }
  }

  .navigation-link {
    padding: 8px;

    &__title {
      display: none;
    }
  }
}
</style>
