<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论吧！</h2>
    <ul class="list-group">
      <Item v-for="(comment, index) in comments" :key="index" :comment="comment"></Item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  props: ['comments'],
  components: {
    Item
  }
}
</script>

<style scoped>
  .reply {
    margin-top: 0px;
  }

  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
