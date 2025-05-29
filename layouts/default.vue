<template>
  <div class="default-layout">
    <SideBar class="default-layout__sidebar"/>
    <main class="default-layout__main-view vertical-scroll-area">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  height: 100%;

  &__main-view {
    flex: 1;
    height: 100%;
  }
}
</style>