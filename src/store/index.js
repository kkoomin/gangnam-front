import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const ROOT_URL = "https://jsonplaceholder.typicode.com";

export default new Vuex.Store({
  state: {
    selectedPostId: null,
    selectedPost: null,
    comments: null,
    postNumber: 8,
    postView: "list",
    posts: null,
    isLoaded: false,
  },
  getters: {
    renderPosts: (state) => state.posts.splice(0, state.postNumber),
    post: (state) => state.selectedPost,
    comments: (state) => state.comments,
  },
  mutations: {
    setPosts: (state, posts) => (state.posts = posts),

    setNumber: (state, number) => (state.postNumber = number),
    setView: (state, view) => (state.postView = view),

    setSelectedPostId: (state, id) => (state.selectedPostId = id),
    setSelectedPost: (state, post) => (state.selectedPost = post),
    setComments: (state, comments) => (state.comments = comments),
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
      const original_posts_data = await axios.get(url).then((res) => res.data);

      const posts_data = await Promise.all(
        original_posts_data.map(async (post) => {
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

      console.log(posts_data);
      commit("setPosts", posts_data);
      // * 8개씩 끊어서 가져오기 posts *
      // 여기서는 쿼리에 따로 8개씩 요청하는 방법이 없는데, 하나씩 가져오는 요청을 8번 보내야하나?? 효율성??
    },
    async getPost({ commit }, id) {
      const url = `${ROOT_URL}/posts/${id}`;
      const post_data = await axios.get(url).then((res) => res.data);
      commit("setSelectedPost", post_data);
    },
    async getCommentsByPost({ commit }, id) {
      const url = `${ROOT_URL}/posts/${id}/comments`;
      const comments = await axios.get(url).then((res) => res.data);
      commit("setComments", comments);
    },
    changePostView({ commit }, view) {
      commit("setView", view);
      localStorage.setItem("view", view);
    },
    changePostNumber({ commit }, number) {
      commit("setNumber", number);
      localStorage.setItem("number", number);
    },
    selectPostId({ commit }, id) {
      commit("setSelectedPostId", id);
    },
  },
  modules: {},
});
