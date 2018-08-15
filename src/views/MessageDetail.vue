<template>
  <div>
    <p>ID:{{$route.params.id}}</p>
    <ul>
      <li>id:{{messageDetail.id}}</li>
      <li>title:{{messageDetail.title}}</li>
      <li>content:{{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      messageDetail: {}
    }
  },
  mounted () {
    setTimeout(() => {
      const allMessageDetails = [
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
      this.allMessageDetail = allMessageDetails
      const id = this.$route.params.id * 1
      this.messageDetail = allMessageDetails.find(detail => detail.id === id)
    }, 1000)
  },
  watch: {
    $route: function (value) { // 路由路径变化param
      const id = value.params.id * 1
      this.messageDetail = this.allMessageDetail.find(detail => detail.id === id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
