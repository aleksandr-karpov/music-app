<template>
  <div class="default-layout">
    <SideBar class="default-layout__sidebar"/>
    <main class="default-layout__main-view">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
.default-layout {
  display: flex;
  height: 100%;
  overflow: hidden;

  &__sidebar {
    flex-shrink: 0;
  }

  &__main-view {
    flex: 1;
    min-width: 0;
    overflow-y: auto;
  }
}
</style>