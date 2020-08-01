<template>
  <article
    class="post-item"
    :class="$store.state.postView === 'grid' ? 'grid-item' : null"
    @click="selectPostId(post.id)"
  >
    <div class="post-item_info">
      <h1 class="truncated">
        {{ post.title }}
      </h1>
      <span>{{ post.userName }}</span>
      <p class="multi-truncated">
        {{ post.body }}
      </p>
    </div>
    <div class="post-item_thumbnail">
      <img v-if="post.image" :src="post.image" alt="Post Thumbnail Image" />
      <div v-else>Loading...</div>
    </div>
  </article>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PostItem",
  props: ["post"],
  methods: {
    ...mapActions(["selectPostId"]),
  },
};
</script>

<style lang="scss" scoped>
.post-item {
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr max-content;
  margin: 1rem auto;
  padding: 3px;

  &_info {
    margin: 0 1rem;
  }

  &_thumbnail {
    display: flex;
    justify-content: center;
    height: 150px;
    width: 150px;
    background-color: #dd1239;
    margin: auto;

    div {
      margin: auto;
      color: white;
    }
  }

  @media only screen and (max-width: 992px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 1rem 0.5rem;
    height: auto;
  }
}

.grid-item {
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 1rem 0.5rem;
    height: auto;
    /* width: 270px; */
  }
}

.truncated {
  margin: 1rem auto;
  width: 200px;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.multi-truncated {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
