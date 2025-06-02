<script setup lang="ts">
import Carousel from "~/components/base/Carousel.vue";
import Card from "~/components/base/Card.vue";
import ContentShowcase from "~/components/showcases/base/ContentShowcase.vue";
import type { DataType, PlaylistData } from "~/types/data";

const baseURL = useRuntimeConfig().public.baseURL || '';
const { data, error } = useFetch<DataType>(`${baseURL}/data.json`, { server: false });
let playlists = ref<PlaylistData[] | null>();

watch(data, (newData) => {
  if (newData) {
    playlists.value = data.value.playlists;
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
      v-if="playlists"
      title="Title"
      subheading="Subheading"
      class="playlists-showcase"
  >
    <Carousel :scrollAmount="264">
      <div class="playlists-showcase__blocks">
        <Card
            v-for="playlist in playlists" :key="playlist.name"
            :img_src="playlist.img_src"
            img_width="232"
            img_height="232"
            :img_label="playlist.title"
            :title="playlist.title"
            :description="playlist.description"
        />
      </div>
    </Carousel>
  </ContentShowcase>
</template>

<style scoped lang="scss">
.playlists-showcase {

  &__blocks {
    display: flex;
    gap: 32px;
  }
}
</style>
