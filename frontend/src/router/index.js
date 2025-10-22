import Vue from 'vue'
import Router from 'vue-router'
import ListBook from '@/components/ListBook.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListBook',
      component: ListBook
    }
  ]
})
