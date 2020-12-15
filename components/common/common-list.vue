<template>
	<view class="common-list">
		<view class="common-pic">
			<image  src="https://axhub.im/pro/8f224d463bba9df2/images/%E9%A6%96%E9%A1%B5/p0.png" mode=""></image>
			<text>南锣鼓巷附近</text>
		</view>
		<view class="common-title">
			<text>锦江之星（背景王府井店）</text>
		</view>
		<view class="common-score">
			<text class="text1">4.6分</text>
			<text class="text2">5000+消费</text>
		</view>
		<view class="common-money">
			<text class="text1">¥360</text>
			<text class="text2">起</text>
			<text class="text3">新人红包</text>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.common-list {
		margin-bottom: 30rpx;
		width: 48%;
		.common-pic {
			position: relative;
			image {
				width: 100%;
				height: 220rpx;
			}
			text {
				position: absolute;
				right: 20rpx;
				top: 20rpx;
				background-color: rgba($color: #000000, $alpha: 0.5);
				color: #FFFFFF;
				border-radius: 20rpx;
				padding: 0 10rpx;
			}
		}
		.common-title {
			color: #000;
			font-size: 28rpx;
			font-weight: 700;
		}
		.common-score {
			.text1 {
				font-size: 28rpx;
				font-weight: 700;
				color: #28D094;
			}
			.text2 {
				font-size: 24rpx;
				color: #333;
				margin-left: 15rpx;
			}
			
		}
		.common-money {
			.text1{ 
				color: #FF6262;
				font-size: 32rpx;
				font-weight: 700;
			
			},
			.text2{
				font-size:24rpx;
				color: #999;
				padding-right: 20rpx;
				padding-left: 4rpx;
			}
			.text3{
				color: #ffc71c;
				font-size:24rpx;
				padding: 1.5rpx 1.5rpx 1.5rpx;
				border: 1px solid #ffc71c;
			}
		}
	}
</style>
