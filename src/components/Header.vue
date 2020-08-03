<template>
  <header>
    <h1>Gangnam Writer</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
header {
  h1 {
    max-width: max-content;
    margin: 4rem auto;
    font-size: 2.5rem;
    background-image: linear-gradient(to right, #dd123bb9, #dd123bb9);
    background-position: bottom left;
    background-repeat: no-repeat;
    background-size: 100% 1.2rem;
    transition: 0.3s ease-in-out;
  }
}
</style>
