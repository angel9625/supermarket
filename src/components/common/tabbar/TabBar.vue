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

<style lang="scss">
.TabBar{
    height: 1.3rem;
    box-shadow: 0 -0.03rem 0.05rem rgba(0, 0, 0, 0.3);
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    @include pri-flex($justify-content:space-around);
}
</style>>
