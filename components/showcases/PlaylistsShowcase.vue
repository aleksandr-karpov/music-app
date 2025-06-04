<script setup lang="ts">
import Carousel from "~/components/base/Carousel.vue";
import PlaylistCard from "~/components/cards/PlaylistCard.vue";
import type { DataType, PlaylistData } from "~/types/data";

const baseURL = useRuntimeConfig().public.baseURL || '';
const { data, error } = useFetch<DataType>(`${baseURL}/data.json`, { server: false });
const playlists = ref<PlaylistData[] | null>(null);

watch(data, (newData) => {
  if (newData) {
    playlists.value = data?.value.playlists;
  }
});

watch(error, (newError) => {
  if (newError) {
    console.error('Error while receiving JSON:', error?.value);
  }
});
</script>

<template>
  <section
      v-if="playlists"
      class="base-showcase playlists-showcase"
  >
    <div class="base-showcase__description">
      <h3 class="base-showcase__title">Title</h3>
      <h4 class="base-showcase__subheading">Subheading</h4>
    </div>
    <div class="base-showcase__content">
      <Carousel :scrollAmount="264">
        <div class="playlists-showcase__blocks">
          <PlaylistCard
              v-for="playlist in playlists"
              :key="playlist.name"
              :img_src="playlist.img_src"
              :img_label="playlist.title"
              :title="playlist.title"
              :description="playlist.description"
          />
        </div>
      </Carousel>
    </div>
  </section>
</template>

<style lang="scss">
.playlists-showcase {

  &__blocks {
    display: flex;
    gap: 32px;
  }
}
</style>
