<script setup lang="ts">
const { img_src, title, description } = defineProps<{
  img_src: string;
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
        class="base-card__img artist-image"
    >
    <div class="base-card__info">
      <div class="base-card__title">{{ title }}</div>
      <div class="base-card__description">{{ description }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.artist-image {
  width: 144px;
  height: 144px;
}
</style>
