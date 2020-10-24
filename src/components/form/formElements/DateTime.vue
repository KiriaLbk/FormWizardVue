<template>
  <div class="textblock">
    <span>Select meeting day</span>
    <div>
        <input v-model="date" type="date">
    </div>
    <button type="button" @click="nextForm">Next</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          date: ''
      }
  },
  methods: {
    nextForm() {
       if(this.date !== '') {
         this.$router.push({name: 'end'})
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
  flex-direction: column;
  height: 60px;
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