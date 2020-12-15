<template>
	<view class="search">
		<view class="search-box">
			<u-search placeholder="搜索酒店地名关键词" v-model="keyword"></u-search>
		</view>
		<view class="site">
			<view class="site-item" v-for="item in list" :key="item.id">
				<view class="site-title">
					<u-icon name="twitter" color="#2979ff" size="28"></u-icon>
					<text>历史记录</text>
				</view>
				<u-grid :col="4" class="site-main">
					<u-grid-item @click="goToList">
						<view class="grid-text">北京</view>
					</u-grid-item>
					<u-grid-item>
						<view class="grid-text">北京</view>
					</u-grid-item>
					<u-grid-item>
						<view class="grid-text">北京</view>
					</u-grid-item>
					<u-grid-item>
						<view class="grid-text">北京</view>
					</u-grid-item>
					<u-grid-item>
						<view class="grid-text">北京</view>
					</u-grid-item>
					<u-grid-item>
						<view class="grid-text">北京</view>
					</u-grid-item>
					<u-grid-item>
						<view class="grid-text">北京</view>
					</u-grid-item>
					<u-grid-item>
						<view class="grid-text">北京</view>
					</u-grid-item>

				</u-grid>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				list:[
					{ 
						id:1,
						name:"北京"
					},
					{
						id:2,
						name:"北京"
					},
					{
						id:3,
						name:"北京"
					},
					{
						id:4,
						name:"北京"
					},
					{
						id:5,
						name:"北京"
					}
				]
			}
		},
		methods:{
			goToList() {
				uni.navigateTo({
					url:'./list'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.search {
		background-color: rgba(242, 242, 242, 1);
		height: 100vh;
		
		.search-box {
			background-color: #ffffff;
			padding: 0 30rpx;
			padding-top: 88rpx;
			height: 180rpx;
		}
	}
	.site {
			padding: 0 30rpx;
		.site-main {
			display: flex;
			flex-wrap: wrap;
			text-align: center;
			margin-bottom: 20rpx;
			text {
				width: 25%;
				height: 84rpx;
				background-color: #ffffff;
			}
		}
	}
</style>
