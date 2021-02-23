<template>
<div class="back-top" v-show="gotop" @click="toTop()">
    <img src="~assets/img/common/top.png">
</div>
  
</template>

<script>
export default {
    name:'BackTop',
    data(){
        return{
            gotop:false,
        }
    },
    mounted(){
        let that = this;
        window.onscroll = function (){
            that.computedScroll();
        };
        // window.addEventListener("scroll",this.computedScroll);
    },
    // destroyed(){
    //     window.removeEventListener("scroll",this.computedScroll);
    // },
    methods:{
        computedScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            scrollTop > 1100 ? (this.gotop = true) : (this.gotop = false);

        },
        toTop(){
            let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            const timeTop = setInterval(function(){
                document.body.scrollTop = document.documentElement.scrollTop = top -= 40;
                if(top == 0){
                    clearInterval(timeTop);
                }
            },10);
            
        }
    }

}
</script>

<style lang='scss' scoped>
.back-top{
    position: fixed;
    right: 0.2rem;
    bottom: 1.5rem;
    img{
        width: 1.5rem;
        height: 1.5rem;
    }
}

</style>