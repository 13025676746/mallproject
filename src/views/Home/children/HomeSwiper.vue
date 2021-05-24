<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item,index) in swiperData" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {SwiperMixin} from "../../../assets/js/mixins";

  export default {
    name: "HomeSwiper",
    mixins:[SwiperMixin]
  }
</script>

<style scoped>

</style>