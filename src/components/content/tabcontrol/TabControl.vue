<template>
<div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="index" @click="itemclick(index)">
        <span :class="{active:index == currentindex}">{{item}}</span>
    </div>   
</div>
  
</template>

<script>
export default {
    name:"TabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data(){
        return{
            currentindex:0,
        }
    },
    methods:{
        itemclick(index){
            this.currentindex = index;
            this.$emit('tabClick',index);
        }
    }

}
</script>

<style lang="scss">
.tab-control{
  @include pri-flex($justify-content:space-around);
  background-color: #fff;
  font-size:0.45rem;
  .tab-control-item{
    height: 1rem;
    line-height: 1rem;
  }
}
.active{
    color: $main-color; 
    border-bottom: 0.08rem solid $main-color;
    padding-bottom: 0.1rem;
}
</style>

