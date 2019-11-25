<template>
	<div class="addressEdit">
		<van-nav-bar title="编辑地址" left-text="返回" left-arrow @click-left="goBack" />

		<!-- 编辑地址 -->
		<van-address-edit 
			:address-info="AddressInfo" 
			:area-list="areaList" 
			show-postal 
			show-delete
			@save="onSave" 
			@delete="onDelete" />
	</div>
</template>

<script>
	import areaList from "./area.js"
	export default {
		name:"addressEdit",
		data() {
			return {
				areaList
			};
		},
		computed:{
			AddressInfo(){//显示初始地址
				return this.$store.state.addressModule.addressItem
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1)
			},
			onSave(res) {//编辑
				let _self = this
				let oldAddressList = _self.$store.state.addressModule.addressList
				let addressIdx = _self.$store.state.addressModule.addressIdx
				
				oldAddressList[addressIdx] = res//修改第addressIdx个地址
				_self.$store.commit("addressModule/EDIT_ADDRESS_ITEM",oldAddressList)
				_self.$toast.success("添加成功")
				_self.$router.push("/address")
			},
			onDelete() {//删除
				let _self = this
				let addressIdx = _self.$store.state.addressModule.addressIdx
				_self.$store.commit("addressModule/REMOVE_ADDRESS_ITEM",addressIdx)
				_self.$toast.success("删除成功")
				_self.$router.push("/address")
			}
		}
	}
</script>

<style>

</style>
