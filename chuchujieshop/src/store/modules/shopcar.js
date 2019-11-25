
const shopcarModule = {
namespaced: true,// 命名空间

	state: {
		shopCarList: JSON.parse(window.localStorage.getItem("shopCarList")) || [],
	},
	mutations: {
		addShopCarList(state, skuItem) { //添加购物车列表
			state.shopCarList.push(skuItem) //把skuItem添加到shopCarList数组里面
			window.localStorage.setItem("shopCarList", JSON.stringify(state.shopCarList)) //把shopCarList存储到本地离线存储
		},
		removeShopCarItem(state,idx){//删除单个购物车商品
			state.shopCarList.splice(idx,1)
			window.localStorage.setItem("shopCarList", JSON.stringify(state.shopCarList)) //把shopCarList存储到本地离线存储
		},
		removeAllShopCarList(state){//清空购物车商品
			state.shopCarList = []
			window.localStorage.setItem("shopCarList", JSON.stringify(state.shopCarList)) //把shopCarList存储到本地离线存储
		},
		
	}
}

export default shopcarModule