<template>
    <div v-if="JSON.stringify(shop) !=='{}'" class="shop-info">
        <div class="shop-logo">
            <img :src="shop.shopLogo">
            <span class="shop-name">{{shop.name}}</span>
        </div>
        <div class="detail-info">
            <div class="shop-message">
                <div class="shop-cells">
                    <span class="snumber"><strong>{{shop.cGoods}}</strong></span>
                    <span>总销量</span>
                </div>
                <div class="shop-cells">
                    <span class="snumber"><strong>{{shop.cSells}}</strong></span>
                    <span>全部宝贝</span>
                </div>
            </div>            
            <div class="shop-score">
                <div v-for="(item,index) in shop.score" :key="index" class="detail-score">
                    <span class="name">{{item.name}}</span>
                    <span :class="item.isBetter ? {redcolor:true} : {greencolor:true}" class="score">{{item.score}}</span>
                    <span class="isbetter" :class="item.isBetter ? {redbgcolor:true} : {greenbgcolor:true}">{{item.isBetter ? '高' : '低'}}</span>
                </div>
            </div>
        </div>
        <div class="getin">进店逛逛</div>
    </div>  
</template>

<script>
export default {
    name:'DetailShopInfo',
    props:{
        shop:{}
    },
}
</script>

<style lang="scss" scoped>
    .shop-info{
        padding: 0 0.2rem;
        .shop-logo{
            @include pri-flex($justify-content:flex-start);
            img{
                width: 2rem;
                height: 2rem;
                padding: 0 0.2rem;
            }
        .shop-name{
            font-size: 0.45rem;
            color:rgb(113,113,113);
        }
        }
        .detail-info{
            padding: 0.3rem 0.4rem;
            @include pri-flex($justify-content:space-between);
            .shop-message{
                 @include pri-flex($justify-content:flex-start);
                .shop-cells{
                @include pri-flex($flex-direction:column);
                font-size: 0.35rem;
                padding: 0.2rem;
                 .snumber{
                    font-size: 0.45rem;
                    padding-bottom: 0.15rem;
                }
            }            
            }
            .shop-score{
                font-size: 0.38rem;
                padding-right: 0.3rem;
                .detail-score{
                    padding: 0.2rem 0;
                    .redcolor{
                        color: $main-color;
                    }
                    .greencolor{
                         color: green;
                    }
                    .redbgcolor{
                        background-color: $main-color;
                    }
                     .greenbgcolor{
                        background-color: green;
                    }
                    .score{
                         padding: 0.3rem 0.15rem;                       
                }
                    .isbetter{
                        color:white;
                    }
                }             
            }                 
    }
        .getin{
            width: 2rem;
            color: rgb(141,142,143);
            margin: 0.1rem auto;
            font-size: 0.4rem;               
        }   
}
</style>
    

