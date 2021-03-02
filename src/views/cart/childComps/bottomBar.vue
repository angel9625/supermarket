<template>
<div class="bottom-bar">
    <div class="left">
        <radio></radio>
        <span class="all">全选</span>
        <span>合计：￥{{totalprice}}</span>
    </div>
    <div class="right">
        <span>去计算({{cartlength}})</span>
    </div>
</div>
</template>

<script>
import Radio from '../../../components/content/radio/Radio.vue'
export default {
  components: { Radio },
    name:'bottomBar',
    computed:{
        totalprice(){
            return this.$store.state.cartList.filter(item => item.checked).reduce((total,value) => {
                return total + value.price * value.count},0);
        },
        cartlength(){
            return this.$store.state.cartList.filter(item => item.checked).length;
        }
    }
}
</script>

<style lang="scss" scoped>
.bottom-bar{
    padding: 0.2rem;
    height: 1rem;
    position: fixed;
    bottom: 1.3rem;
    left: 0;
    right: 0;
    font-size: 0.4rem;
    @include pri-flex( $justify-content: space-between); 
    .left{
        color: #7a7a7b;
        width: 70%;
        .all{
            margin: 0 0.4rem 0 0.2rem;
        }
    }
    .right{
        width: 30%;
        height: 100%;
        background-color: red;
        color: white;
        @include pri-flex(); 
    }
}
</style>