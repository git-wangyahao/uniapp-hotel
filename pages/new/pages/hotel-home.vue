<template>
	<view class="">
		<view class="nav-block">
			<anchor-view
			  :scrollTop="scrollTop"
			  :minScolltop="minScolltop"
			  :outermostView="outermostView"
			  :types="types"
			></anchor-view>
		</view>
		<view class="content-block self-collapse">
		<!-- id对应types里的anchor -->
				这是内容
		</view>
	</view>
	
</template>

<script>
	import anchorView from './components/scroll-item.vue'
	export default {
		components:{
			anchorView
			
		},
		data() {
			return {
				 outermostView: '.contain-view',
				  minScolltop: 100, // 当滚动多少时，出现
				  scrollTop:180,
				  types: [
					{
					  title: '标题',
					  anchor: '#title'
					},
					{
					  title: '标题文字2',
					  anchor: '#title2'
					},
					{
					  title: '标题文字3',
					  anchor: '#title3'
					},
				  ]
				}
			},
		}
</script>

<style lang="scss" scoped>
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
	
	.anchor-text {
		color: red;
	}
</style>
