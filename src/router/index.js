import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory'
import MyCategory from '../views/Category/MyCategory'
import SignUp from '../views/Product/SignUp.vue'
import SignIn from '../views/Product/SignIn.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
path: '/admin/category/add',
name: 'AddCategory',
component: AddCategory
  },
  {
    path: '/admin/mycategory',
    name: 'MyCategory',
    component: MyCategory
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
      },
      {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
      },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
