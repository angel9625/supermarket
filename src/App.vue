<template>
  <div id="app">
    <keep-alive>
       <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>  
      <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// import TabBar from 'components/common/tabbar/TabBar'
import MainTabBar from './components/content/maintabbar/MainTabBar'

export default {
  name:'App',
  components:{
    // TabBar,
    MainTabBar,
  }
  
}

</script>

<style lang="scss">

</style>
