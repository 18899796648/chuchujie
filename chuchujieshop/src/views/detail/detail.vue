<template>
  <div class="detail">
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="goback" />
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item of imageList" :key="item.goodsid">
        <van-image width="100%" height="300px" :src="item.imgUrl">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
      </van-swipe-item>
    </van-swipe>
    <!-- 名字 -->
    <p class="lsName">{{List.name}}</p>
    <!-- 价钱 -->
    <p class="Prices">
      价格：
      <span class="lsPrice">{{List.price | toFixed | rmb}}</span>
    </p>

    <van-tabs>
      <van-tab title="商品详情">
        <!-- 图片 -->
        <div class="imgsl">
          <li v-for="item of imgDetailsList" :key="item.goodsid">
            <van-image width="100%" height="300px" :src="item.imgUrlList">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
              <template v-slot:error>加载失败</template>
            </van-image>
          </li>
        </div>
      </van-tab>
      <van-tab title="商品评论">
        <p class="pls">暂无评论~~</p>
      </van-tab>
    </van-tabs>

    <!-- 购物栏 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        to="/shopcar"
        :info="info.length ? info.length :null"
      />
      <van-goods-action-button type="warning" text="加入购物车" @click="openSku" />
      <van-goods-action-button type="danger" text="立即购买" @click="openSku" />
    </van-goods-action>

    <!-- 商品sku模块 -->
    <div class="sku" v-if="skuShow">
      <div class="mask" @click="closeSku"></div>
      <div class="sku-container">
        <div class="sku-header">
          <div class="sku-thumb-img">
            <van-image :src="List.imgUrl" />
          </div>
          <div class="sku-title">
            <!-- 价钱 -->
            <p
              class="sku-title-price"
              v-if="skuItem.goodsPrice"
            >{{skuItem.goodsPrice | toFixed | rmb }}</p>

            <!-- 库存 -->
            <p class="sku-title-stocknum" v-if="skuItem.stock_num">剩余:{{skuItem.stock_num}}</p>

            <!-- 购买数量 -->
            <van-stepper v-model="skuItem.goodsNum" integer />
          </div>
          <van-icon class="close" name="cross" @click="closeSku" />
        </div>
        <div class="sku-body">
          <div class="sku-size sku-item">
            <div class="sku-item-title">尺寸：</div>
            <ul>
              <li
                :class="current===idx ? 'sku-active' : null"
                v-for="(item,idx) of List.type"
                :key="idx"
                @click="skuSelect(idx)"
              >{{item.name}}</li>
            </ul>
          </div>
          <div class="button-list">
            <van-button
              class="van-button van-button--danger van-button--large"
              @click="addShopCar"
            >加入购物车</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0, //sku高亮索引值
      skuShow: false, //是否显示sku
      skuItem: {
        //sku选项
        id: "", //id
        selectType: "", //商品类型
        goodsPrice: "", //价钱
        stock_num: "", //库存
        isChecked: "", //是否勾选
        goodsNum: "", //商品数量
        imgUrl: "", //图片地址
        goodsName: "" //商品名称
      }
    };
  },

  //监听sku选择
  watch: {
    current: {
      handler(i) {
        let _self = this;
        _self.skuItem = Object.assign({}, _self.skuItem, {
          selectType: _self.List.type[i].name, //商品类型
          goodsPrice: _self.List.skuComb[i].price, //价钱
          stock_num: _self.List.skuComb[i].stock_num //库存
        });
      },
      immediate: true
    }
  },

  created() {
    window.console.log(this.List);
  },
  computed: {
    //初始获得数据
    List() {
      return this.$store.state.listModule.goodsList;
    },
    //渲染头部轮播图片
    imageList() {
      return this.List.detailImage;
    },
    //渲染详情图片列表
    imgDetailsList() {
      return this.List.imgDetailsList;
    },
    //徽标提示
    info() {
      return this.$store.state.shopcarModule.shopCarList;
    }
  },
  methods: {
    //获取商品信息
    getSkuInfo() {
      let _self = this;
      _self.skuItem = Object.assign({}, _self.skuItem, {
        id: _self.List.id, //id
        isChecked: true, //是否勾选
        imgUrl: _self.List.imgUrl, //图片地址
        goodsName: _self.List.name // 商品名称
      });
      let value = _self.skuItem;
      return value;
    },

    //判断是否有相同商品
    skuFilter(currentVal) {
      let _self = this;
      let bool = true;
      let newVal;
      let oldList = _self.$store.state.shopcarModule.shopCarList;

      if (oldList.length === 0) {
        newVal = currentVal;
      } else {
        oldList.forEach(function(item) {
          if (
            item.id === currentVal.id &&
            item.selectType === currentVal.selectType
          ) {
            //id和类型都相同
            bool = false;
            // window.console.log(currentVal.goodsNum)
            // window.console.log(item.goodsNum)
            // window.console.log(item.goodsNum === currentVal.goodsNum)
            item.goodsNum = item.goodsNum + currentVal.goodsNum;
          } else {
            newVal = currentVal;
          }
        });
      }
      return { bool, newVal };
    },

    //把数据提交到购物车
    async addShopCar() {
      let _self = this;
      let currentVal = await _self.getSkuInfo(); //先获取当前提交数据
      let { bool, newVal } = await _self.skuFilter(currentVal); //再把数据放进过滤函数里面判断是否是相同的商品

      if (bool) {
        //如果购买的是不同的商品，存到vuex里面
        _self.$store.commit(
          "shopcarModule/addShopCarList",
          JSON.parse(JSON.stringify(newVal))
        );
      }
      _self.$toast.success("添加成功");
      _self.skuShow = false; //添加成功后关闭sku模块
    },
    goback() {
      this.$router.go(-1);
    },

    skuSelect(idx) {
      //sku选择
      this.current = idx;
    },

    closeSku() {
      //关闭sku
      this.skuShow = false;
    },

    openSku() {
      //打开sku
      this.skuShow = true;
    }
  }
};
</script>

