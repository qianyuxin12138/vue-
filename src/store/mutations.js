import state from './state';
const matutaions={
    //用户名
	saveName(state, data) {
		console.log('mutation')
		state.userName = data;
		console.log(state.userName)
	},
    //添加购物车
    addShopCar(state,data){
        data.count = 1;
        state.carts.push(data);
        localStorage.setItem("carts",JSON.stringify(state.carts));
    },
    //添加商品
    add(state,index){
        state.carts[index].value++
    },
    //减少商品
    reduce(state,index){
        state.carts[index].value==1?state.carts[index].value=1: state.carts[index].value--
    },
}

export default matutaions