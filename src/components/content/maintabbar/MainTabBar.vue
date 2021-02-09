<template>
<div>
    <router-view></router-view>
    <tab-bar>
        <tab-bar-item path="/home">
            <img slot="item-icon" src="~assets/img/tabbar/home/home.svg">
            <img slot="item-icon-active" src="~assets/img/tabbar/home/home_active.svg">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category">
            <img slot="item-icon" src="~assets/img/tabbar/category/category.svg">
            <img slot="item-icon-active" src="~assets/img/tabbar/category/category_active.svg">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/shopcart">
            <img slot="item-icon" src="~assets/img/tabbar/cart/shopcart.svg">
            <img slot="item-icon-active" src="~assets/img/tabbar/cart/shopcart_active.svg">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <img slot="item-icon" src="~assets/img/tabbar/profile/profile.svg">
            <img slot="item-icon-active" src="~assets/img/tabbar/profile/profile_active.svg">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</div>
  
</template>

<script>
import TabBar from '../../common/tabbar/TabBar.vue'
import TabBarItem from '../../common/tabbar/TabBarItem.vue'
export default {
    name:'MainTabBar',
    components:{
        TabBarItem,
        TabBar

    }

        
}
</script>

<style>

</style>