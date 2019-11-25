import Vue from "vue"
import Vuex from "vuex"
import shopcarModule from "./modules/shopcar.js"  //shopcar 模块
import addressModule from "./modules/address.js"//shopcar模块
import listModule from "./modules/list.js"//shopcar模块
import singleListModule from "./modules/singleList.js"

Vue.use(Vuex)

const store = new Vuex.Store({
   modules:{
    shopcarModule,
    addressModule,
    listModule,
    singleListModule
	}

})

export default store