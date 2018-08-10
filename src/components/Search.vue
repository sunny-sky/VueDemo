<template>
  <section class="jumbotron">
    <h3 class="jumbotron--heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName">
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  data () {
    return {
      searchName: ''
    }
  },
  methods: {
    search () {
      const searchName = this.searchName.trim()
      if (searchName) {
        // 发布搜索的消息，发布=触发动作
        PubSub.publish('search', searchName)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
