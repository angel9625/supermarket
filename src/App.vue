<template>
  <div id="app">
      <main-tab-bar v-if="$route.meta.showTab"></main-tab-bar>
        <keep-alive exclude="Detail">
           <router-view></router-view>
        </keep-alive>
  </div>
</template>

<script>
import MainTabBar from './components/content/maintabbar/MainTabBar'

export default {
  name:'App',
  components:{
    MainTabBar,
  }
  
}

</script>

<style lang="scss">

</style>
