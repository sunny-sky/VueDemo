<template>
  <div>
    <p>click {{count}} times, count is {{eventOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },

  computed: {
    eventOrOdd () {
      return this.count % 2 === 0 ? '偶数' : '奇数'
    }
  },

  methods: {
    // 增加
    increment () {
      const count = this.count
      this.count = count + 1
    },
    decrement () {
      const count = this.count
      this.count = count - 1
    },
    incrementIfOdd () {
      const count = this.count
      if (count % 2 === 1) {
        this.count = count + 1
      }
    },
    incrementAsync () {
      setTimeout(() => {
        const count = this.count
        this.count = count + 1
      }, 500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
