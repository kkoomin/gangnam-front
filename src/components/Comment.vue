<template>
  <article class="comment">
    <h1>{{ comment.email }}</h1>
    <span>"{{ comment.name }}"</span>
    <p>{{ comment.body }}</p>
  </article>
</template>

<script>
export default {
  name: "Comment",
  props: ["comment"],
};
</script>

<style lang="scss" scoped>
.comment {
  /* border-bottom: 1px solid black; */
  padding: 0 0.3rem;
  margin-bottom: 2.5rem;
  h1 {
    font-size: 1.1rem;
    margin: 1rem auto 0.5rem auto;
  }
  p {
    margin: 0.7rem auto;
  }
}
</style>
