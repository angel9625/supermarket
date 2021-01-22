<template>
<div class="TabBar">
   <slot></slot>
</div>
  
</template>

<script>
import TabBarItem from './TabBarItem.vue'
export default {
    name:'TabBar',
    components: {
         TabBarItem 
         },
    

}
</script>

<style scoped>
.TabBar{
    height: 1.4rem;
    box-shadow: 0 -0.03rem 0.05rem rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}
</style>