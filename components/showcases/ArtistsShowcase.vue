<script setup lang="ts">
import Carousel from "~/components/base/Carousel.vue";
import ArtistCard from "~/components/cards/ArtistCard.vue";
import type { DataType, ArtistData } from "~/types/data";

const baseURL = useRuntimeConfig().public.baseURL || '';
const { data, error } = useFetch<DataType>(`${baseURL}/data.json`, { server: false });
const  artists = ref<ArtistData[] | null>(null);

watch(data, (newData) => {
  if (newData) {
    artists.value = data?.value.artists;
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
      v-if="artists"
      class="base-showcase artists-showcase"
  >
    <div class="base-showcase__description">
      <h3 class="base-showcase__title">Title</h3>
      <h4 class="base-showcase__subheading">Subheading</h4>
    </div>
    <div class="base-showcase__content">
      <Carousel :scrollAmount="176">
        <div class="artists-showcase__blocks">
          <ArtistCard
              v-for="(artist, index) in artists"
              :key="index"
              :img_src="artist.img_src"
              :title="artist.name"
              :description="artist.description"
          />
        </div>
      </Carousel>
    </div>
  </section>
</template>

<style lang="scss">
.artists-showcase {

  &__blocks {
    display: flex;
    gap: 32px;
  }
}
</style>
