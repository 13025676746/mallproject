<template>
  <div class="toast" v-show="isShow">
    <div v-if="type=='loading'">
      <img src="/img/common/load.gif" alt="">
      <div class="loading-text">{{message}}</div>
    </div>
    <div v-if="type=='success'">
      <img src="/img/common/success.png" alt="" class="success-img">
      <div class="success-text">{{message}}</div>
    </div>
    <div v-if="type=='failure'">
      <img src="/img/common/failure.png" alt="" class="failure-img">
      <div class="failure-text">{{message}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        type: 'loading',
        message: '',
        timer: null,
        isShow: false
      }
    },
    methods: {
      show(type='loading', message='loading', duration=1000) {
        this.type = type
        this.message = message
        this.isShow = true
        if (this.timer) clearTimeout(timer)
        setTimeout(() => {
          this.isShow = false
        }, duration)
      },
      hide(){
        this.isShow=false
      }
    },

  }
</script>

<style scoped lang="sass">
  .toast
    width: 124px
    height: 124px
    position: fixed
    left: 50%
    top: 50%
    background-color: #000
    transform: translate(-50%, -50%)
    color: #ffffff
    text-align: center
    border-radius: 10px
    overflow: hidden
    opacity: 0.8
    z-index: 1000
    .loading-text
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)

    .success-img
      position: relative
      top: -10px

    .success-text
      position: relative
      top: -35px

    .failure-img
      width: 50%
      margin: 20px 0 8px
</style>