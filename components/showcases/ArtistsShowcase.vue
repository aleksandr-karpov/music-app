<script setup lang="ts">
import Carousel from "~/components/base/Carousel.vue";
import Card from "~/components/base/Card.vue";
import ContentShowcase from "~/components/showcases/base/ContentShowcase.vue";
import type { DataType, ArtistData } from "~/types/data";

const baseURL = useRuntimeConfig().public.baseURL || '';
const { data, error } = useFetch<DataType>(`${baseURL}/data.json`, { server: false });
let artists = ref<ArtistData[] | null>();

watch(data, (newData) => {
  if (newData) {
    artists.value = data.value.artists;
  }
});

watch(error, (newError) => {
  if (newError) {
    console.error('Error while receiving JSON:', error.value);
  }
});
</script>

<template>
  <ContentShowcase
      v-if="artists"
      title="Title"
      subheading="Subheading"
      class="artists-showcase"
  >
    <Carousel :scrollAmount="176">
      <div class="artists-showcase__blocks">
        <Card
            v-for="(artist, index) in artists" :key="index"
            :img_src="artist.img_src"
            img_width="144"
            img_height="144"
            :title="artist.name"
            :description="artist.description"
        />
      </div>
    </Carousel>
  </ContentShowcase>
</template>

<style lang="scss">
.artists-showcase {

  &__blocks {
    display: flex;
    gap: 32px;
  }
}
</style>
