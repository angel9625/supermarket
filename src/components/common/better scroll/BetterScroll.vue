<template>
<div ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
</div>
  
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
    name:'BetterScroll',
    mounted(){
        const bs = new BScroll(this.$refs.wrapper);
    }
}
</script>

<style>

</style>