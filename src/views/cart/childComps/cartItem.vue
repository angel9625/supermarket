<template>
<div class="CartItem">
    <div class="cart-item" v-for="(item,index) in this.$store.state.cartList" :key="index">
        <radio :is-checked="item.checked" @click.native="changeState(item)"></radio>
        <img :src="item.image">
        <div class="good-detail">
            <div class="text good-title">{{item.title}}</div>
            <div class="text good-desc">{{item.desc}}</div>
            <div class="pc">
                <span class="price">￥{{item.price}}</span>
                <span class="count">x{{item.count}}</span>
            </div>       
        </div>
    </div>
</div>
</template>

<script>
import Radio from '../../../components/content/radio/Radio.vue'
export default {
  components: { Radio },
    name:'cartItem',
    data(){
        return{}
    },
    methods:{
        changeState(item){
            item.checked = !item.checked;
        }
    }
}
</script>

<style lang="scss" scoped>
.cart-item{
    background-color: #fff;
    padding: 0.2rem;
    margin-bottom: 0.1rem;
    @include pri-flex();
    img{
        width: 2.3rem;
        height: 2.5rem;
        border-radius: 10%;
        padding: 0 0.1rem;
    }
    .good-detail{
        width: 65%;
        padding: 0.1rem 0.2rem 0.2rem;
        .text{
            white-space: nowrap;
            overflow: hidden;
            text-overflow:ellipsis;
        }
        .good-title{
            font-size: 0.5rem;
        }
        .good-desc{
            padding: 0.4rem 0 0.5rem 0;
        }
        .pc{
            @include pri-flex( $justify-content: space-between); 
            font-size: 0.4rem;
           .price{
               color: rgb(255,84,0); 
           }
          
        }
    }
}
</style>