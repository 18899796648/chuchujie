<template>
  <div class="searchList">
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>
<script>
export default {
    data () {
        return {
            value:""
        }
    },
    methods: {
        onCancel(){
            this.$router.go(-1)
        },
        onSearch(){
            this.$toast.fail('暂无数据');
        }
    }
}
</script>