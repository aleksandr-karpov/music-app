<script setup lang="ts">
const { title, subheading } = defineProps<{
  title: string;
  subheading: string;
}>();
</script>

<template>
  <section class="content-showcase">
    <div class="content-showcase__description">
      <h3 class="content-showcase__title">{{ title }}</h3>
      <h4 class="content-showcase__subheading">{{ subheading }}</h4>
    </div>
    <div class="content-showcase__content">
      <slot />
    </div>
  </section>
</template>

<style lang="scss">
@use "assets/styles/variables" as *;

.content-showcase {
  gap: 32px;

  &, &__description {
    display: flex;
    flex-direction: column;
  }

  &__description {
    gap: 8px;
  }

  &__title {
    color: $color-text-light-bg;
    font-size: $font-size-title-lg;
    font-weight: $font-weight-base;
    line-height: 110%;
  }

  &__subheading {
    color: #454545;
    font-size: $font-size-base;
    line-height: $line-height-base;
    font-weight: normal;
  }
}
</style>
