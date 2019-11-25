<template>
  <div class="search">
    <!-- fixed 解决加入购物车上方出现空白 -->
    <van-nav-bar title="购物车" left-arrow @click-left="goBack" fixed>
      <van-icon name="search" slot="right" @click="searchList" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    searchList() {
      this.$router.push("/searchList");
    }
  }
};
</script>

<style lang="scss">
.search {
  .van-nav-bar {
    background-color: #ea64a2;
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

