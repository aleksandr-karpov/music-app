<script setup lang="ts">
const { img_src, img_width, img_height, title, description } = defineProps<{
  img_src: string;
  img_width: string;
  img_height: string;
  img_label?: string;
  title: string;
  description: string;
}>();

const baseURL = useRuntimeConfig().public.baseURL || '';
</script>

<template>
  <div class="card">
    <img
        :src="`${baseURL}${img_src}`"
        :alt="`${title} image`"
        :width="img_width"
        :height="img_height"
        class="card__img"
    >
    <div
        v-if="img_label"
        class="card__img-label"
    >
      {{ img_label }}
    </div>
    <div class="card__info">
      <div class="card__title">{{ title }}</div>
      <div class="card__description">{{ description }}</div>
    </div>
  </div>
</template>

<style lang="scss">
@use "assets/styles/variables" as *;

.card {
  position: relative;
  gap: 12px;
  width: fit-content;
  cursor: pointer;
  flex-shrink: 0;

  &, &__info {
    display: flex;
    flex-direction: column;
  }

  &__img {
    border-radius: 8px;
  }

  &__img-label {
    position: absolute;
    top: 16px;
    left: 16px;
    color: $color-text-dark-bg;
    font-size: 32px;
    font-weight: $font-weight-base;
    pointer-events: none;
  }

  &__title {
    color: $color-text-light-bg;
    font-size: $font-size-title-md;
    font-weight: $font-weight-base;
    line-height: $line-height-base;
  }

  &__description {
    color: #454545;
    font-size: $font-size-base;
    line-height: $line-height-base;
  }
}
</style>
