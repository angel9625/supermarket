<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  components: { 
    NavBar 
    },
    name:'Home'

}
</script>

<style lang="less" >
// @import 'assets/css/base.less';
@background-color:rgb(255,129,152);
.home-nav{
  font-size: 0.5rem;
  color: white;
  background-color:@background-color;
}

</style>