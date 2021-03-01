<template>
<div id="detail">
  <!-- 顶部栏 -->
  <detail-nav-bar class="detail-nav"></detail-nav-bar>
  <!-- 轮播图 -->
  <detail-swiper :images="topImages"></detail-swiper>
  <!-- 商品信息 -->
  <detail-goods-info :goods="goods"></detail-goods-info>
  <!-- 店铺信息 -->
  <detail-shop-info :shop="shop"></detail-shop-info>
  <!-- 商品详情信息 -->
  <detail-goods-detail-info :detail-info="detailInfo"></detail-goods-detail-info>
  <!-- 商品参数信息 -->
  <detail-goods-params :goodsparams="goodsparams"></detail-goods-params>
  <!-- 商品评论 -->
  <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
  <!-- 推荐商品 -->
  <good-list :goods="recommends"></good-list>
  <!-- 底部栏 -->
  <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
</div>
</template>

<script>
import DetailNavBar from 'views/detail/DetailComps/DetailNavBar.vue';
import {getDetail,getRecommends,Goods,Shop,GoodsParams}  from 'network/detail.js'; 
import DetailSwiper from 'views/detail/DetailComps/DetailSwiper.vue';
import DetailGoodsInfo from './DetailComps/DetailGoodsInfo.vue';
import DetailShopInfo from './DetailComps/DetailShopInfo.vue';
import DetailGoodsDetailInfo from './DetailComps/DetailGoodsDetailInfo.vue';
import DetailGoodsParams from './DetailComps/DetailGoodsParams.vue';
import DetailCommentInfo from './DetailComps/DetailCommentInfo.vue';
import GoodList from '../../components/content/goodslist/GoodList.vue';
import DetailBottomBar from './DetailComps/DetailBottomBar';


export default {
    name:'Detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailGoodsInfo,
        DetailShopInfo,
        DetailGoodsDetailInfo,
        DetailGoodsParams,
        DetailCommentInfo,
        getRecommends,
        GoodList,
        DetailBottomBar
    },
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        goodsparams:{},
        commentInfo:{},
        recommends:{}

      }
    },
    created(){
      // 1、保存传进来的ID
      this.iid = this.$route.params.iid;
      // 2、根据ID请求详情数据
      getDetail(this.iid).then((res) => {
        const data = res.result;
        //3、获取轮播图
        this.topImages = data.itemInfo.topImages; 
        // 4、获取商品信息
        const goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        this.goods = goods;
        // 5、获取店铺信息
        const shop = new Shop(data.shopInfo);
        this.shop = shop;
        // 6、获取商品详情数据
        this.detailInfo = data.detailInfo;
        // 7、获取商品参数
        const goodsparams = new GoodsParams(data.itemParams.info,data.itemParams.rule);
        this.goodsparams = goodsparams;
        // 获取商品评论
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0];
        }  
      })
       //3、 获取推荐商品
        getRecommends().then(res => {
          console.log(res);
          this.recommends = res.data.list;
        })
    },
    methods:{
      addCart(){
        const product = {};
        product.iid = this.iid;
        product.title = this.goods.title;
        product.image = this.topImages[0];
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        this.$store.dispatch('addCart',product);
      }
    }
}
</script>

<style lang="scss" scoped>
#detail{
  padding:1.2rem 0;
  overflow: y;
  .detail-nav{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
    background-color: #fff;
  }
}


</style>