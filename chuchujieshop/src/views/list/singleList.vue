<template>
  <div class="singleList">
    <van-nav-bar title="人气王" left-text="返回" left-arrow @click-left="goBack" fixed />
    <!-- <div v-for="(items,i) of singles" :key="i" class="List">
      <van-image width="150px" height="150px" class="img" :src="items.image" />
      <p>{{items.name}}</p>
      <p>{{items.price | toFixed | rmb}}</p>
      <p>{{items.news}}</p>
    </div>-->

    <van-grid class="singleList_box" :border="false" :column-num="2" :gutter="10">
      <van-grid-item v-for="(items,i) of singles" :key="i" class="List" @click="imgClick(items)">
        <van-image lazy-load width="150px" height="150px" class="img" :src="items.imgUrl">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
        <p class="names">{{items.name}}</p>
        <p class="name1">{{items.price | toFixed | rmb}}</p>
        <p class="name2">{{items.news}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  computed: {
    singles() {
      return this.$store.state.singleListModule.singleL;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    imgClick(item) {
      this.$store.commit("listModule/addGoodsList", item);
      this.$router.push("/detail");
      window.console.log(item);
    }
  },
  created() {
    window.console.log(this.singles);
  }
};
</script>

<style lang="scss">
.singleList {
  background-color: #f7f7f7;
  float: left;
  .singleList_box {
    padding-top: 12%;
  }
  .van-nav-bar {
    background-color: #ea6498;
    .van-nav-bar__title,
    .van-nav-bar__text {
      color: #ffffff;
    }
  }
  .List {
    .van-image__img {
      border-radius: 10px;
    }
    .names {
      margin: 10px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .name1 {
      margin-left: -24.33333vw;
      font-size: 16px;
      color: rgb(180, 46, 46);
    }
    .name2 {
      margin: -6vw 0vw 0vw 21vw;
      font-size: 14px;
      color: #ea6498;
    }
  }
}
.van-nav-bar .van-icon {
  color: #fff;
  vertical-align: middle;
}
.van-grid-item__content--center {
  text-align: left;
}
</style>
