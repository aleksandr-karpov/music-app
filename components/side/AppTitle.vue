<script setup lang="ts">
const { title } = defineProps<{
  title: string;
}>();
</script>

<template>
  <h1
      :data-short="title[0].toUpperCase()"
      class="app-title"
  >
    {{ title }}
  </h1>
</template>

<style lang="scss">
@use "assets/styles/variables" as *;

.app-title {
  color: $color-text-light-bg;
  font-size: $font-size-title-md;
  font-weight: $font-weight;
  line-height: $line-height;
  margin: 0 16px;
}

@media (max-width: $breakpoint-md) {
  .app-title {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
    margin: 0;

    &::before {
      content: attr(data-short);
      font-size: $font-size-title-md;
    }
  }
}
</style>