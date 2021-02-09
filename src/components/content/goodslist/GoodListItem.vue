<template>
  <div class="goodlist-item">
      <img :src="gooditem.show.img">
      <div class="item-info">
          <div class="item-title">{{gooditem.title}}</div>
          <div class="info-flex">
             <span class="item-price">{{gooditem.price}}</span>
             <img src="~assets/img/common/collect.svg">
             <span class="item-star">{{gooditem.cfav}}</span> 
          </div>
          
      </div>
  </div>
</template>

<script>
export default {
    name:"GoodListItem",
    props:{
        gooditem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="scss">
.goodlist-item{
    width: 47%;
    margin-bottom: 0.1rem;
    img{
        width:100%;
        border-radius: 6%;
        padding-bottom: 0.1rem;
    }
    .item-info{        
        text-align: center;
        .item-title{
            // 设置图片标题显示效果
            white-space: nowrap; 
            overflow: hidden;
            text-overflow:ellipsis;
            padding-bottom: 0.08rem;
        }
        img{
            width: 0.4rem;         
        }
        .item-price{           
            color: $main-color;
            padding-right: 0.4rem;
        }
        .info-flex{
            @include pri-flex();
        }
      
    }
}

</style>>

