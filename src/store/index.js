import Vue from "vue";
import Vuex from "vuex";
import pathify from "vuex-pathify";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    links: ["Home", "About me", "Portfolio", "Blog", "Contact"]
  },

  mutations: {
    SET_DRAWER(state, payload) {
      state.drawer = payload;
    }
  },

  plugins: [pathify.plugin]
});
