<template>
  <div class="category-left-scroll">
    <scroll :options="options">
      <slot></slot>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/Scroll/Scroll";
  import {ScrollMixin} from "../../../assets/js/mixins";

  export default {
    name: "CategoryLeftScroll",
    mixins:[ScrollMixin]
  }
</script>

<style scoped lang="sass">
.category-left-scroll
  width: 100px
  position: fixed
  left: 0
  top: 44px
  bottom: 49px
</style>