<script setup lang="ts">
const { msg } = defineProps<{
  msg: string;
}>();
</script>

<template>
  <h3 class="stub">
    {{ msg }}
  </h3>
</template>

<style lang="scss">
@use "assets/styles/variables" as *;

.stub {
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color-text-light-bg;
  font-size: $font-size-title-lg;
  font-weight: $font-weight-base;
}
</style>
