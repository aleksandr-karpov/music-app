<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ActionBtn from "~/components/base/buttons/ActionBtn.vue";

const { scrollAmount = 220 } = defineProps<{
  scrollAmount: number;
}>();

const carousel = ref<HTMLDivElement | null>(null);
const hover = ref<boolean>(false);
const canScroll = ref<boolean>(false);

function scroll(direction: number): void {
  carousel.value?.scrollBy({
    left: scrollAmount * direction,
    behavior: 'smooth',
  });
}

function checkScroll(): void {
  const el = carousel.value;
  if (el) {
    canScroll.value = el.scrollWidth > el.clientWidth;
  }
}

onMounted(() => {
  checkScroll();
  window.addEventListener('resize', checkScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScroll);
})
</script>

<template>
  <div
      class="carousel"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
  >
    <ActionBtn
        v-show="hover && canScroll"
        label="←"
        class="carousel__btn-left"
        @click="scroll(-1)"
    />

    <div ref="carousel" class="carousel__content">
      <slot />
    </div>

    <ActionBtn
        v-show="hover && canScroll"
        label="→"
        class="carousel__btn-right"
        @click="scroll(1)"
    />
  </div>
</template>

<style scoped lang="scss">
.carousel {
  position: relative;
  width: 100%;

  &__content {
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__btn-left, &__btn-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    transition: opacity 0.3s;
  }

  &__btn-left {
    left: 0;
  }

  &__btn-right {
    right: 0;
  }
}

@media (pointer: coarse) {
  .carousel {

    &__btn-left, &__btn-right {
      display: none;
    }
  }
}
</style>
