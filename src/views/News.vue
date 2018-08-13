<template>
  <div>
    <ul>
      <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsArr: ['news001', 'news002', 'news003', 'news004']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
