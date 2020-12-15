<template>
	<view class="wrap" style="background: url('https://axhub.im/pro/8f224d463bba9df2/images/%E9%A6%96%E9%A1%B5/u38.png'); background-repeat: no-repeat;" >
		<view class="header">
			<view class="text_1">新人好礼</view>
			<view class="text_2">100元红包</view>
			<view class="btn">
				立即领取
			</view>
		</view>
		<view class="search">
			<view class="home-site">
				<text>北京市</text>
				<u-icon name="map" class="color-cc"></u-icon>
			</view>
			<view class="home-time">
				<view class="home-time-content">
					<view class="color-cc">
						入住
					</view>
					<view class="color-fw">
						12月17日
					</view>
				</view>
				<view class="home-time-content go-hotel">
					<view class="color-cc">
						离店
					</view>
					<view class="color-fw">
						12月18日
					</view>
				</view>
				<text class="home-time-content color-333">
					共一晚
				</text>
				<u-icon name="calendar"  class="color-cc"></u-icon>
			</view>
			<view class="home-keyword">
				<text class="color-cc">搜索酒店/地名/关键字</text>
				<u-icon name="search"  class="color-cc"></u-icon>
			</view>
			<view class="home-search">
				<view class="home-btn" @click="goToSearchList">
					搜索
				</view>
			</view>
		</view>
		<view class="content">
			<u-tabs @change="change" :bar-width="100" active-color="#FF6262" inactive-color="#606266" font-size="30" :list="list"  :current="current" :is-scroll="true" :offset="	[5, 20]"></u-tabs>
		</view>
		<view class="list">
			<commonList />
			<commonList />
			<commonList />
			<commonList />
			<commonList />
		</view>
	</view>
</template>

<script>
	import { commonList } from '../../components/common'
	export default {
		components:{
			commonList
		},
		data() {
			return {
				current: 0,
			list: [],
			data: [{
				name: '关注',
		
			}, {
				name:  '推荐',
			
			}, {
				name: '电影'
			},{
				name: '电视剧'
			},{
				name: '小视频'
			}, {
				name:  '游戏'
			}, {
				name: '校园'
			},{
				name: '影视'
			},{
				name: '音乐'
			}],
			}
		},
		onLoad() {
			this.list = this.data;
		},
		methods:{
			change(index) {
				this.current = index;
			},
			goToSearchList() {
				uni.navigateTo({
					url:"./pages/search"
				})
			}
		}
	
			
	}
</script>

<style lang="scss" scoped>
	@import './new.scss';
	
</style>
