<template>
  <div id="app">
    <Header />
    <main>
      <PostContainer v-if="$store.state.post.selectedPostId" />
      <ListContainer v-else />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PostContainer from "./components/PostContainer.vue";
import ListContainer from "./components/ListContainer.vue";
export default {
  name: "App",
  components: {
    Header,
    PostContainer,
    ListContainer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 3rem auto;
}
</style>
