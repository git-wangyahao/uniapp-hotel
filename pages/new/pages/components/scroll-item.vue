<template>
  <view>
    <view
      :scrollTop="scrollTop"
      :minScolltop="minScolltop"
      :outermostView="outermostView"
      :types="types"
      class="anchor-view flex u-border-bottom"
    >
      <view
        v-for="(item,i) in types"
        class="flex-center wid-25 flex"
        v-text="item.title"
        :key="i"
        :id="item.anchor"
        :class="active === i? 'active':''"
        @click="changeActive(i)"
      ></view>
    </view>
  </view>
</template>

<script>
/**
 * @property {Number} minScolltop 你需要在滚动到多少时显示这个界面
 * @property {Number} scrollTop 当前页面的滚动距离
 * @property {String} outermostView 当前界面最外层的节点
 * @property {Array} types 你的锚点数组
 */
export default {
  props: {
    minScolltop: {
      type: Number,
      default: 0
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    outermostView: {
      type: String,
      default: '.contain-view'
    },
    types: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    changeActive(val) {
      this.active = val
      const _this = this
      for (let i = 0; i < _this.types.length; i++) {
        if (i === val) {
          uni
            .createSelectorQuery()
            .select(_this.types[i].anchor)
            .boundingClientRect(data => {
              // 目标位置节点 类或者 id
              uni
                .createSelectorQuery()
                .select('.contain-view')
                .boundingClientRect(res => {
                  // 最外层盒子节点类或者 id
                  uni.pageScrollTo({
                    duration: 0, // 过渡时间
                    scrollTop: data.top - res.top // 到达距离顶部的top值
                  })
                })
                .exec()
            })
            .exec()
          break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.anchor-view {
  background-color: #FFFFFF;
  z-index: 998;
}
.wid-25 {
  color: #666666;
  position: relative;
}
// .active:after {
//   content: '';
//   position: absolute;
//   bottom: 2rpx;
//   width: 50rpx;
//   height: 6rpx;
//   background-color: #186de1;
//   right: 65%;
//   margin-right: -50rpx;
// }

.active:after {
  content: '';
      width: 42rpx;
      height: 0;
      border-bottom: 2px solid #007aff;
      position: absolute;
      left: 50%;
      bottom: 0;
      // -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      // -webkit-transition: .3s;
      transition: .3s;
}

.flex{
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling:touch;
}
.flex-center{
  text-align: center;
  padding: 20rpx 32rpx;
  display: inline-block;
  // z-index: 20000;
  // background-color: pink;
}
</style>