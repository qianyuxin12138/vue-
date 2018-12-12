const actions={
    //用户名
	saveName({commit},data){
		console.log("action")
		commit('saveName',data)
	},
    //添加到购物车
    addCar({commit},data){
        commit('addShopCar',data);
    }
}

export default actions;