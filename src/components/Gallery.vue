<template>
  <div v-scroll="onScroll" class="v-gallery">
    <v-filter />

    <v-container :fluid="!isScrolling" class="transition-swing">
      <v-row :no-gutters="!isScrolling" class="transition-swing mx-n4">
        <v-col
          v-for="(pic, i) in paginatedPictures"
          :key="pic.src"
          cols="12"
          md="4"
          class="transition-swing"
        >
          <gallery-card :src="pic.src" @click.stop="setPicture(i)" />
        </v-col>
      </v-row>
    </v-container>

    <v-responsive
      v-if="paginatedPictures.length < pictures.length"
      class="white py-12 mx-n3 text-center"
    >
      <v-btn text @click="page++">
        Load More Works
      </v-btn>
    </v-responsive>

    <gallery-carousel v-model="dialog" />
  </div>
</template>

<script>
// Utilities
let image = 247;
const categories = [
  "All",
  "Interior",
  "Buildings",
  "Fashion",
  "Nature",
  "Lifestyle"
];

export default {
  name: "Gallery",

  components: {
    VFilter: () => import("@/components/Filter"),
    GalleryCard: () => import("@/components/GalleryCard"),
    GalleryCarousel: () => import("@/components/GalleryCarousel")
  },

  data: () => ({
    dialog: false,
    isScrolling: false,
    page: 1,
    categories,
    filter: "All",
    picture: null,
    pictures: Array.from({ length: 30 }).map(() => {
      image++;

      return {
        src: `https://picsum.photos/id/${image}/600/350`,
        category: categories[Math.floor(Math.random() * categories.length)]
      };
    })
  }),

  computed: {
    filteredPictures() {
      return this.filter === "All"
        ? this.pictures
        : this.pictures.filter(p => p.category === this.filter);
    },
    paginatedPictures() {
      return this.filteredPictures.slice(0, this.page * 12);
    }
  },

  methods: {
    onScroll() {
      this.isScrolling = window.pageYOffset > 50;
    },
    setPicture(index) {
      this.picture = index;

      this.$nextTick(() => (this.dialog = true));
    }
  }
};
</script>

<style lang="sass">
.gallery
  // max-width: 1280px
</style>
