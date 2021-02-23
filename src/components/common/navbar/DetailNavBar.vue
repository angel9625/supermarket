<template>
    <nav-bar class="detail-nav">
    <div slot="left" @click="backClick">
      <img src="~assets/img/common/back.svg">
    </div>
    <div class="center" slot="center">
      <span v-for="(item,index) in tittles" :key="index" :class="{detactive:index === currentIndex}" @click="btnClick(index)">{{item}}</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: { NavBar },
    name:'DetailNavBar',
    data(){
        return{
            tittles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        btnClick(index){
            this.currentIndex = index;
        },
        backClick(){
            this.$router.back();
        }
    }

}
</script>

<style lang="scss" scoped>
.detail-nav{
  img{
    width: 0.5rem;
    height: 0.5rem;
    padding-top: 0.35rem;
  }
  .center{
      @include pri-flex($justify-content:space-around);
  }
  .detactive{
      color:$main-color;
  }
}
</style>