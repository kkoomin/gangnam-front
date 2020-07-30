<template>
  <section
    class="list-container"
    :class="$store.state.postView === 'grid' ? 'grid' : null"
    v-if="$store.state.posts"
  >
    <PostItem
      v-for="post in $store.getters.renderPosts"
      :key="post.id"
      :post="post"
    />
  </section>
</template>

<script>
import { mapActions } from "vuex";
import PostItem from "./PostItem.vue";

export default {
  name: "ListContainer",
  components: {
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

<style>
.list-container {
  margin-top: 1.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
