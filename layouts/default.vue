<template>
  <div class="default-layout">
    <aside class="default-layout__sidebar"></aside>
    <main class="default-layout__main-view vertical-scroll-area">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  height: 100%;

  &__sidebar {
    width: 255px;
  }

  &__main-view {
    flex: 1;
    height: 100%;
  }
}
</style>