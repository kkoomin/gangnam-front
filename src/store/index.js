import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const ROOT_URL = "https://jsonplaceholder.typicode.com";

export default new Vuex.Store({
  state: {
    postNumber: 8,
    postView: "list",
    posts: null,
  },
  getters: { renderPosts: (state) => state.posts.splice(0, state.postNumber) },
  mutations: {
    setPosts: (state, posts) => (state.posts = posts),
    setNumber: (state, number) => (state.postNumber = number),
    setView: (state, view) => (state.postView = view),
  },
  actions: {
    async getPosts({ commit }) {
      const url = `${ROOT_URL}/posts`;

      // * 한번에 다 가져오기 posts *
      await axios.get(url).then((res) => {
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

      // * 8개씩 끊어서 가져오기 posts *
      // 여기서는 쿼리에 따로 8개씩 요청하는 방법이 없는데, 하나씩 가져오는 요청을 8번 보내야하나?? 효율성??
    },
    changePostView({ commit }, view) {
      commit("setView", view);
    },
    changePostNumber({ commit }, number) {
      commit("setNumber", number);
    },
  },
  modules: {},
});

// https://via.placeholder.com/150/771796
// https://via.placeholder.com/150/92c952
// https://via.placeholder.com/150/56a8c0
