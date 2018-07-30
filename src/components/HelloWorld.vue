<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        msg:'Hello Vue Component.This is LH\'s first Vue project'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .msg{
    color:red;
    fdnt-size: 30px;
  }
</style>
