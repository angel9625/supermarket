import {request} from './request';
// 请求详情数据
export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

//请求推荐商品
export function getRecommends(){
    return request({
        url:'/recommend'
    })
} 

    // 封装请求的商品信息
export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.realPrice = itemInfo.lowNowPrice;
        this.columns = columns;
        this.services = services;
    }
}
    // 封装请求的店铺信息
export class Shop{
    constructor(shopInfo){
        this.name = shopInfo.name;
        this.shopLogo = shopInfo.shopLogo;
        this.cGoods = shopInfo.cGoods;
        this.cSells = shopInfo.cSells;
        this.score = shopInfo.score;
    }
}

    // 封装请求的参数信息
export class GoodsParams{
    constructor(info,rule){
        this.sizes = rule.tables;
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set
    }
}
    
