const address = {
	namespaced:true,
	state:{
		addressList:JSON.parse(localStorage.getItem("addressList")) || [],//地址列表
		addressItem:{},
		addressIdx:0
	},
	mutations:{
		ADD_ADDRESS_LIST(state,info){//添加地址
			state.addressList.push(info)
			localStorage.setItem("addressList",JSON.stringify(state.addressList))
		},
		GET_ADDRESS_ITEM(state,obj){//获取单个地址
			state.addressItem = obj.item//编辑地址的内容
			state.addressIdx = obj.idx//编辑地址的索引值
			// console.log(obj.idx)
		},
		EDIT_ADDRESS_ITEM(state,newAddressList){//编辑地址
			state.addressList = newAddressList
			localStorage.setItem("addressList",JSON.stringify(state.addressList))
		},
		REMOVE_ADDRESS_ITEM(state,number){//删除单个地址
			state.addressList.splice(number,1)
			localStorage.setItem("addressList",JSON.stringify(state.addressList))
		}
	}
}

export default address