<script setup lang="ts">
const { img_src, img_label, title, description } = defineProps<{
  img_src: string;
  img_label?: string;
  title: string;
  description: string;
}>();

const baseURL = useRuntimeConfig().public.baseURL || '';
</script>

<template>
  <div class="base-card">
    <img
        :src="`${baseURL}${img_src}`"
        :alt="`${title} image`"
        class="base-card__img playlist-image"
    >
    <div
        v-if="img_label"
        class="playlist-image__label"
    >
      {{ img_label }}
    </div>
    <div class="base-card__info">
      <div class="base-card__title">{{ title }}</div>
      <div class="base-card__description">{{ description }}</div>
    </div>
  </div>
</template>

<style lang="scss">
@use "assets/styles/variables" as *;

.playlist-image {
  width: 232px;
  height: 232px;

  &__label {
    position: absolute;
    top: 16px;
    left: 16px;
    color: $color-text-dark-bg;
    font-size: 32px;
    font-weight: $font-weight-base;
    pointer-events: none;
  }
}
</style>
