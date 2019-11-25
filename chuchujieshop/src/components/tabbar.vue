<template>
  <div class="tabbar">
    <van-tabbar route v-model="active">
      <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/list" icon="apps-o">列表</van-tabbar-item>
      <van-tabbar-item to="/pingpai" icon="gem-o">品牌团</van-tabbar-item>
      <van-tabbar-item
        to="/shopcar"
        icon="shopping-cart-o"
        :info="info.length ? info.length :null"
      >购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="contact" :dot="info.length ? true : false">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "home"
    };
  },
  computed: {
    info() {
      return this.$store.state.shopcarModule.shopCarList;
    }
  }
};
</script>

<style lang="scss">
.tabbar {
  padding-top: 5%;
  p {
    text-align: center;
  }
}
.van-tabbar-item--active {
  background-color: #df3130;
  color: #ffffff;
}
.van-tabbar {
  background-color: #4d4d50;
}
.iconfont {
  margin-left: 5px;
}
.tabbar {
  z-index: 666;
}
</style>