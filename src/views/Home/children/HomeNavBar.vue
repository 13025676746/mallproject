<template>
  <div class="home-nav-bar">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/NavBar/NavBar";
  export default {
    name: "HomeNavBar",
    components:{
      NavBar
    }
  }
</script>

<style scoped lang="sass">
.nav-bar
  background-color: #ff5777
  color: white
</style>