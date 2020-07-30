import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const ROOT_URL = "https://jsonplaceholder.typicode.com";

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: { setPosts: (state, posts) => (state.posts = posts) },
  actions: {
    async getPosts({ commit }) {
      const url = `${ROOT_URL}/posts`;
      const posts = await axios.get(url).then((res) => {
        const post_data = [...res.data];

        // Get user name by post
        post_data.map(async (post) => {
          const user_name = await axios
            .get(`${ROOT_URL}/users/${post.userId}`)
            .then((res) => res.data.name);
          post.userName = user_name;
        });

        console.log(post_data);
        commit("setPosts", post_data);
      });
      return posts;
    },
  },
  modules: {},
});
