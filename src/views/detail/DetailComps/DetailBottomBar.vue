<template>
<div class="bottom-bar">
    <div class="bar-item-left">
        <div class="bar-item">
            <div class="item-img cs"></div>
            <div class="item-text">客服</div>
        </div>
        <div class="bar-item">
            <div class="item-img shop"></div>
            <div class="item-text">店铺</div>
        </div>       
        <div class="bar-item">
            <div class="item-img fav"></div>
            <div class="item-text">收藏</div>
        </div>       
    </div>
    <div class="bar-item-right">
        <div class="addcart item-right" @click="addCart">加入购物车</div>
        <div class="buy item-right">购买</div>
    </div>
</div>
</template>

<script>
export default {
    name:'DetailBottomBar',
    methods:{
        addCart(){
            this.$emit('addCart');
        }
    }

}
</script>

<style lang="scss" scoped>
.bottom-bar{
    height: 1.5rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    @include pri-flex($justify-content:space-around);
    .bar-item-left{
        width: 50%;
        @include pri-flex($justify-content:space-around);
        .bar-item{
            padding: 0.2rem;
            .item-img{
                background-image: url('../../../assets/img/detail/detail_bottom.png');
                background-size: 0.7rem;
                width: 0.74rem;
                height: 0.8rem;
                padding-bottom: 0.15rem;
            }
            .item-text{
                font-size: 0.4rem;
            }
            .cs{
                background-position: 0.03rem -1.55rem;
            }
            .shop{
                background-position: 0.015rem -3rem;
            }
            .fav{
                background-position: 0.015rem 0.15rem;
            }
        }
        
    }
    .bar-item-right{  
        width: 50%;
        height: 100%;
        @include pri-flex($justify-content:space-around);
        .item-right{
            width: 50%;
            height: 100%;
            font-size: 0.45rem;
            text-align: center;  
             @include pri-flex();
        }
        .addcart{  
            background-color: yellow;
        }
        .buy{
            background-color: $main-color;
            color: white;
        }
    }
}

</style>