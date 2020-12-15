<template>
	<view class="list">
		<view class="search">
			<view class="goBack">
				<u-icon name="arrow-left" @click="returnPre"></u-icon>
			</view>
			<view class="hotel-time">
				<view class="hotel-time-z">
					<text class="blur">住</text>
					<text class="red">12-19</text>
				</view>
				<view class="hotel-time-l">
					<text class="blur">离</text>
					<text class="red">12-20</text>
				</view>
			</view>
			<view class="search-input">
				<u-search placeholder="日照香炉生紫烟" :show-action="false" v-model="keyword"></u-search>
			</view>
			<view class="search-map">
				<u-icon name="map"></u-icon>
			</view>
		</view>
	
		<view class="list-tags">
			<view class="u-m-p-50">
				<view class="u-demo-area u-flex u-row-center">
					<u-dropdown :close-on-click-mask="mask" ref="uDropdown" :activeColor="activeColor" :borderBottom="borderBottom">
						<u-dropdown-item @change="change" v-model="value1" title="位置区域" :options="options1">
							<view class="u-menu-wrap">
								<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop">
									<view v-for="(item,index) in tabbar" :key="index" class="u-tab-item" :class="[current==index ? 'u-tab-item-active' : '']"
									 :data-current="index" @tap.stop="swichMenu(index)">
										<text class="u-line-1">{{item.name}}</text>
									</view>
								</scroll-view>
								<block v-for="(item,index) in tabbar" :key="index">
									<scroll-view scroll-y class="right-box" v-if="current==index">
										<view class="page-view">
											<view class="class-item">
												<view class="item-title">
													<text>{{item.name}}</text>
												</view>
												<view class="item-container">
													<view class="thumb-box" v-for="(item1, index1) in item.foods" :key="index1">
														<image class="item-menu-image" :src="item1.icon" mode=""></image>
														<view class="item-menu-name">{{item1.name}}</view>
													</view>
												</view>
											</view>
										</view>
									</scroll-view>
								</block>
							</view>
						</u-dropdown-item>
						<u-dropdown-item @change="change" v-model="value1" title="价格等级" :options="options1"></u-dropdown-item>
						<u-dropdown-item @change="change" v-model="value2" title="智能排序" :options="options2"></u-dropdown-item>
						<u-dropdown-item title="筛选">
							<view class="slot-content">
								<view class="item-box">
									<view class="item" :class="[item.active ? 'active' : '']" @tap="tagClick(index)" v-for="(item, index) in list" :key="index">
										{{item.label}}
									</view>
								</view>
								<u-button type="primary" @click="closeDropdown">确定</u-button>
							</view>
						</u-dropdown-item>
					</u-dropdown>
				</view>
			</view>

		</view>
		<u-line color="#c2c2c2" />
		<view class="activity">
			<view class="activity-item">
				新人立减
			</view>
			
			<view class="activity-item">
				含早
			</view>
			
			<view class="activity-item">
				4.8分以上
			</view>
		</view>
		<u-line color="#c2c2c2" />
		<view class="hotel-item">
			<commonList />
			<commonList />
			<commonList />
			<commonList />
			<commonList />
			<commonList />
			<commonList />
			<commonList />
			<commonList />
			<commonList />
			<commonList />
			<commonList />
		</view>
	</view>
</template>

