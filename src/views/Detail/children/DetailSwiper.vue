<template>
  <div class="detail-swiper">
    <swiper class="swiper-list">
      <swiper-item v-for="(item,index) in swiperData" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {SwiperMixin} from "../../../assets/js/mixins";

  export default {
    name: "DetailSwiper",
    mixins:[SwiperMixin],
  }
</script>

<style scoped lang="sass">
.swiper-list
  height: 350px
</style>