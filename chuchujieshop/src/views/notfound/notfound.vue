<template>
  <div class="notfound">
    <h1>
      404!
      <p>找不到该地址</p>
      <van-button plain type="primary" color="red" @click="goBack">返回上一步</van-button>
    </h1>
  </div>
</template>
<script>
export default {
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
};
</script>
<style lang="scss">
.notfound {
  h1 {
      color: red;
    text-align: center;
    top: 50%;
    margin-top: 40%;
  }
}
</style>