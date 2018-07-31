<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add></Add>
      <List :comments="comments"></List>
    </div>
  </div>
</template>

<script>
import Add from './components/Add.vue'
import List from './components/List.vue'

export default {
  data () {
    return {
      comments: [
        {
          name: 'BOB',
          content: 'Vue还不错'
        },
        {
          name: 'Cat',
          content: 'Vue so easy'
        },
        {
          name: 'BOB',
          content: 'Vue so so'
        }
      ]
    }
  },

  components: {
    Add,
    List
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
