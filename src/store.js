import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "My Custom Title",
    links: [
      "https://google.com",
      "https://twitter.com",
      "https://instagram.com",
    ],
  },
  getters: {
    countLinks: state => {
      return state.links.length;
    },
  },
  mutations: {
    ADD_LINK: (state, payload) => {
      state.links.push(payload);
    },
  },
  actions: {},
});
