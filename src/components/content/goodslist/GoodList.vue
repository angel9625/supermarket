<template>
  <div class="goodlist">
      <good-list-item v-for="(item,index) in goods" :key=index :gooditem="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue'
export default {
  components: { GoodListItem },
    name:"GoodList",
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }


}
</script>

<style lang="scss">
.goodlist{
    width: 95%;
    margin: 0.15rem auto;
    @include pri-flex($justify-content:space-around);
    flex-wrap: wrap;
}
</style>

