<template>
  <div class="home">
    <!-- 遮罩层  广告-->
    <van-popup
      v-model="show"
      closeable
      round
      close-icon="cross"
      :style="{ height: '83.8%' , width:'96%' }"
    >
      <!-- <van-icon class="close" name="cross" @click="closeout" /> -->
      <div class="img">
        <van-image
          lazy-load
          src="http://img.redocn.com/sheji/20161013/caifengshuang11dazheyouhuihaibaoshejisucai_7266427.jpg"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
      </div>
    </van-popup>

    <!-- 搜索框 -->
    <search></search>

    <!-- 轮播 -->
    <swipers v-if="swiper" :swiper="swiper"></swipers>

    <!-- 热卖分类 -->
    <category v-if="mycategory" :mycategory="mycategory"></category>

    <!-- 通知 -->
    <van-notice-bar
      text="通知：内测期间！双32全场一折、双32全场一折、双32全场一折、双32全场一折 ！！！ "
      left-icon="volume"
      color="red"
    />

    <!-- 立即抢购 -->
    <nowshop v-if="girl" :girl="girl"></nowshop>

    <!-- 下长列表 女 -->
    <list v-if="list" :list="list"></list>

    <!-- 下长列表 男 -->
    <listtwo v-if="listtwo" :listtwo="listtwo"></listtwo>
    <br />
    <br />

    <tab-bar></tab-bar>
  </div>
</template>
<script>
import * as api from "@/api/index.js";
import swipers from "./swiper";
import category from "./category";
import nowshop from "./nowshop";
import list from "./list"; //下长列表
import listtwo from "./listtwo"; //下长列表2
import search from "@/views/home/search"; //搜索框
import tabBar from "@/components/tabbar";
export default {
  components: {
    swipers,
    category,
    nowshop,
    list,
    listtwo,
    search,
    tabBar
  },
  data() {
    return {
      swiper: "",
      mycategory: "",
      girl: "",
      list: "", //下长列表
      listtwo: "", //下长列表2
      show: true
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let _self = this;
      let res = await api.getIndex();

      _self.swiper = res.boy;
      _self.mycategory = res.category;
      _self.girl = res.girl;
      _self.list = res.girl; //下长列表
      _self.listtwo = res.boy; //下长列表2

      window.console.log(res);
    }
  }
};
</script>

<style lang="scss">
.home {
  .img {
    width: 100%;
    height: 100%;
  }
}
</style>