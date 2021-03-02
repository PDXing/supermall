<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    //1.创建bs对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    })

    //2.监听scroll(滚动)事件，该事件会返回一个position
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
        //发射自定义scroll事件给父组件，并发出position参数
        this.$emit('scroll', position)
      })
    }
    //3.监听pullingUp事件，监听到该事件完成上拉加载更多
    //
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        //发射自定义pullingUp事件给父组件
        this.$emit('pullingUp')
        // console.log('1111111111111')
      })
    }
  },
  methods: {
    //封装滚动的方法
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },

    //封装完成刷新的方法
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },

    ////封装刷新的方法
    refresh() {
      // console.log('---------------')
      this.scroll && this.scroll.refresh()
    },

    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    },
  },
}
</script>

<style scoped>
</style>
