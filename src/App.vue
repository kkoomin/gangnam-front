<template>
  <div id="app">
    <Header />
    <FilterBar />
    <ListContainer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import FilterBar from "./components/FilterBar.vue";
import ListContainer from "./components/ListContainer.vue";
export default {
  name: "App",
  components: {
    Header,
    FilterBar,
    ListContainer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
