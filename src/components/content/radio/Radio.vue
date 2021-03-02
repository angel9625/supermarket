<template>
  <input type="radio" class="radio" :checked="isChecked">
</template>

<script>
export default {
    name:'Radio',
    data(){
        return{}
    },
    props:{
        isChecked:{
            type:Boolean,
            default:false
        }
    },
    methods:{}

}
</script>

<style lang="scss" scoped>
.radio{
        width: 0.5rem;
        height: 0.5rem;
        appearance: none;
        position: relative;
        &::before{
            content: '';
            width: 0.4rem;
            height: 0.4rem;
            border: 0.01rem solid lightgray;
            display: inline-block;
            border-radius: 50%;
            vertical-align: middle;
        }
        &:checked::before{
            content: '';
            width: 0.4rem;
            height: 0.4rem;
            border: 0.01rem solid $main-color;
            background:$main-color;
            display: inline-block;
            border-radius: 50%;
            vertical-align: middle;
        }
        &:checked::after{
            content: '';
            width: 0.36rem;
            height:0.15rem;
            border: 0.02rem solid white;
            border-top: transparent;
            border-right: transparent;
            text-align: center;
            display: block;
            position: absolute;
            top: 0.15rem;
            left:0.08rem;
            // vertical-align: middle;
            transform: rotate(-45deg);
        }
    }
</style>