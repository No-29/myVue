import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/article',
      name: 'Article',
      component: () => import('@/views/article')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/test01',
      name: 'Test01',
      component: () => import('@/views/test01')
    },
    {
      path: '/',
      redirect: '/login',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
