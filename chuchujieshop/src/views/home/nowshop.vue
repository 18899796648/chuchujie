<template>
  <div class="nowshop">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of girlList" :key="item.id">
        <van-row>
          <van-col span="12" class="text">
            <p class="name">{{item.name}}</p>
            <p class="price">仅：{{item.price | toFixed |rmb}}</p>
            <van-button type="primary" size="mini" @click="imgClick(item)">立即抢购</van-button>
          </van-col>
          <van-col span="12" class="image">
            <van-image
              lazy-load
              @click="imgClick(item)"
              width="100%"
              height="130px"
              :src="item.imgUrl"
            >
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
              <template v-slot:error>加载失败</template>
            </van-image>
          </van-col>
        </van-row>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  props: {
    girl: Array
  },
  computed: {
    girlList() {
      return this.girl;
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        }
      }
    };
  },
  methods: {
    imgClick(i) {
      // window.console.log(i)
      this.$store.commit("listModule/addGoodsList", i);
      this.$router.push("/detail");
    }
  }
};
</script>

<style lang="scss">
.nowshop {
  .text {
    padding: 15px;

    .price {
      width: 80px;
      font-size: 12px;
      color: #e7141a;
      margin-top: 10px;
    }
    .name {
      color: black;
    }
  }
  .image {
    padding: 15px;
    border-radius: 5px;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: #ea64a2;
  }
}

.van-button--mini {
  font-size: 12px;
  color: #e7141a;
  width: 60px;
  height: 28px;
  float: right;
  background-color: #ffffff;
  border: 1px solid #e7141a;
  border-radius: 8px;
  margin-top: -25px;
}
</style>