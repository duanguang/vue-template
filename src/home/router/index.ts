import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld1 from '../components/HelloWorld.vue'
import HelloWorld from '../components/Hello'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/vue',
      name: 'Hello1',
      component: HelloWorld1
    }
  ]
})
