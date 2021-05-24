<template>
  <div id="app">
    <keep-alive exclude="Detail,Cart,Profile,Login,Register">
      <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "@/components/content/MainTabBar";
  export default {
    name:'App',
    components:{
      MainTabBar
    },
  }
</script>

<style lang="sass">
body
  margin: 0
  padding: 0
a,a:hover,a:active
  display: block
  text-decoration: none
  color: #222
input
  outline: none
img
  vertical-align: middle
  width: 100%
  height: auto
</style>