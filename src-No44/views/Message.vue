<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messages: []
    }
  },

  mounted () {
    // 模拟ajax请求从后台获取数据
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: 'massage001',
          content: 'message001 content'
        },
        {
          id: 2,
          title: 'massage002',
          content: 'message002 content'
        },
        {
          id: 3,
          title: 'massage003',
          content: 'message003 content'
        },
        {
          id: 4,
          title: 'massage004',
          content: 'message004 content'
        }
      ]
      this.messages = messages
    }, 1000)
  },

  methods: {
    pushShow (id) {
      this.$router.push(`/home/message/detail/${id}`)
    },

    replaceShow (id) {
      this.$router.replace(`/home/message/detail/${id}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
