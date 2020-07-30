<template>
  <section class="list-container">
    <FilterBar />
    <article
      class="list"
      :class="$store.state.postView === 'grid' ? 'grid' : null"
      v-if="$store.state.posts"
    >
      <PostItem
        v-for="post in $store.getters.renderPosts"
        :key="post.id"
        :post="post"
      />
    </article>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import FilterBar from "./FilterBar.vue";
import PostItem from "./PostItem.vue";

export default {
  name: "ListContainer",
  components: {
    FilterBar,
    PostItem,
  },
  methods: {
    ...mapActions(["getPosts"]),
  },
  created() {
    this.getPosts();
  },
};
</script>

<style lang="scss">
.list-container {
  max-width: 1200px;
  margin: 1.5rem auto;
}

.grid {
  @media only screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
