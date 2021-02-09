import {request} from './request'

// 请求首页轮播图数据
export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}

// 请求商品列表
export function getGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}
