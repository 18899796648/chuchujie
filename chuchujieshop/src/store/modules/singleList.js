const singleList={
    namespaced:true,
    state:{
      singleL:JSON.parse(window.localStorage.getItem("singLists")) || [],
    },
    mutations:{
        ListShow(state,value){
          state.singleL=value
         window.localStorage.setItem("singLists",JSON.stringify(state.singleL))
        }
    }
}

export default singleList