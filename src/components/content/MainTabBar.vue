<template>
  <div class="main-tab-bar">
    <tab-bar :options="tabBarOptions"></tab-bar>
  </div>
</template>

<script>
  import TabBar from "@/components/common/TabBar/TabBar";
  export default {
    name: "MainTarBar",
    components:{
      TabBar
    },
    data() {
      return {
        tabBarOptions: {
          list:[
            {
              pagePath:'/',
              text:'首页',
              iconPath:"/img/tabbar/home.png",
              iconSelectedPath:'/img/tabbar/home_active.png'
            },
            {
              pagePath:'/category',
              text:'分类',
              iconPath:'/img/tabbar/category.png',
              iconSelectedPath:'/img/tabbar/category_active.png'
            },
            {
              pagePath:'/cart',
              text:'购物车',
              iconPath:'/img/tabbar/cart.png',
              iconSelectedPath:'/img/tabbar/cart_active.png'
            },
            {
              pagePath:'/profile',
              text:'我的',
              iconPath:'/img/tabbar/profile.png',
              iconSelectedPath:'/img/tabbar/profile_active.png'
            }
          ]
        }
      }
    },
  }
</script>

<style scoped>

</style>