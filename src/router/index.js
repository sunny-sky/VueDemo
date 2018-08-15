/* 路由器模块 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
import MessageDetail from '../views/MessageDetail'

Vue.use(VueRouter)

export default new VueRouter({
  // n个路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          // path: '/news', // path最左侧的/永远代表根路径
          path: '/home/news',
          component: News
        },
        {
          path: 'message', // 简化写法
          component: Message,
          children: [
            {
              path: '/home/message/detail/:id',
              component: MessageDetail
            }
          ]
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
