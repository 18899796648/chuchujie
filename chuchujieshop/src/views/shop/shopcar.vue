<template>
  <div class="shopcar">
    <search></search>

    <!-- 清空购物车按钮 -->
    <div class="button-group" v-if="shopCarList.length !== 0">
      <van-button
        class="removeAll"
        type="danger"
        size="small"
        @click="removeAll"
        color="linear-gradient(to right, #FF2D2D, #FF5151 , #FF9797)"
      >清空购物车</van-button>
    </div>

    <!-- 无购物车列表 -->
    <div class="noList" v-if="shopCarList.length===0">
      <div class="message">
        <van-icon class="icon" name="shopping-cart-o"></van-icon>
        <span class="text">暂无商品~</span>
      </div>
    </div>

    <!-- 有购物车列表 -->
    <template v-else>
      <van-swipe-cell class="swipeCell" v-for="(item, idx) in shopCarList" :key="idx">
        <div class="card">
          <van-checkbox class="checkBox" v-model="item.isChecked"></van-checkbox>

          <van-image lazy-load class="image" :src="item.imgUrl">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
            <template v-slot:error>加载失败</template>
          </van-image>

          <div class="center">
            <div class="name">{{item.goodsName}}</div>
            <van-tag plain type="danger" size="large">
              <div class="type">规格:{{item.selectType}}</div>
            </van-tag>
            <div class="bottom">
              <p class="price">{{item.goodsPrice | toFixed | rmb}}</p>
              <div class="num">
                <van-stepper v-model="item.goodsNum" integer />
              </div>
            </div>
          </div>
        </div>
        <template slot="right">
          <van-button @click="removeItem(idx)" class="delate" square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </template>

    <!-- 提交订单栏 -->
    <div class="submit-bar">
      <van-submit-bar :price="allTotal" button-text="提交订单">
        <van-checkbox v-model="checkedAll">全选</van-checkbox>
      </van-submit-bar>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import search from "./search";
import tabBar from "@/components/tabbar"; //底部
export default {
  components: {
    tabBar,
    search
  },
  computed: {
    //购物车列表数据
    shopCarList() {
      return this.$store.state.shopcarModule.shopCarList;
    },
    //计算总价
    allTotal() {
      let total = 0;
      this.shopCarList.forEach(function(item) {
        if (item.isChecked) {
          total += item.goodsNum * item.goodsPrice;
        }
      });
      return total * 100;
    },

    //全选
    checkedAll() {
      let bool = false;
      bool = this.shopCarList.every(function(item) {
        return item.isChecked;
      });
      return bool;
    }
  },
  methods: {
    //删除单个商品
    removeItem(idx) {
      this.$dialog
        .confirm({
          title: "删除",
          message: "确定删除该商品吗？"
        })
        .then(() => {
          this.$store.commit("shopcarModule/removeShopCarItem", idx);
        })
        .catch(() => {
          // on cancel
        });
    },
    //删除所有商品
    removeAll() {
      this.$dialog
        .confirm({
          title: "删除",
          message: "确定要清空购物车吗？"
        })
        .then(() => {
          this.$store.commit("shopcarModule/removeAllShopCarList");
        })
        .catch(() => {
          // on cancel
        });
    }
  },
  created() {
    window.console.log(this.shopCarList);
  }
};
</script>

<style lang="scss">
@import "@/style/shopcar/shopcar";
</style>