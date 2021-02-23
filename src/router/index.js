
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('../views/home/Home.vue')
const ShopCart = () => import('../views/cart/ShopCart.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () =>import('../views/detail/Detail.vue')


const routes = [
  {
    path:'',
    redirect:'/home',
    meta:{
      keepAlive:true
    }
  },
  {
    path:'/home',
    component:Home,
    meta:{
      keepAlive:true
    }
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }

  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
