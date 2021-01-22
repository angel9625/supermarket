<template>
  <div class="tab-bar-item" @click="btnClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>    
      <div :style="activeStyle"><slot name="item-text"></slot></div> 
      
  </div>
</template>

<script>
export default {
    name:'TabBarItem',
    data(){
        return{
            
        }
    },
    props:{
        path:String,
        activecolor:{
            type:String,
            default:'red',
        }

    },
    methods:{
        btnClick(){
            this.$router.push(this.path)
        },
       
    },
    computed:{
        isActive(){
           return this.$route.path.indexOf(this.path) != -1
        },
        activeStyle(){
            return this.isActive ? {color:this.activecolor} : {}

        }
        
    }


}
</script>

<style lang="less" scoped>
.tab-bar-item{
        font-size: 0.4rem;
        text-align: center;
    img{
        width: 0.7rem;
        height: 0.7rem;
        margin-top: 0.06rem;
    }
}


</style>