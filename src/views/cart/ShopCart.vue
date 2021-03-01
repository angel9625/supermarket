<template>
  <div id="ShopCart">
      <nav-bar class="cart-nav"><div slot="center">购物车</div></nav-bar>
      <cart-item></cart-item>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import CartItem from './childComps/cartItem.vue'
export default {
  components: { NavBar, CartItem },
    name:'ShopCart'

}
</script>

<style lang="scss" scoped>
.cart-nav{
  background-color: $main-color;
  color: white;
  font-size: 0.5rem;
}
</style>