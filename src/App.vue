<template>
  <div id="app">
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "@/components/content/MainTabBar/MainTabBar";
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
</style>
