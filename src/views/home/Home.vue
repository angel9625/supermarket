<template>
  <div id="Home">
    <!-- 头部栏 -->
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
      <!-- 设置轮播 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in banners" :key="index">
        <a :href="image.link">
          <img :src="image.image" />
        </a>
      </van-swipe-item>
    </van-swipe>
    <!-- 推荐信息的展示 -->
    <recommend-view :recommends="recommends"></recommend-view>
    <!-- 中间的图片 -->
    <featrue-view></featrue-view>
    <!-- 页卡 -->
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
    <!-- 商品列表 -->
    <good-list :goods="goods[currenttype].list"></good-list> 
    <back-top></back-top>
  </div>
</template>

<script>
// 方法
import {getHomeMultidata,getGoods} from "network/home.js";
// 公共组件
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from 'components/content/tabcontrol/TabControl.vue';
// 子组件
import RecommendView from './childComps/RecommendView.vue';
import FeatrueView from './childComps/FeatrueView.vue';
import GoodList from '../../components/content/goodslist/GoodList.vue';
import BackTop from '../../components/content/backtop/BackTop';

export default {
  name: "Home",
  components: {
    NavBar,
    RecommendView,
    FeatrueView,
    TabControl,
    GoodList,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{ 
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currenttype:'pop',
      saveY:0
    };
  },
  created() {
    this.getHomeMultidata();
    this.getGoods('pop');
    this.getGoods('new');
    this.getGoods('sell');
  },
  mounted(){
      // 监听滚动到底部
    window.addEventListener("scroll",this.handleScroll);
  },
  activated(){
    window.scrollTo(10,this.saveY);
  },
  deactivated(){
    console.log(this.saveY);
  },
  methods:{
    /*
    *网络请求相关方法
    */
    // 请求轮播数据
    getHomeMultidata(){
      getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    },
    // 请求商品列表
    getGoods(type){
      const page = this.goods[type].page + 1;
      getGoods(type,page).then(res => {   
        // 将请求到的数据列表加到商品列表中
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      } )
    },
    // 上拉加载更多商品列表
    loadMore(){
      this.getGoods(this.currenttype);
    },

    /*
    *监听事件相关方法
    */
    // 切换页卡点击事件
    tabClick(index){
      switch(index){
        case 0:
          this.currenttype = 'pop';
          break;
        case 1:
          this.currenttype = 'new';
          break;
        case 2:
          this.currenttype = 'sell';
          break;
      }
    },
    handleScroll(){
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      this.saveY = scrollTop;
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      if(scrollTop + windowHeight == scrollHeight){
        this.loadMore();
      }     
    } 
  }
};
</script>

<style lang="scss">
#Home{
  padding: 1.2rem 0 0.5rem 0;
}
.home-nav {
  font-size: 0.5rem;
  color: white;
  background-color: $main-color;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
}
// 设置轮播样式
  .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
.tab-control{
  position: sticky;
  top: 1.1rem;
}
</style>
