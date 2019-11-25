<template>
  <div class="search">
    <van-nav-bar title="楚楚街" fixed>
      <van-icon name="search" slot="left" @click="searchList" />
      <van-icon name="cart-o" slot="right" @click="goShoping" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  methods: {
    searchList() {
      this.$router.push("/searchList");
    },
    goShoping() {
      this.$router.push("/shopcar");
    }
  }
};
</script>

<style lang="scss">
.search {
  margin-top: 12%;
  .van-nav-bar {
    background-color: #ea64a2;
    z-index: 30 !important;
  }
  .van-icon,
  .van-icon::before {
    font-size: 30px;
    color: white;
  }
  .van-nav-bar__title {
    color: white;
  }
}
</style>

