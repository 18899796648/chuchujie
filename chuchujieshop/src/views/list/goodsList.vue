<template>
  <div class="list">
    <div class="listto">
      <div
        class="infoList"
        v-for="(item,idx) of goodsList"
        :key="idx"
        @click="imgClick(item.goodsList)"
      >
        <div class="infoImg">
          <van-image lazy-load round width="5rem" height="5rem" class="img" :src="item.image">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
            <template v-slot:error>加载失败</template>
          </van-image>
        </div>
        <div class="infoList-p">
          <p class="infoList-p1">{{item.name}}</p>
          <p class="infoList-p2">{{item.update}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["infoList"],
  computed: {
    goodsList() {
      return this.infoList;
    }
  },
  created() {
    window.console.log(this.goodsList);
  },
  methods: {
    imgClick(single) {
      // window.console.log(single)
      this.$router.push("/singleList");
      this.$store.commit("singleListModule/ListShow", single);
    }
  }
};
</script>

<style lang="scss">
.list {
  .infoList {
    float: left;
    width: 187.5px;
    height: 120px;
    .infoImg {
      width: 100px;
      height: 100px;
      border-radius: 50%;

      .img {
        margin-top: 18px;
        margin-left: 10px;
        border: 1px solid #df4b7a;
      }
    }
    .infoList-p {
      width: 75px;
      height: 45px;
      float: left;
      margin: -65px 0px 0px 105px;
      overflow: hidden;
      .infoList-p1 {
        font-size: 17px;
      }
      .infoList-p2 {
        font-size: 14px;
        color: #f3a5be;
        margin-top: 5px;
      }
    }
  }
}
.van-image__img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>