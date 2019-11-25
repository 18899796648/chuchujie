<template>
    <div class="pingpaituan">
        <search></search>
        <choose></choose>
        
        <tab-bar></tab-bar>
    </div>
</template>

<script>
import choose from "./choose"
import search from "./search"
import tabBar from "@/components/tabbar";//底部
export default {
components:{
    choose,
    search,
    tabBar,
}
    
}
</script>


<style lang="scss">
    @import "@/style/pingpaituan/index.scss"
</style>