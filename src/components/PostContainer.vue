<template>
  <section class="post-container">
    <article v-if="post">
      <button class="list-btn" @click="selectPostId(null)">목록보기</button>

      <div class="content">
        <h1 class="content-title">{{ post.title }}</h1>
        <span class="content-author">✏️ {{ post.userName }}</span>
        <p class="content-body">{{ post.body }}</p>
      </div>

      <div class="comments" v-if="comments">
        <span class="comments-count">{{ comments.length }}</span>

        <h1>Comments</h1>

        <Comment
          v-for="comment in comments"
          :key="comment.id"
          :comment="comment"
        />
      </div>
    </article>
  </section>
</template>

<script>
import Comment from "./Comment.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "PostContainer",
  components: { Comment },
  computed: {
    ...mapGetters(["post", "comments"]),
  },
  methods: {
    ...mapActions(["selectPostId", "getPost", "getCommentsByPost"]),
    ...mapMutations(["setSelectedPost", "setComments"]),
  },
  created() {
    const id = this.$store.state.post.selectedPostId;
    this.getPost(id);
    this.getCommentsByPost(id);
  },
  beforeDestroy() {
    this.setSelectedPost(null);
    this.setComments(null);
  },
  metaInfo() {
    return {
      title: this.post ? this.post.title : "Loading",
      meta: [{ description: this.post ? this.post.body : "Loading" }],
    };
  },
};
</script>

<style lang="scss" scoped>
.post-container {
  max-width: 1000px;
  margin: 1.5rem auto;

  .content {
    /* border-top: 2px solid black; */
    border-bottom: 1px solid rgb(199, 198, 198);

    /* margin-top: 3rem; */
    /* margin-bottom: 3rem; */
    padding-top: 3rem;
    padding-bottom: 3rem;

    &-title {
      max-width: max-content;
      margin: 2rem auto 1rem auto;
      font-size: 1.4rem;
      background-image: linear-gradient(to right, #dd123bb9, #dd123bb9);
      background-position: bottom left;
      background-repeat: no-repeat;
      background-size: 100% 0.6rem;
    }

    &-author {
      display: block;
      text-align: left;
      font-weight: 500;
    }

    &-body {
      text-align: left;
    }
  }

  .comments {
    text-align: left;
    &-count {
      /* border: 1px solid black; */
      padding: 0.3rem;
      font-weight: 700;
      font-size: 1.2rem;
      color: #dd1239;
    }
    h1 {
      display: inline-block;
    }
  }
}
.list-btn {
  all: unset;
  cursor: pointer;
  margin: 2px;
  height: 2rem;
  width: 5rem;
  border: 2px solid #dd1239;

  &:hover {
    background: #dd1239;
    color: white;
  }
}
</style>
