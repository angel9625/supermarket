<template>
 <van-swipe :autoplay="autoplay">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <a :href="image.link">
          <img :src="image.image" />
        </a>
      </van-swipe-item>
    </van-swipe>
</template>

<script>
export default {
    name:'Swiper',
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
// 设置轮播样式
  .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }

</style>