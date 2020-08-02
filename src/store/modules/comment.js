import axios from "axios";

const ROOT_URL = "https://jsonplaceholder.typicode.com";

const state = { comments: null };

const getters = { comments: (state) => state.comments };

const mutations = {
  setComments: (state, comments) => (state.comments = comments),
};

const actions = {
  async getCommentsByPost({ commit }, id) {
    const url = `${ROOT_URL}/posts/${id}/comments`;
    const comments = await axios.get(url).then((res) => res.data);
    commit("setComments", comments);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
