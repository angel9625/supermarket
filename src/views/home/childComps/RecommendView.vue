<template>
    <div class="recommend">
    <div class="recommend-item" v-for="(image,index) in recommends" :key="index">
        <a :ref="image.link">
            <img :src="image.image">
             <div>{{image.title}}</div>
        </a>
    </div>  
</div> 
</template>

<script>
export default {
    name:"RecommendView",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }

}
</script>

<style lang="scss">
.recommend{
    text-align: center;
    @include pri-flex($justify-content:space-around);
    padding: 0.3rem 0 0.5rem 0;
    border-bottom: 0.3rem solid rgb(233, 231, 231);
.recommend-item{
    img{
        width: 2.2rem;
        height: 2.2rem;
        margin-bottom: 0.3rem;
    }
}
    
}
</style>>

