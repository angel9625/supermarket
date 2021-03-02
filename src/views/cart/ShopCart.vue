<template>
  <div id="ShopCart">
      <nav-bar class="cart-nav"><div slot="center">购物车({{showCartLength}})</div></nav-bar>
      <cart-item></cart-item>
      <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import BottomBar from './childComps/bottomBar.vue';
import CartItem from './childComps/cartItem.vue'
export default {
  components: { NavBar, CartItem, BottomBar },
    name:'ShopCart',
    computed:{
      showCartLength(){
        return this.$store.state.cartList.length;
      }
    }

}
</script>

<style lang="scss" scoped>
.cart-nav{
  background-color: $main-color;
  color: white;
  font-size: 0.5rem;
}
</style>