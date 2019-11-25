<template>
  <div class="order">
    <van-nav-bar title="全部订单" left-arrow @click-left="goBack">
      <van-icon name="wap-home-o" slot="right" @click="homeList" />
    </van-nav-bar>

    <!-- 无订单列表 -->
    <div class="noList" v-if="shopCarList.length===0">
      <div class="message">
        <van-icon class="icon" name="shopping-cart-o"></van-icon>
        <span class="text">暂无订单~</span>
      </div>
    </div>

    <!-- 列表 -->
    <template v-else>
      <van-swipe-cell class="swipeCell" v-for="(item, idx) in shopCarList" :key="idx">
        <div class="card">
          <van-image lazy-load class="image" :src="item.imgUrl">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
            <template v-slot:error>加载失败</template>
          </van-image>

          <div class="center">
            <div class="name">{{item.goodsName}}</div>
            <div class="type">规格:{{item.selectType}}</div>
            <div class="bottom">
              <p class="price">{{item.goodsPrice | toFixed | rmb}}</p>
              <van-row gutter="10">
                <van-col span="12">
                  <van-button plain hairline type="primary" color="#383235" size="mini">查看物流</van-button>
                </van-col>
                <van-col span="12">
                  <van-button plain hairline type="info" color="#ea64a2" size="mini">评价</van-button>
                </van-col>
              </van-row>
            </div>
          </div>
        </div>
        <template slot="right">
          <van-button @click="removeItem(idx)" class="delate" square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    //购物车列表数据
    shopCarList() {
      return this.$store.state.shopcarModule.shopCarList;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    homeList() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.order {
  height: 100%;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
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
  .noList {
    flex: 1;

    .message {
      width: 100%;
      height: 40px;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        font-size: 24px;
      }
    }
  }

  .button-group {
    height: 50px;

    .removeAll {
      float: right;
      margin: 9px 0;
      margin-right: 5px;
    }
  }

  .swipeCell {
    margin-bottom: 5px;

    .card {
      width: 100%;
      display: flex;
      justify-content: space-around;

      .image {
        width: 70px;
        height: 90px;
      }

      .center {
        width: 250px;

        .name {
          width: 220px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .bottom {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 20px;

          .price {
            width: 60px;
            color: #ea64a2;
          }
          .van-row {
            margin-top: 30px;
          }
        }
      }
    }

    .van-swipe-cell__right {
      height: 100%;

      .delate {
        height: 100%;
      }
    }
  }

  .van-checkbox {
    margin-left: 5px;
  }
}
</style>