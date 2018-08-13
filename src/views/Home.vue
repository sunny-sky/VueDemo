<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
          <router-link to="/home/news">News</router-link>
          <router-link to="/home/message">Message</router-link>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
