<template>
<div class="goods-detail" v-if="JSON.stringify(detailInfo) !=='{}'">
    <div class="detail-text">
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="text">{{detailInfo.detailImage[0].key}}</div>
    </div>
    <div class="images">
        <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item">
    </div>
</div>
</template>

<script>
export default {
    name:'DetailGoodsDetailInfo',
    props:{
        detailInfo:{}
    }

}
</script>

<style lang="scss" scoped>
.goods-detail{
    .detail-text{
        padding: 0.4rem 0.3rem;
        .desc{
            font-size: 0.4rem;
            padding-bottom: 0.25rem;
        }
        .text{
            font-size: 0.45rem;
        }

    }
    .images{
        img{
            width: 100%;
            height: 8rem;
            padding-bottom: 0.1rem;
        }
    }
}

</style>