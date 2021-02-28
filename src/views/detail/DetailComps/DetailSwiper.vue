<template>
<van-swipe :autoplay="autoplay">
      <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  
</template>

<script>
export default {
    name:'DetailSwiper',
    props:{
        autoplay:{
            type:Number,
            default:3000
        },
        images:{}
    }
}
</script>

<style lang="scss" scoped>
  .van-swipe-item {
      height: 8.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>