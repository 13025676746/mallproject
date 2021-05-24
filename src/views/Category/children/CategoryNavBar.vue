<template>
  <div class="category-nav-bar">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/NavBar/NavBar";

  export default {
    name: "CategoryNavBar",
    components:{
      NavBar
    }
  }
</script>

<style scoped lang="sass">
.nav-bar
  background-color: #ff5777
  color: #ffffff
</style>