import {
    AjaxGet,
} from './request.js'

//商品详情数据
function getIndexHome() {
    let url = "/mock/25774/home"
    return new Promise((resolve) => {
        resolve(AjaxGet(url))
       
    })
    
}
//获取首页数据接口
function getIndex() {
    let url = "/mock/25774/index"
    return new Promise((resolve) => {
        resolve(AjaxGet(url))
       
    })
    
}
export{
    getIndexHome,
    getIndex
}