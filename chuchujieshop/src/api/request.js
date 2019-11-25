import axios from 'axios'
import Vue from 'vue'; //引入vue
import {
    Toast
} from 'vant'; //引入vant Toast组件

Vue.use(Toast); //使用vant

const httRequest = axios.create({
    baseURL: "http://yapi.demo.qunar.com" //默认地址
    // baseURL: "http://vt2.ossjk.com" //默认地址

})

//get请求封装
function AjaxGet(url) {
    return new Promise((resolve) => {
        httRequest.get(url).then(function (res) {
            if (res.status === 200) {
                resolve(res.data)
            }
        })
    })
}

//post请求封装
function AjaxPost(url, data) {
    return new Promise(function (resolve) {
        httRequest.post(url, data).then(function (res) {
            if (res.status === 200) {
                resolve(res.data)
            }
        })
    })
}

// 添加请求拦截器
httRequest.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '加载中...',
        loadingType: 'spinner'
    });

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
httRequest.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    Toast.clear(); // 手动清除 Toast

    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export {
    AjaxGet,
    AjaxPost
}