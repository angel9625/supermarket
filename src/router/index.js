
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
      showTab:true
    }
  },
  {
    path:'/home',
    component:Home,
    meta:{
      showTab:true
    }
  },
  {
    path:'/category',
    component:Category,
    meta:{
      showTab:true
    }
  },
  {
    path:'/shopcart',
    component:ShopCart,
    meta:{
      showTab:true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      showTab:true
    }
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