<style lang="scss">
.detail {
  .van-goods-action {
    z-index: 2;
  }
  .sku {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    .mask {
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0.6;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
    }
    .sku-container {
      width: 100%;
      height: 75%;
      background: #fff;
      position: absolute;
      z-index: 2;
      bottom: 0;
      left: 0;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      box-sizing: border-box;
      padding: 20px;
      overflow: hidden;
      .sku-header {
        display: flex;
        border-bottom: 1px solid #eaeaea;
        .sku-thumb-img {
          width: 100px;
          height: 100px;
          border: 2px solid #eaeaea;
        }
        .sku-title {
          width: 250px;
          height: 120px;
          padding: 5px;
          p {
            font-size: 14px;
            color: #969799;
          }
          .sku-title-price {
            font-size: 22px;
            color: #ee0a24;
          }
        }
        .close {
          font-size: 20px;
          color: #969799;
        }
      }
      .sku-body {
        .sku-item {
          margin: 10px 0;
          .sku-item-title {
            margin-bottom: 10px;
          }
          ul {
            display: flex;
            li {
              min-width: 40px;
              padding: 8px;
              border-radius: 4px;
              background: #f7f8fa;
              color: #323233;
              margin-right: 12px;
              text-align: center;
            }
            .sku-active {
              color: #ee0a24;
              background: pink;
            }
          }
        }
        .button-list {
          width: 100%;
          position: fixed;
          bottom: 0;
          left: 0;
          display: flex;
          border-radius: 30px;
          overflow: hidden;
          button {
            font-size: 16px;
          }
        }
      }
    }
  }
  .van-nav-bar {
    background-color: #ea6498;
  }
  .van-nav-bar__title,
  .van-nav-bar__text,
  .van-nav-bar .van-icon {
    color: white;
  }
  .Prices {
    font-size: 20px;
    padding: 10px 10px 10px 0;
    .lsPrice {
      color: #df4b7a;
    }
  }

  .pls {
    text-align: center;
    font-size: 22px;
    color: #df4b7a;
    padding: 10px;
  }
  .van-tab span {
    font-size: 20px;
  }
  .van-tab--active {
    color: #df4b7a;
  }
  .van-tabs__line {
    background-color: #df4b7a;
  }
}
</style>