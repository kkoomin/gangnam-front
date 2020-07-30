<template>
  <article class="post-item">
    <h1>{{ $store.state.posts[0].title }}</h1>
    <span>{{ $store.state.posts[0].userName }}</span>
    <p>{{ $store.state.posts[0].body }}</p>
    <img
      src="https://via.placeholder.com/150/771796"
      alt="Post Thumbnail Image"
    />
  </article>
</template>

<script>
export default {
  name: "PostItem",
};
</script>

<style scoped>
.post-item {
  border: 1px solid black;
}
</style>
