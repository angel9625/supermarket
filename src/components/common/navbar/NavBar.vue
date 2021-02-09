<template>
<div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
</div>
  
</template>

<script>
export default {
    name:'NavBar',

}
</script>

<style lang="scss">
.nav-bar{
    display: flex;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;  
    box-shadow: 0 0.03rem 0.05rem rgba(0, 0, 0, 0.3);
}
.left,.right{
    width: 2rem;
}
.center{
    flex: 1;
}

</style>