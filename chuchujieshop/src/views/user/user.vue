<template>
  <div class="user">
    <div class="user-poster">
      <van-icon name="setting-o" class="user-poster-a" @click="setting" />
      <van-icon name="chat-o" class="user-poster-b" @click="setting" />
      <div class="user-poster-dl">
        <van-icon name="user-o" class="user-poster-dl-o" />
      </div>
      <span class="user-poster-span">点击登陆</span>

      <div class="user-poster-box">
        <div class="user-poster-box-a">
          <p>0</p>
          <span>宝贝收藏</span>
        </div>
        <div class="user-poster-box-a">
          <p>0</p>
          <span>关注店铺</span>
        </div>
        <div class="user-poster-box-a">
          <p>0</p>
          <span>优惠券</span>
        </div>
        <div class="user-poster-box-a">
          <p>0</p>
          <span>评价</span>
        </div>
      </div>
    </div>

    <div class="user-list">
      <van-cell is-link @click="order">
        全部订单
        <van-tag round type="danger">{{info ? info : null}}</van-tag>
      </van-cell>

      <van-row class="user-links">
        <van-col span="6">
          <van-icon name="pending-payment" />
          <p>待付款</p>
        </van-col>
        <van-col span="6">
          <van-icon name="tosend" />
          <p>待发货</p>
        </van-col>
        <van-col span="6">
          <van-icon name="logistics" />
          <p>待收货</p>
        </van-col>
        <van-col span="6">
          <van-icon name="records" />
          <p>待评价</p>
        </van-col>
      </van-row>
    </div>
    <br />
    <br />
    <br />

    <van-cell-group class="user-group">
      <van-cell icon="location-o" title="地址管理" is-link to="/address" />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="records" title="我的订单" is-link />
      <van-cell icon="tosend" title="退换货" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="sign" title="退出登陆" is-link />
    </van-cell-group>

    <tab-bar></tab-bar>
  </div>
</template>
<script>
import tabBar from "@/components/tabbar"; //底部
export default {
  components: {
    tabBar
  },
  methods: {
    setting() {
      this.$toast.fail("无");
    },
    order() {
      this.$router.push("/order");
    }
  },
  computed: {
    info() {
      return this.$store.state.shopcarModule.shopCarList.length;
    }
  }
};
</script>
<style lang="scss">
@import "@/style/user/user";
</style>