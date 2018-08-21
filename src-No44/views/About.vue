<template>
  <div>
    <h2>About</h2>
    <p>{{msg}}</p>
    <input type="text">
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
