import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const ROOT_URL = "https://jsonplaceholder.typicode.com";

export default new Vuex.Store({
  state: {
    selectedPost: null,
    postNumber: 8,
    postView: "list",
    posts: null,
  },
  getters: { renderPosts: (state) => state.posts.splice(0, state.postNumber) },
  mutations: {
    setPosts: (state, posts) => (state.posts = posts),
    setNumber: (state, number) => (state.postNumber = number),
    setView: (state, view) => (state.postView = view),
    setSelectedPost: (state, id) => (state.selectedPost = id),
  },
  actions: {
    async getPosts({ commit }) {
      const url = `${ROOT_URL}/posts`;
      const images = [
        "https://via.placeholder.com/150/771796",
        "https://via.placeholder.com/150/92c952",
        "https://via.placeholder.com/150/56a8c0",
      ];

      // * 한번에 다 가져오기 posts *
      const original_post_data = await axios.get(url).then((res) => res.data);

      const post_data = await Promise.all(
        original_post_data.map(async (post) => {
          const user_name = await axios
            .get(`${ROOT_URL}/users/${post.userId}`)
            .then((res) => res.data.name);
          return {
            ...post,
            userName: user_name,
            image: images[Math.floor(Math.random() * 2)],
          };
        })
      );

      console.log(post_data);
      commit("setPosts", post_data);
      // * 8개씩 끊어서 가져오기 posts *
      // 여기서는 쿼리에 따로 8개씩 요청하는 방법이 없는데, 하나씩 가져오는 요청을 8번 보내야하나?? 효율성??
    },
    changePostView({ commit }, view) {
      commit("setView", view);
    },
    changePostNumber({ commit }, number) {
      commit("setNumber", number);
    },
    selectPost({ commit }, id) {
      commit("setSelectedPost", id);
    },
  },
  modules: {},
});
