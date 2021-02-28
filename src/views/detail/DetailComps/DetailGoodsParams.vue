<template>
<div class="params" v-if="JSON.stringify(goodsparams) !=='{}'">
    <table class="sizes-info" v-for="(item,index) in goodsparams.sizes" :key="index">
        <tr class="size-tr" v-for="(tr,indey) in item" :key="indey">
            <td class="size-td" v-for="(td,indez) in tr" :key="indez">{{td}}</td>
        </tr>
    </table>
    <table class="param-info">
        <tr class="info-tr" v-for="(item,index) in goodsparams.infos" :key="index">
            <td class="info-key">{{item.key}}</td>
            <td class="info-val">{{item.value}}</td>
        </tr>
    </table>
    <div class="info-img" v-if="goodsparams.image.length !== 0">
        <img :src="goodsparams.image">
    </div>
</div>
  
</template>

<script>
export default {
    name:'DetailGoodsParams',
    props:{
        goodsparams:{}
    }

}
</script>

<style lang="scss" scoped>
    .params{
        padding: 0.4rem;
        font-size: 0.4rem;
        td{
            padding: 0 1rem 0.3rem 0;
        }
        .param-info{
            .info-tr{
                padding: 0 0.5rem 0.4rem 0;
                td{
                    padding: 0 1rem 0.3rem 0;
                }
                .info-key{
                    width: 1rem;                   
                }
                .info-val{
                    color: $main-color;
                }
            }          
        }
        .info-img{
            img{
                width: 100%;
                height: 6.5rem;
            }
        }
    }

</style>