<script>
	import classifyData from "@/common/classify.data.js";
	import { commonList } from '../../../components/common'
	export default {
		components:{
			commonList
		},
		data() { 
			return {
				keyword:"",
				value1: '',
				value2: '2',
				mask: true,
				tabbar: classifyData,
				scrollTop: 0, //tab标题的滚动条位置
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度
				options1: [{
						label: '默认排序',
						value: 1,
					},
					{
						label: '距离优先',
						value: 2,
					},
					{
						label: '价格优先',
						value: 3,
					}
				],
				options2: [{
						label: '去冰',
						value: 1,
					},
					{
						label: '加冰',
						value: 2,
					},
					{
						label: '正常温',
						value: 3,
					},
					{
						label: '加热',
						value: 4,
					},
					{
						label: '极寒风暴',
						value: 5,
					}
				],
				list: [{
						label: '琪花瑶草',
						active: true,
					},
					{
						label: '清词丽句',
						active: false,
					},
					{
						label: '宛转蛾眉',
						active: false,
					},
					{
						label: '煦色韶光',
						active: false,
					},
					{
						label: '鱼沉雁落',
						active: false,
					},
					{
						label: '章台杨柳',
						active: false,
					},
					{
						label: '霞光万道',
						active: false,
					}
				],
				borderBottom: false,
				activeColor: '#2979ff'
			}
		},
		methods: {
			returnPre() {
				uni.navigateBack({
				    delta: 1,
				    animationType: 'pop-out',
				    animationDuration: 200
				});
			},
			activeColorChange(index) {
				this.activeColor = ['#2979ff', '#ff9900', '#19be6b'][index];
			},
			change(index) {
				this.$u.toast(`点击了第${index}项`);
			},
			closeDropdown() {
				this.$refs.uDropdown.close();
			},
			tagClick(index) {
				this.list[index].active = !this.list[index].active;
			},
			maskChange(index) {
				this.mask = !index;
			},
			
			getImg() {
				return Math.floor(Math.random() * 35);
			},
			// 点击左边的栏目切换
			async swichMenu(index) {
				if(index == this.current) return ;
				this.current = index;
				// 如果为0，意味着尚未初始化
				if(this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				// 将菜单菜单活动item垂直居中
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({size: true},res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if(!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return ;
						}
						this[dataVal] = res.height;
					}).exec();
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list {
		padding: 0 30rpx;
		.search {
			display: flex;
			justify-content: space-around;
		}
		.hotel-time {
			background-color: rgb(242, 242, 242);
			padding: 10rpx;
			.blur {
				color: #999;
			}
			.red{
				color: red;
			}
		}
		.activity {
			display: flex;
			justify-content: flex-start;
			margin: 20rpx 0;
			.activity-item {
				width: 150rpx;
				height: 56rpx;
				background-color: rgba($color: #ff0000, $alpha: 0.2);
				margin-right: 10rpx;
				color:rgba($color: #ff0000, $alpha: 0.6);
				border-radius: 10rpx;
				text-align: center;
				line-height: 56rpx;
			}
		}
		.hotel-item {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
		}
	}
	
	.u-config-wrap {
		padding: 40rpx;
	}
	
	.slot-content {
		background-color: #FFFFFF;
		padding: 24rpx;
		
		.item-box {
			margin-bottom: 50rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			
			.item {
				border: 1px solid $u-type-primary;
				color: $u-type-primary;
				padding: 8rpx 40rpx;
				border-radius: 100rpx;
				margin-top: 30rpx;
			}
			
			.active {
				color: #FFFFFF;
				background-color: $u-type-primary;
			}
		}
	}
	
	
	.u-wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}
	
	.u-search-box {
		padding: 18rpx 30rpx;
	}
	
	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
	}
	
	.u-search-inner {
		background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 16rpx;
	}
	
	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}
	
	.u-tab-view {
		width: 200rpx;
		height: 100%;
	}
	
	.u-tab-item {
		height: 110rpx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		line-height: 1;
	}
	
	.u-tab-item-active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fff;
	}
	
	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid $u-type-primary;
		height: 32rpx;
		left: 0;
		top: 39rpx;
	}
	
	.u-tab-view {
		height: 100%;
	}
	
	.right-box {
		background-color: rgb(250, 250, 250);
	}
	
	.page-view {
		padding: 16rpx;
	}
	
	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}
	
	.item-title {
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;
	}
	
	.item-menu-name {
		font-weight: normal;
		font-size: 24rpx;
		color: $u-main-color;
	}
	
	.item-container {
		display: flex;
		flex-wrap: wrap;
	}
	
	.thumb-box {
		width: 33.333333%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 20rpx;
	}
	
	.item-menu-image {
		width: 120rpx;
		height: 120rpx;
	}
</style>
