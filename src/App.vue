<template>
  <div id="app">
    <Form></Form>
  </div>
</template>

<script>
import Form from './components/form/Form';

export default {
  name: 'App',
  components: {
    Form
  }
}
</script>

<style>
body {
  margin:0;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #E7E7E7;
}
</style>
