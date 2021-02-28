<template>
  <div v-if="JSON.stringify(goods) !=='{}'" class="base-info">
        <div class="title">{{  goods.title}}</div>
        <div class="price-info">
            <div class="n-price">{{'￥'+goods.realPrice}}</div>
            <div class="o-price">{{goods.oldPrice}}</div>
            <div v-if="goods.discount" class="discount">{{goods.discount}}</div>
        </div>
        <div class="sold-info">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="service-info">
            <div class="service-item" v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon">
                <span>{{goods.services[index-1].name}}</span>
            </div>       
        </div>
  </div>
</template>

<script>
export default {
    name:'DetailBaseInfo',
    props:{
        goods:{}

    }

}
</script>

<style lang="scss" scoped>
    .base-info{
        padding: 0.2rem;
        .title{
            font-size: 0.5rem;
        }
        .price-info{          
            @include pri-flex($justify-content:flex-start);
            padding: 0.25rem 0;
            .n-price{
                color: $main-color;
                font-size: 0.6rem;
            }
            .o-price{
                text-decoration: line-through;
                color: rgb(151,152,153);
                margin-top: 0.1rem;
                padding: 0 0.1rem;
                font-size: 0.33rem;
            }
            .discount{
                padding: 0 0.2rem;
                font-size: 0.35rem;
                color: white;
                text-align: center;
                border-radius: 0.5rem;
                background-color: $main-color;
                margin-top:-0.3rem;
            }
        }
        .sold-info{
            padding: 0.2rem 0;
            color:rgb(151,152,153);
            font-size: 0.35rem;
            @include pri-flex($justify-content:space-between);
        }
        .service-info{
            padding: 0.25rem 0;
            @include pri-flex($justify-content:space-between);
            font-size: 0.4rem;
            img{
                width: 0.35rem;
                height: 0.35rem;
            }
        }
    }
</style>>

</style>