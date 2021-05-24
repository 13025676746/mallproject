<template>
  <div class="category-right-scroll">
    <scroll :options="options">
      <slot></slot>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/Scroll/Scroll";
  import {ScrollMixin} from "../../../assets/js/mixins";

  export default {
    name: "CategoryRightScroll",
    mixins:[ScrollMixin]
  }
</script>

<style scoped lang="sass">
.category-right-scroll
  width: calc(100vw - 100px)
  position: fixed
  right: 0
  top: 44px
  border-top: 49px
</style>