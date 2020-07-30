<template>
  <section class="filter-bar">
    <div class="view-filter filter-content">
      <button
        class="view-btn"
        :class="$store.state.postView === 'list' ? 'clicked' : null"
        @click="changePostView('list')"
      >
        List
      </button>
      <button
        class="view-btn"
        :class="$store.state.postView === 'grid' ? 'clicked' : null"
        @click="changePostView('grid')"
      >
        Grid
      </button>
    </div>
    <div class="number-filter filter-content">
      <button
        class="number-btn"
        :class="$store.state.postNumber === 8 ? 'clicked' : null"
        @click="changePostNumber(8)"
      >
        8개씩 보기
      </button>
      <button
        class="number-btn"
        :class="$store.state.postNumber === 16 ? 'clicked' : null"
        @click="changePostNumber(16)"
      >
        16개씩 보기
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterBar",
  methods: {
    ...mapActions(["changePostView", "changePostNumber"]),
  },
};
</script>

<style lang="scss">
.filter-bar {
  display: flex;
  justify-content: flex-end;

  .filter-content {
    margin: 0 0.5rem;
  }
}

.view-btn {
  all: unset;
  cursor: pointer;
  margin: 2px;
  height: 2rem;
  width: 3rem;
  border: 2px solid #dd1239;
}

.number-btn {
  all: unset;
  cursor: pointer;
  margin: 2px;
  height: 2rem;
  width: 6rem;
  border: 2px solid #dd1239;
}

.clicked {
  background: #dd1239;
  color: white;
  box-shadow: 0 3px 8px rgba(78, 75, 72, 0.322);
}

//     background: #dd1239;
</style>
