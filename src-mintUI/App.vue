<template>
  <mt-button type="primary" @click.native="handleClick" style="width: 100%">Test</mt-button>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  methods: {
    handleClick () {
      Toast('提示信息')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
