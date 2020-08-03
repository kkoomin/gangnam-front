<template>
  <article class="filter-bar">
    <div class="view-filter filter-content">
      <button
        class="view-btn"
        :class="postView === 'list' ? 'clicked' : null"
        @click="changePostView('list')"
      >
        List
      </button>
      <button
        class="view-btn"
        :class="postView === 'grid' ? 'clicked' : null"
        @click="changePostView('grid')"
      >
        Grid
      </button>
    </div>
    <div class="number-filter filter-content">
      <button
        class="number-btn"
        :class="postNumber === 8 ? 'clicked' : null"
        @click="onPostNumberChange(8)"
      >
        8개씩 보기
      </button>
      <button
        class="number-btn"
        :class="postNumber === 16 ? 'clicked' : null"
        @click="onPostNumberChange(16)"
      >
        16개씩 보기
      </button>
    </div>
  </article>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "FilterBar",
  methods: {
    ...mapActions(["changePostView", "changePostNumber", "getPosts"]),
    ...mapMutations(["setIsNextFetch", "setPosts"]),
    onPostNumberChange(num) {
      this.changePostNumber(num);
      this.setIsNextFetch(false);
      this.setPosts([]);
      this.getPosts();
    },
  },
  computed: {
    ...mapGetters(["postView", "postNumber"]),
  },
};
</script>

<style lang="scss">
.filter-bar {
  margin: 2rem auto;
  display: flex;
  justify-content: center;

  .filter-content {
    margin: 0 0.5rem;
  }

  .view-filter {
    @media only screen and (max-width: 992px) {
      display: none;
    }
  }
}

.view-btn {
  all: unset;
  cursor: pointer;
  margin: 2px;
  height: 2rem;
  width: 6rem;
  border: 1.5px solid #dd1239;
  border-radius: 5px;
}

.number-btn {
  all: unset;
  cursor: pointer;
  margin: 2px;
  height: 2rem;
  width: 6rem;
  border: 1.5px solid #dd1239;
  border-radius: 5px;
}

.clicked {
  background: #dd1239;
  color: white;
  box-shadow: 0 3px 8px rgba(78, 75, 72, 0.322);
}
</style>
