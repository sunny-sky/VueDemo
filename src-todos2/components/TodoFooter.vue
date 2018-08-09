<template>
  <div class="todo-footer">
    <label>
      <!--<input type="checkbox" v-model="isAllCheck">-->
      <slot name="checkAll"></slot>
    </label>
    <span>
      <!--<span>已完成{{completeSize}}</span>/全部{{todos.length}}-->
      <slot name="count"></slot>
    </span>
    <!--<button class="btn btn-danger" v-show="completeSize>0" @click="deleteCompleteTodos">清除已完成任务</button>-->
    <slot name="deleteComplete"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
