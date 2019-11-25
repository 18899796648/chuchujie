<template>
  <div class="swiper">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item of swiperList" :key="item.id" @click="imgClick(item)">
        <van-image lazy-load width="100%" height="300px" :src="item.imgUrl">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  props: {
    swiper: Array
  },
  computed: {
    swiperList() {
      return this.swiper;
    }
  },
  methods: {
    imgClick(item) {
      this.$store.commit("listModule/addGoodsList", item);
      this.$router.push("/detail");
    }
  }
};
</script>
<style lang="scss">
.van-swipe {
  z-index: 20;
}
</style>