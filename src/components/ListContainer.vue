<template>
  <section>
    <PostItem />
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

<style></style>
