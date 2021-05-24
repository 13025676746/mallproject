<template>
  <div class="detail-nav-bar">
    <nav-bar class="nav-bar">
      <div slot="left" @click="handleBack">
        <img class="img" src="/img/common/back.png" alt="">
      </div>
      <div slot="center">商品详情</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/NavBar/NavBar";
  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    methods: {
      handleBack() {
        this.$router.back()
      }
    },
  }
</script>

<style scoped lang="sass">
.detail-nav-bar
  color: #ffffff
  background-color: #ff5777
  .img
    width: 24px
    position: relative
    top: -2px
</style>