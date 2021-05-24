<template>
  <div class="login">
    <nav-bar class="nav-bar">
      <div slot="center">登录</div>
    </nav-bar>
    <login-control></login-control>
  </div>
</template>

<script>
  import NavBar from "../../components/common/NavBar/NavBar";
  import LoginControl from "./children/LoginControl";
  export default {
    name: "Login",
    components:{
      NavBar,
      LoginControl
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
</style>