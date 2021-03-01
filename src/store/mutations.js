 export default{
    addCouter(state,payload){
        payload.count ++ ;
     },
     addToCart(state,payload){
      state.cartList.push(payload);
     }
 }