import Vue from "vue";
import Vuex from "vuex";

import comment from "./modules/comment";
import post from "./modules/post";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  modules: { comment, post },
});
