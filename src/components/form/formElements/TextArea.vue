<template>
  <div class="textblock">
    <span>Tell us about yourself</span>
    <div>
      <textarea v-model="message" placeholder="Place to post"></textarea>
    </div>
    <button type="button" @click="nextForm">Next</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          message: ''
      }
  },
  methods: {
    nextForm() {
       if(this.message !== '') {
         this.$router.push({name: 'fifth'})
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
  width: 260px;
  height: 60px;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 500px) {
.textblock div  {
    width: 100%;
}
}
textarea {
  width: 210px;
}
button {
    height: 20px;
    width:70px;
}
span {
  font-size: 20px;
}
</style>