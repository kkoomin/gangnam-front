<template>
  <article
    class="post-item"
    :class="$store.state.post.postView === 'grid' ? 'grid-item' : null"
    @click="selectPostId(post.id)"
  >
    <div class="post-item_info">
      <h1 class="post-item_info-title truncated">
        {{ post.title }}
      </h1>
      <span>{{ post.userName }}</span>
      <p class="post-item_info-body multi-truncated">
        {{ post.body }}
      </p>
    </div>
    <div class="post-item_thumbnail">
      <img v-if="post.image" :src="post.image" alt="Post Thumbnail Image" />
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
  box-shadow: 0 8px 10px 1px rgba(41, 37, 33, 0.178);

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  }

  display: grid;
  display: -ms-grid;

  grid-template: auto / 1fr 150px;
  -ms-grid-columns: 1fr 150px;
  -ms-grid-column-span: 1;

  margin: 1rem auto;
  padding: 3px;

  &_info {
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      box-sizing: border-box;
    }
    margin: 0 1rem;
    &-title {
      font-size: 1.2rem;
    }

    &-body {
      text-align: left;
    }
  }

  &_thumbnail {
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      box-sizing: border-box;
      width: 150px;
    }
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
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    box-sizing: border-box;
    width: calc(100% / 4.3);
  }

  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 1rem 0.5rem;
    height: auto;
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
