<template>
  <div class="addressAdd">
    <van-nav-bar title="新增地址" left-text="返回" left-arrow @click-left="goBack" />

    <!-- 编辑地址 -->
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import areaList from "./area.js";
export default {
  name: "addressAdd",
  data() {
    return {
      areaList
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onSave(res) {
      let _self = this;
      _self.$store.commit("addressModule/ADD_ADDRESS_LIST", res);
      _self.$toast.success("添加成功");
      _self.$router.push("/address");
    },
    onDelete() {}
  }
};
</script>

<style lang="scss">
.van-cell .van-field {
  padding: 0;
}
</style>

