<template>
  <div class="profile-account-info">
    <div class="account-info-item" v-for="(item,index) in dataList" :key="index">
      <div><span class="value">{{item.value}}</span>{{item.unit}}</div>
      <div>{{item.key}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileAccountInfo",
    data() {
      return {
        dataList:[
          {
            key:'我的余额',
            value:'0.00',
            unit:'元'
          },
          {
            key:'我的优惠',
            value:'0',
            unit:'个'
          },
          {
            key:'我的积分',
            value:'0',
            unit:'分'
          }
        ]
      }
    },
  }
</script>

<style scoped lang="sass">
.profile-account-info
  display: flex
  justify-content: space-between
  background-color: #eee
  height: 100px
  text-align: center
  border-bottom: 10px solid #eee
  .account-info-item
    width: 33%
    background-color: #ffffff
    display: flex
    flex-flow: column
    justify-content: space-evenly
    padding: 15px 0
  .value
    font-weight: 700
    color: #ff5777
</style>