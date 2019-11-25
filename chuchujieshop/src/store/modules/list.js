const list={
    namespaced:true,
    state:{
      goodsList:JSON.parse(window.localStorage.getItem("goodsList"))||[],
    },
    mutations:{
      addGoodsList(state,value){
        state.goodsList=value
        // window.console.log(state.goodsList)
        window.localStorage.setItem("goodsList",JSON.stringify(state.goodsList))
        
      }
    }
}

export default list