<template>
  <div class="textblock">
    <span>Introduce yourself</span>
    <div class="name">
      <div class="input">
        <label for="textBlock">First Name</label>
        <input
        v-model="firstName"
        id="textBlock"
        type="text"
        />
      </div>
      <div class="input">
        <label for="textBlock">Last Name</label>
        <input
        v-model="lastName"
        id="textBlock"
        type="text"
        />
      </div>
    </div>
    <button type="button" @click="nextForm">Next</button>
  </div>
</template>

<script>
export default {
  name: "TextBox",
  data() {
      return {
          firstName: '',
          lastName: ''
      }
  },
  methods: {
    nextForm() {
      if (this.firstName && this.lastName) {
        this.$router.push({name: 'second'})
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
.name {
  display: flex;
  flex-direction: column;
  height: 8%;
  justify-content: space-evenly;
}
.input {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
}
button {
    height: 20px;
    width: 70px;
}
span {
  font-size: 20px;
}
</style>