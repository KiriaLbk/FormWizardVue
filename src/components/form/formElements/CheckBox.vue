<template>
  <div class="textblock">
    <span>What technology do you use ? </span>
    <div>
      <label for="angular">Angular</label>
      <input type="checkbox" id="angular" value="angular" v-model="checkedNames">
      <label for="react">React</label>
      <input type="checkbox" id="react" value="react" v-model="checkedNames">
      <label for="vue">Vue</label>
      <input type="checkbox" id="vue" value="vue" v-model="checkedNames">
    </div>
    <button type="button" @click="nextForm">Next</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          checkedNames: []
      }
  },
  methods: {
    nextForm() {
       if (this.checkedNames.length !== 0) {
         this.$router.push({name: 'fourth'})
       }
    }
  }
};
</script>

<style scoped>
.textblock {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
}
.textblock div {
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 200px;
  justify-content: space-evenly;
}
button {
    height: 20px;
    width:70px;
}
span {
  font-size: 20px;
}
</style>