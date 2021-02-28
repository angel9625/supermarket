<template>
<div class="comment-info">
    <div class="info-text">
        <span class="usercom">用户评价</span>
        <span class="more">更多</span>
    </div>
    <div class="detail-comment">
        <div class="top">
            <img :src="commentInfo.user.avatar">
            <span>{{commentInfo.user.uname}}</span>
        </div>
        <p class="content">{{commentInfo.content}}</p>
        <div class="goods-info"> 
            <span class="time">{{commentInfo.created | showDate}}</span>
            <span>{{commentInfo.style}}</span>
        </div>
        <div class="images">
            <img v-for="(item,index) in commentInfo.images" :key="index" :src="item">
        </div>
    </div>
</div>
</template>

<script>
import {timestampToTime} from '../../../common/Utils/TimestapToTime'
export default {
    name:'DetailCommentInfo',
    props:{
        commentInfo:{}
    },
    filters:{
        showDate(value){
            return timestampToTime(value);
        }
    }

}
</script>

<style lang="scss" scoped>
    .comment-info{
        padding: 0.5rem;
        .info-text{
            @include pri-flex($justify-content:space-between);
            .usercom{
                font-size: 0.4rem;
            }
            .more{
                font-size: 0.35rem;
            }
        }
        .detail-comment{
            padding-top: 0.2rem;
            .top{
                padding: 0.2rem;
                @include pri-flex($justify-content:flex-start);
                img{
                    width: 1rem;
                    height: 1rem;
                    padding-right: 0.3rem;
                }
                span{
                    font-size: 0.5rem;
                }
            }
            .content{
                font-size: 0.38rem;
            }
            .goods-info{
                font-size: 0.35rem;
                .time{
                    padding-right: 0.2rem;
                }
            }
            .images{
                img{
                    width: 3.5rem;
                    height: 3.5rem;
                    padding: 0.2rem 0.1rem 0 0;
                }
            }
        }
    }
</style>