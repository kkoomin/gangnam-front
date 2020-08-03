<template>
  <section class="list-container">
    <FilterBar />
    <article
      class="list"
      :class="$store.state.post.postView === 'grid' ? 'grid' : null"
      v-if="renderPosts"
    >
      <PostItem v-for="post in renderPosts" :key="post.id" :post="post" />
    </article>

    <div class="list-loading-message" v-if="isNextFetch || !renderPosts">
      LOADING...
    </div>
  </section>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import FilterBar from "./FilterBar.vue";
import PostItem from "./PostItem.vue";

export default {
  name: "ListContainer",
  components: {
    FilterBar,
    PostItem,
  },
  computed: {
    ...mapGetters(["renderPosts", "isNextFetch"]),
  },
  methods: {
    ...mapActions(["getPosts", "getNextPosts"]),
    ...mapMutations(["setPosts", "setView", "setNumber", "setIsNextFetch"]),
    onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 1
      ) {
        this.loadNextPosts();
      }
    },
    loadNextPosts() {
      console.log("this is the bottom!");
      this.setIsNextFetch(true);
      this.getNextPosts();
    },
  },
  created() {
    this.getPosts();
    if (localStorage.getItem("view"))
      this.setView(localStorage.getItem("view"));
    if (localStorage.getItem("number"))
      this.setNumber(localStorage.getItem("number") * 1);
  },
  mounted() {
    document.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.onScroll);
    this.setPosts(null);
    this.setIsNextFetch(false);
  },
};
</script>

<style lang="scss">
.list-container {
  max-width: 1000px;
  margin: 1.5rem auto;
}

.grid {
  @media only screen and (min-width: 992px) {
    display: grid;
    grid-template: auto / 1fr 1fr 1fr 1fr;
    -ms-grid-columns: 1fr 1fr 1fr 1fr;
  }
}

.list-loading-message {
  margin: 3rem auto;
}
</style>
