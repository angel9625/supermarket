<template>
  <div id="Category">
     <div class="wrapper">
         <ul class="content">
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
           <li>商品列表</li>
         </ul>
     </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core"
export default {
    name:'Category',
    mounted(){
      let bs = new BScroll('.wrapper');
    }
}
</script>

<style lang="scss">
.wrapper{
  width: 90%; 
  height: 3rem;
  background-color: red;
  overflow: hidden;
}
</style>