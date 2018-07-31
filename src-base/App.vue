<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png" alt="logo">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  .logo {
    width: 200px;
    height:200px;
  }
</style>
