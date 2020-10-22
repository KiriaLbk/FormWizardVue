<template>
  <div class="textblock">
    <span>Choose a city</span>
    <div>
      <select v-model="choosen">
        <option disabled value="">Please select one</option>
        <option>Dortmund</option>
        <option>Berlin</option>
        <option>Gerta</option>
      </select>
    </div>
    <button type="button" @click="nextForm">Next</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          choosen: ''
      }
  },
  methods: {
    nextForm() {
      if (this.choosen !== '') {
       this.$router.push({name: 'third'})
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
  justify-content: center;
  width: 170px;
}
select {
  width:150px;
  height:30px;
}
button {
    height: 20px;
    width:70px;
}
span {
  font-size: 20px;
}
</style>