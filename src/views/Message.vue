<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <a href="???">{{message.title}}</a>
      </li>
    </ul>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
