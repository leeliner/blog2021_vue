import Vue from 'vue'
import VueRouter from 'vue-router'
import Sign from "@/views/Sign";
import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import BlogEdit from '../views/BlogEdit.vue'
import BlogDetail from '../views/BlogDetail.vue'
/*import SignH from '@/static/SignIn/index.html'*/
// import aaa from "@/views/aaa";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: {name: "Blogs"}
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  /*{
    path: '/aaa',
    name: 'aaa',
    component: aaa
  },*/
  {
    path: '/Sign',
    name: 'Sign',  //注释
    component: Sign //组件
  },
  ,
  /*{
    path: '/SignH',
    name: 'Signhtml',  //注释
    component: SignH //组件
  },*/
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blog/add',
    name: 'BlogAdd',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blog/:blogId/edit',
    name: 'BlogEdit',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
