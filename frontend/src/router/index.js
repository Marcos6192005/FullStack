import Vue from 'vue'
import Router from 'vue-router'
import ListBook from '@/components/ListBook.vue'
import EditBook from '@/components/book/EditBook.vue'
import DeleteBook from '@/components/book/DeleteBook.vue'
import NewBook from '@/components/book/NewBook.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListBook',
      component: ListBook
    },
    {
      path: '/edit-book/:bookID',
      name: 'EditBook',
      component: EditBook
    },
    {
      path: '/delete-book/:bookID',
      name: 'DeleteBook',
      component: DeleteBook
    },
    {
      path: '/new-book',
      name: 'NewBook',
      component: NewBook
    }
  ]
})
