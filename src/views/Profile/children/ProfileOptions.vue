<template>
  <div class="profile-options">
    <div class="options-item" v-for="(item,index) in dataList" :key="index" :class="{three:index===2}">
      <img :src="item.icon" alt="">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileOptions",
    data() {
      return {
        dataList: [
          {
            icon:'/img/profile/message.png',
            title:'我的信息'
          },
          {
            icon:'/img/profile/integral.png',
            title:'积分商城'
          },
          {
            icon:'/img/profile/vip.png',
            title:'会员卡'
          },
          {
            icon:'/img/profile/cart.png',
            title:'我的购物车'
          },
          {
            icon:'/img/profile/bag.png',
            title:'下次购物APP'
          },
        ]
      }
    },
  }
</script>

<style scoped lang="sass">
.profile-options
  background-color: #eee
  line-height: 40px
  font-size: 14px
  .options-item
    background-color: #ffffff
    padding: 0 10px
    margin-bottom: 2px
  .options-item img
    width: 20px
    margin-right: 10px
  .three
    margin-bottom: 10px
</style>