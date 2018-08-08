<template>
  <div class="todo-container">
    <div  class="todo-wrap">
      <TodoHeader :addTodo="addTodo"></TodoHeader>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"></TodoList>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  data () {
    return {
      // 从localstory读取todos
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    }
  },
  watch: {
    todos: {
      deep: true, // 深度监视
      handler: function (value) {
        // 将todos最新值的JSON数据，保存到localStorage
        window.localStorage.setItem('todos_key', JSON.stringify(value))
      }
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },

    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    // 全选/全不选
    selectAllTodos (check) {
      this.todos.forEach(todo => (todo.complete = check))
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
