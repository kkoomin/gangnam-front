<template>
  <article
    class="post-item"
    :class="$store.state.postView === 'grid' ? 'grid-item' : null"
  >
    <div class="post-item_thumbnail">
      <img
        src="https://via.placeholder.com/150/771796"
        alt="Post Thumbnail Image"
      />
    </div>
    <div class="post-item_info">
      <h1>{{ post.title }}</h1>
      <span>{{ post.userName }}</span>
      <p>{{ post.body }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "PostItem",
  props: ["post"],
};
</script>

<style scoped>
.post-item {
  border: 1px solid black;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 3px;
}

.grid-item {
  display: block;
  margin: 1rem 0.5rem;
  width: auto;
}
</style>
