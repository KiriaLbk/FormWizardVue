<template>
  <form>
    <router-view></router-view>
  </form>
</template>

<script>

export default {
  name: "Forms",
  methods: {
  }
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
    width: 29%;
    background-color: white;
}
@media screen and (max-width: 800px) {
form {
    width: 50%;
}
}
@media screen and (max-width: 500px) {
form {
    width: 70%;
}
}
</style>