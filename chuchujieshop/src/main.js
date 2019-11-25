import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick' //解决移动端300毫秒延迟
import '@/style/border.css' //解决1像素边框问题
import '@/style/reset.css' //重置样式

import Vant from 'vant'; //引入vant-ui
import 'vant/lib/index.css'; //引入vant自带样式

import router from '@/router/index.js' //引入vue-router
import store from "@/store/index.js" //引入vuex 模块化

import VueAwesomeSwiper from 'vue-awesome-swiper' //引入vue-awesome-swiper
import 'swiper/dist/css/swiper.css' //引入vue-awesome-swiper样式

import myPlugin from '@/plugin/index.js' //引入过滤插件

import VueLazyload from 'vue-lazyload'//引入vue-lazyload组件


Vue.config.productionTip = false


Vue
  .use(Vant) //使用vant
  .use(VueAwesomeSwiper) //使用
  .use(myPlugin) //调用自定义组件vue-awesome-swiper
  .use(VueLazyload, {//使用vue-lazyload组件
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1
  })


FastClick.attach(document.body) //解决移动端300毫秒延迟

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')