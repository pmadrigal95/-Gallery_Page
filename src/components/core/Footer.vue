<template>
  <v-footer class="justify-center" color="grey lighten-2" height="156" inset>
    <div class="text-center">
      <v-btn v-for="(icon, i) in icons" :key="i" class="ma-1" icon>
        <v-icon v-text="icon" />
      </v-btn>

      <div class="my-3" />

      <div>
        Copyright &copy; {{ date }}&nbsp;<strong>Ricardo Fernandez</strong>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "CoreFooter",

  data: () => ({
    date: new Date().getFullYear(),
    icons: ["mdi-twitter", "mdi-facebook", "mdi-instagram"]
  })
};
</script>
