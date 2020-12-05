<template>
	<view>
		<view class="pic">
			<u-button type="primary" @click="handleNext">跳转</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			handleNext() {
				
				uni.navigateTo({
					url:'detail'
				})
			}
		}
				
	};
</script>

<style lang="scss" scoped>
	.pic {
		height: 300rpx;
		border: 1rpx solid #ccc;
	}
</style>