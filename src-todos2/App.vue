<template>
  <div class="todo-container">
    <div  class="todo-wrap">
      <!--<TodoHeader @addTodo="addTodo"></TodoHeader>--><!--给TodoHeader标签对象绑定addTodo事件监听-->
      <TodoHeader ref="header"></TodoHeader>
      <TodoList :todos="todos"></TodoList>
      <TodoFooter>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll">
        <span slot="count">已完成{{completeSize}}/全部{{todos.length}}</span>
        <button slot="deleteComplete" class="btn btn-danger" v-show="completeSize>0" @click="deleteCompleteTodos">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import PubSub from 'pubsub-js'
import storageUtil from './util/StorageUtil'
export default {
  data () {
    return {
      // 从localstory读取todos
      todos: storageUtil.readTodes()
    }
  },
  computed: {
    completeSize () {
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    },

    isAllCheck: {
      get () {
        return this.completeSize === this.todos.length && this.completeSize > 0
      },

      set (value) {
        this.selectAllTodos(value)
      }
    }
  },
  mounted () { // 执行异步代码
    // 给<TodoHeader></TodoHeader>绑定addTodo事件监听
    // this.$on('addTodo', this.addTodo) // 给APP绑定的监听，不对
    this.$refs.header.$on('addTodo', this.addTodo)

    // 订阅消息
    PubSub.subscribe('deleteTodo', (msg, index) => {
      this.deleteTodo(index)
    })
  },
  watch: {
    todos: {
      deep: true, // 深度监视
      /* handler: function (value) {
        // 将todos最新值的JSON数据，保存到localStorage
        storageUtil.saveTodos(value)
      } */
      handler: storageUtil.saveTodos
      // 上面简写等于下面：传递一个函数给handler
      /* handler: function (todos) {
        window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
      } */
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
