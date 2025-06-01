<template>
  <div class="default-layout">
    <SideBar class="default-layout__sidebar"/>
    <main class="default-layout__main-view">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  height: 100%;

  &__sidebar {
    flex-shrink: 0;
  }

  &__main-view {
    flex: 1;
    height: 100%;
    min-width: 0;
  }
}
</style>