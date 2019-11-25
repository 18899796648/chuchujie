<template>
  <div class="address">
    <van-nav-bar title="地址列表" left-text="返回" left-arrow @click-left="goBack" />

    <!-- 无地址列表 -->
    <van-address-list class="noAddress" v-if="list.length === 0" @add="onAdd" @edit="onEdit">
      <slot name="top">暂无地址~</slot>
    </van-address-list>

    <!-- 有地址列表 -->
    <van-address-list v-else v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: 0
    };
  },
  computed: {
    list() {
      let _self = this;
      let arr = [];
      let array = _self.$store.state.addressModule.addressList;
      array.forEach(function(item, idx) {
        arr.push({
          id: idx,
          name: item.name,
          tel: item.tel,
          address: item.province + item.city + item.county + item.addressDetail
        });
      });
      return arr;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onAdd() {
      //添加地址
      this.$router.push("/addressAdd");
    },
    onEdit(item, idx) {
      //编辑地址

      this.$store.commit("addressModule/GET_ADDRESS_ITEM", {
        item: item,
        idx: idx
      });
      this.$router.push("/addressEdit");
    },
    getList() {
      //获取地址列表
      let _self = this;
      let arr = [];
      let array = _self.$store.state.addressModule.addressList;
      array.forEach(function(item, idx) {
        arr.push({
          id: idx,
          name: item.name,
          tel: item.tel,
          address: item.province + item.city + item.county + item.addressDetail
        });
      });
      _self.list = arr;
    }
  },
  mounted() {
    //更新页面
  }
};
</script>

<style lang="scss">
.address {
  .noAddress {
    text-align: center;
    height: 400px;
    line-height: 400px;
  }
}
</style>