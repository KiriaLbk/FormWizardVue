<template>
  <div class="textblock">
    <span class='title'>Choose a city</span>
    <div class='container'>
      <div class="input">
        <input v-model="textInput" type="text" name="text">
        <img v-if="condition" class="down" src="../../../assets/down.png" alt="down" @click="displayList($event.target)">
        <img v-else class="up" src="../../../assets/up.png" alt="up" @click="displayList($event.target)">
      </div>
      <div class="list">
        <span @click="chooseValue($event.target)" v-for="(item, ind) in items" :key="item.key" :class="{'isNone': !num.includes(ind) || condition}">{{item.town}}</span>
      </div>
    </div>
    <button type="button" @click="nextForm">Next</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          condition: true,
          textInput: '',
          alt: '',
          counter: 0,
          count: 0,
          num: [0,1,2],
          items: [
            {
              key: 0,
              town: 'Gerta'
            },
            {
              key: 1,
              town: 'Berlin'
            },
            {
              key: 2,
              town: 'Dortmund'
            }
          ]
      }
  },
  watch: {
    textInput() {
      this.num=[];
      if (this.count === 0) {
        this.displayList('not click');
      }
      if (this.items.filter((item) => item.town.includes(this.textInput))) {
      this.items.filter((item) => item.town.includes(this.textInput)).forEach(element => {
        this.num.push(element.key);
      });
    }
  }
  },
  methods: {
    nextForm() {
      if (this.textInput !== '') {
       this.$router.push({name: 'third'})
      }
    },
    displayList(value) {
      this.counter = (this.alt == 'down' && value == 'not click') ? this.counter : this.counter+1;
      this.alt = value ? value.alt : '';
      this.condition= (this.counter % 2 !== 0) ? false : true;
      this.count = (value == 'not click') ? 1 : 0;
    },
    chooseValue(value) {
      this.textInput = value.innerHTML;
    }
  }
};
</script>

<style scoped>
.textblock {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.container {
  height: 120px;
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: center;
}
@media screen and (max-width: 500px) {

}
.input {
  position: relative;
  height: 25%;
  width: 100%;
}
img {
  height: 19px;
  width: 19px;
  top: 4px;
  position: absolute;
  right: 3px;
}
.isNone {
  display: none !important;
}
input {
  height: 25px;
  width: 96.8%;
  border-radius: 0;
  border-color: #000000;
  padding: 1px 0px 0px 2px;
  margin-right: 1px;
}
.list {
  display: flex;
  flex-direction: column;
  width: 99%;
}
.list span {
  border-bottom: 1px solid #000;
  border-left: 1px solid grey;
  cursor: pointer;
  border-right: 1px solid grey;
  width: 97%;
  padding: 4px 0px 4px 4px;
}
.list span:hover {
  background-color: #E1E1E1;
}
button {
    height: 20px;
    width:70px;
    margin-top: 35px;
}
.title {
  font-size: 20px;
  margin-bottom: 35px;
}
</style>