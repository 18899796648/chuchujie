//自定义组件 人民币符号和小数点后两位

let myPlugin = {}

myPlugin.install = function (Vue) {
    Vue.filter("toFixed", function (value) {
        return value.toFixed(2)
    })
    Vue.filter("rmb", function (value) {
        return "￥" + value
    })
}

export default myPlugin