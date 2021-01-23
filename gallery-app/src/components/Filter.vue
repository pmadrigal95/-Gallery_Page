<template>
  <div>
    <div class="text-center pa-3">
      <v-btn icon @click="showTabs = !showTabs">
        <v-icon>mdi-view-grid</v-icon>
      </v-btn>
    </div>

    <v-expand-transition>
      <v-tabs
        v-if="showTabs"
        v-model="filter"
        background-color="transparent"
        centered
        hide-slider
      >
        <v-tab v-for="(tab, i) in categories" :key="i" :href="`#${tab}`">
          {{ tab }}
        </v-tab>
      </v-tabs>
    </v-expand-transition>
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
  name: "VFilter",

  data: () => ({
    showTabs: false,
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
  })
};
</script>
