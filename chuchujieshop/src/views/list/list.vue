<template>
  <div>
    <search></search>
    <goodsList v-if="infoList" :infoList="infoList"></goodsList>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from "@/components/tabbar";
import goodsList from "./goodsList";
import search from "@/views/home/search";
import * as api from "@/api/index.js";

export default {
  data() {
    return {
      infoList: ""
    };
  },
  components: {
    goodsList,
    search,
    tabBar
  },
  created() {
    this.getData();
    
  },
  methods: {
    async getData() {
      let _self = this;
      let res = await api.getIndexHome();
      _self.infoList = res.data;window.console.log(this.infoList)
    }
  },
  
};
</script>

<style lang="scss">
.list-p{
  font-size: 18px;
  padding: 5px 15px;
  background-color: #f5f5f5;
}
</style>