<template>
  <div class="detail-scroll">
    <scroll :options="options">
      <slot></slot>
    </scroll>
  </div>
</template>

<script>
  import {ScrollMixin} from "../../../assets/js/mixins";

  export default {
    name: "DetailScroll",
    mixins:[ScrollMixin]
  }
</script>

<style scoped>

</style>