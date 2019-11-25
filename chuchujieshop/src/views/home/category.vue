<template>
  <div class="category">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="categoryList" v-for="item of goodsList" :key="item.id">
        <div @click="imgClick(item.goodsList)">
          <van-image lazy-load width="5rem" height="5rem" class="img" :src="item.image">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
            <template v-slot:error>加载失败</template>
          </van-image>
          <p class="infoList-p1">{{item.name}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import * as api from "@/api/index.js";
export default {
  // props: {
  //   mycategory: Array
  // },
  data() {
    return {
      infoList: "",
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 1,
        observer: true
        // loop:true,
      }
    };
  },
  computed: {
    categoryList() {
      return this.mycategory;
    },
    goodsList() {
      return this.infoList;
    }
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let _self = this;
      let res = await api.getIndexHome();
      _self.infoList = res.data;
    },

    imgClick(single) {
      // window.console.log(single)
      this.$router.push("/singleList");
      this.$store.commit("singleListModule/ListShow", single);
    }
  }
};
</script>
<style lang="scss">
.category {
  .category_text {
    font-size: 14px;
    color: black;
  }
  .categoryList {
    text-align: center;
    margin: 10px 0;
  }
}
</style>