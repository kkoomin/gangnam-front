import axios from "axios";

const ROOT_URL = "https://jsonplaceholder.typicode.com";

const state = {
  isNextFetch: false, // 무한스크롤 데이터 로딩인지 여부
  postView: "list",
  postNumber: 8,
  selectedPostId: null,
  selectedPost: null,
  posts: null,
};

const getters = {
  postView: (state) => state.postView,
  postNumber: (state) => state.postNumber,
  renderPosts: (state) => state.posts,
  post: (state) => state.selectedPost,
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  setSelectedPostId: (state, id) => (state.selectedPostId = id),
  setSelectedPost: (state, post) => (state.selectedPost = post),
  setNumber: (state, number) => (state.postNumber = number),
  setView: (state, view) => (state.postView = view),
  setIsNextFetch: (state, boolean) => (state.isNextFetch = boolean),
};

const actions = {
  async getPosts({ commit, state }) {
    const images = [
      "https://via.placeholder.com/150/771796",
      "https://via.placeholder.com/150/92c952",
      "https://via.placeholder.com/150/56a8c0",
    ];

    // * posts 한번에 다 가져오기  *
    // const url = `${ROOT_URL}/posts`;
    // const original_posts_data = await axios.get(url).then((res) => res.data);

    // * 세팅된 post의 수 만큼 posts 가져오기 *

    let promises = [];
    let original_posts_data = [];

    let numberOfCurrentPosts;
    state.isNextFetch
      ? (numberOfCurrentPosts = state.posts.length)
      : (numberOfCurrentPosts = 0);

    for (
      let i = numberOfCurrentPosts + 1;
      i < numberOfCurrentPosts + 1 + state.postNumber;
      i++
    ) {
      const url = `${ROOT_URL}/posts/${i}`;
      const post = axios.get(url).then((res) => res.data);
      promises.push(post);
    }
    await Promise.all(promises)
      .then((res) => {
        res.forEach((promise) => original_posts_data.push(promise));
      })
      .catch((err) => {
        console.log(err);
        alert("더 이상 가져올 데이터가 없습니다");
      });

    // posts들의 작성자 user name 가져오기
    const posts_data = await Promise.all(
      original_posts_data.map(async (post) => {
        const user_name = await axios
          .get(`${ROOT_URL}/users/${post.userId}`)
          .then((res) => res.data.name)
          .catch((err) => {
            console.log(err);
          });
        return {
          ...post,
          userName: user_name,
          image: images[Math.floor(Math.random() * 2)],
        };
      })
    );

    console.log(posts_data);
    const final_data = state.posts
      ? state.posts.concat(posts_data) // nextFetch 일 경우
      : posts_data; // 첫 fetch 일 경우
    commit("setPosts", final_data);
  },
  async getPost({ commit }, id) {
    const url = `${ROOT_URL}/posts/${id}`;
    const post_data = await axios.get(url).then((res) => res.data);
    commit("setSelectedPost", post_data);
  },

  selectPostId({ commit }, id) {
    commit("setSelectedPostId", id);
  },
  changePostView({ commit }, view) {
    commit("setView", view);
    localStorage.setItem("view", view);
  },
  changePostNumber({ commit }, number) {
    commit("setNumber", number);
    localStorage.setItem("number", number);
  },

  //무한 스크롤용 데이터 가져오기 //
  async getNextPosts({ dispatch }) {
    dispatch("getPosts");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
