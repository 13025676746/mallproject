<template>
  <div class="home-scroll">
    <scroll :options="options" @pullingUpListen="pullingUpListen">
      <slot></slot>
    </scroll>
  </div>
</template>

<script>
  import {ScrollMixin} from 'assets/js/mixins'

  export default {
    name: "HomeScroll",
    mixins:[ScrollMixin]
  }
</script>

<style scoped lang="sass">
.control-tab
  position: fixed
  top: 44px
  left: 0
  right: 0
  z-index: 100
</style>