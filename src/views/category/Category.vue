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
         </ul>
     </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    name:'Category',
    mounted(){
      let scroll = new BScroll(document.querySelector('.wrapper'));
    }

}
</script>

<style lang="scss">
.wraper{
  width: 90%;
  height: 3rem;
  margin: 3rem auto;
  background-color: red;
  overflow: hidden;
}
</style>