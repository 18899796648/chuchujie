<template>
  <div class="list">
    <li v-for="item of buttomlist" :key="item.id" @click="imgClick(item)">
      <div class="body">
        <van-image lazy-load width="100" height="100" :src="item.imgUrl">
           <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>

        <div class="goright">
          <!-- 名称 -->
          <p class="name">{{item.name}}</p>
          <van-tag color="#f2826a">阳光</van-tag>
          <van-tag color="#7232dd">帅气</van-tag>

          <!-- 价格 -->
          <p class="price">
            <van-tag
              color="green"
              size="large"
              plain
              v-if="item.price"
            >{{item.price | toFixed | rmb}}</van-tag>
          </p>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ["listtwo"],
  computed: {
    buttomlist() {
      return this.listtwo;
    }
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
@import "@/style/home/list";
</style>
