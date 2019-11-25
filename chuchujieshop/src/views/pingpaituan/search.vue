<template>
  <div class="search">
    <van-nav-bar title="品牌团" fixed>
        <van-icon name="search" slot="left" />
      <van-icon name="cart-o" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss">
.search{
    .van-nav-bar{
        background-color:  #ea64a2;
    }
    .van-icon, .van-icon::before {
        font-size: 30px;
        color: white;
    }
    .van-nav-bar__title{
        color: white;
    }
}
</style>

