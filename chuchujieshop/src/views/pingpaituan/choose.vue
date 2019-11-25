<template>
  <div class="choose">
    <van-tabs class="choose_box">
      <van-tab v-for="(item,idx) of goodsInfo" :title="item.chosenName" :key="idx">
        <div class="content">
          <p>今日更新10个品牌</p>
          <div class="model" v-for="(items,idx) of item.imageList" :key="idx">
            <!-- 商品图片 -->
            <van-image lazy-load class="img" :src="items.image" @click="imgClick(items.id)">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
              <template v-slot:error>加载失败</template>
            </van-image>
            <div class="content-foot">
              <!-- 商品折扣 -->
              <span class="discount">{{items.discount}}折起</span>
              <!-- 三角形 -->
              <span class="delta"></span>
              <!-- 圆 -->
              <span class="circular"></span>
              <!-- 商品名字 -->
              <span class="names">{{items.name}}</span>
              <!-- 今日上新 -->
              <span class="news">今日上新</span>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import * as api from "@/api/index.js";
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      imgInfo: "",
      goodsInfo: ""
    };
  },
  methods: {
    async getData() {
      let _self = this;
      let res = await api.getIndexHome();
      let res1 = await api.getIndex();
      _self.imgInfo = res.data.accessories[0];
      _self.goodsInfo = res1.chosens;
      //   window.console.log(_self.goodsInfo);
      window.console.log(res1);
    },
    imgClick(idx) {
      window.console.log(idx);
    }
  }
};
</script>

<style lang="scss">
@import "@/style/pingpaituan/choose";
</style>

