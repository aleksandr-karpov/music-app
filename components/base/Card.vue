<script setup lang="ts">
const { img_src, img_width, img_height, title = '', description = '' } = defineProps<{
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
    <span
        v-if="img_label"
        class="card__img-label"
    >
      {{ img_label }}
    </span>
    <div class="card__info">
      <span class="card__title">{{ title }}</span>
      <span class="card__description">{{ description }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
    border-radius: $border-radius;
  }

  &__img-label {
    position: absolute;
    top: 16px;
    left: 16px;
    color: $color-text-dark-bg;
    font-size: 32px;
    font-weight: $font-weight;
    pointer-events: none;
  }

  &__title {
    color: $color-text-light-bg;
    font-size: $font-size-title-md;
    font-weight: $font-weight;
    line-height: $line-height;
  }

  &__description {
    color: #454545;
    font-size: $font-size-base;
    line-height: $line-height;
  }
}
</style>
