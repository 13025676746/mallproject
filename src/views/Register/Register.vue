<template>
  <div class="register">
    <nav-bar class="nav-bar">
      <div slot="left" @click="handleBack">
        <img class="img" src="/img/common/back.png" alt="">
      </div>
      <div slot="center">注册</div>
    </nav-bar>
    <register-control></register-control>
  </div>
</template>

<script>
  import NavBar from "../../components/common/NavBar/NavBar";
  import RegisterControl from "./children/RegisterControl";
  export default {
    name: "Register",
    components:{
      NavBar,
      RegisterControl
    },
    methods: {
      handleBack() {
        this.$router.back()
      }
    },
  }
</script>

<style scoped lang="sass">
.nav-bar
  background-color: #ff5777
  color: #ffffff
  .img
    width: 24px
    position: relative
    top: -3px
</style>