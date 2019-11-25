import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载

const home = () => import('@/views/home/home')

const list = () => import('@/views/list/list')

const pingpai = () => import('@/views/pingpaituan/pingpai')

const shopcar = () => import('@/views/shop/shopcar')

const user = () => import('@/views/user/user')

const address = () => import('@/views/address/address')

const addressAdd = () => import('@/views/address/addressAdd')

const addressEdit = () => import('@/views/address/addressEdit')

const detail = () => import('@/views/detail/detail')

const singleList = () => import('@/views/list/singleList')

const searchList = () => import('@/views/searchList/searchList')

const order = () => import('@/views/user/order')

import notfound from '@/views/notfound/notfound.vue'




Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "home",
        component: home
    },
    {
        path: "/list",
        name: "list",
        component: list
    },
    {
        path: "/shopcar",
        name: "shopcar",
        component: shopcar
    },
    {
        path: "/pingpai",
        name: "pingpai",
        component: pingpai
    },
    {
        path: "/user",
        name: "user",
        component: user
    },
    {
        path: "/address",
        component: address,
        name: "address"
    },
    {
        path: "/addressAdd",
        component: addressAdd,
        name: "addressAdd"
    },
    {
        path: "/addressEdit",
        component: addressEdit,
        name: "addressEdit"
    },
    {
        path: "/detail",
        component: detail,
        name: "detail"
    }, {
        path: "/searchList",
        component: searchList,
        name: "searchList"
    },
    {
        path: "/order",
        component: order,
        name: "order"
    },
    {
        path: "/singleList",
        component: singleList,
        name: "singleList"
    },
    {
        path: "*",
        component: notfound,
        name: "notfound",
        // redirect: '/404',
        // hidden: true
    }
]

export default new VueRouter({
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
      }
})