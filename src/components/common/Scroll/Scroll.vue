<template>
  <div class="scroll">
    <div class="wrapper" ref="wrapper" :style="{height:options.height || '300px'}">
      <div class="content">
        <slot></slot>
      </div>
    </div>
    <div class="back-top" v-show="isShow" @click="backTop">
      <img src="/img/common/top.png" alt="">
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null,
        isShow: false
      }
    },
    props: {
      options: {
        type: Object,
        require: true
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BetterScroll(this.$refs.wrapper, {   //实例化BetterScroll
          probeType: this.options.probeType || 0,
          pullUpLoad: this.options.pullUpLoad || false,
          click: this.options.click || true,
        })
        if (this.options.probeType == 2 || this.options.probeType == 3) {
          this.scrollListen()   //开启滚动监听
        }
        if (this.options.pullUpLoad) {
          this.pullingUpListen()  //开启上拉监听
        }
      })
    },
    methods: {
      /*
      * 封装滚动监听
      * */
      scrollListen() {
        this.scroll.on('scroll', position => {
          if (this.scroll.y < -2000) this.isShow = true
          else this.isShow = false
          this.$emit('scrollListen', position)
        })
      },
      /*
      * 封装上拉监听
      * */
      pullingUpListen() {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUpListen')
          this.refresh()
          setTimeout(() => {
            this.finishPullUp()
          }, 1000)
        })
      },
      /*
      * 封装refresh()和finishPullUp
      * */
      refresh() {
        this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      /*
       * 处理backTop函数
       * */
      backTop() {
        this.scroll.scrollTo(0, 0, 500)
      }
    },
  }
</script>

<style scoped lang="sass">
.wrapper
  overflow: hidden
.back-top
  width: 50px
  height: 50px
  position: fixed
  right: 5px
  bottom: 54px
  z-index: 100
</style>