<template>
  <div class="detail-shop-info">
    <div class="top">
      <img class="img" :src="shopInfoData.shopLogo" alt="">
      <span>{{shopInfoData.name}}</span>
    </div>
    <div class="center">
      <div class="left">
        <div class="sells">
          <div>{{shopInfoData.cSells}}</div>
          <div>总销量</div>
        </div>
        <div class="goods">
          <div>{{shopInfoData.cGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <div class="score-item" v-for="(item,index) in shopInfoData.score" :key="index">
          <span>{{item.name}}</span>
          <span class="score" :class="{score_hight:item.isBetter}">{{item.score}}</span>
          <span v-if="item.isBetter" class="hight">高</span>
          <span v-else class="low">低</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span>进入店铺</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopInfoData: {
        type: Object,
        require:true
      },
    },
  }
</script>

<style scoped lang="sass">
.detail-shop-info
  padding: 0 5px
  .top
    line-height: 70px
    font-size: 18px
  .img
    width: 40px
    border-radius: 50%
    border: 1px solid #eee
    margin-right: 10px
  .center
    display: flex
  .left
    width: 50%
    border-right: 1px solid #eee
    display: flex
    justify-content: space-evenly
    text-align: center
    line-height: 40px
    font-weight: 600
  .right
    flex: 1
    display: flex
    justify-content: space-between
    flex-flow: column
    padding: 0 20px
    font-size: 14px
  .score-item
    display: flex
    justify-content: space-between
  .bottom
    text-align: center
    line-height: 50px
    span
      padding: 5px 15px
      background-color: #eee
      border-radius: 15px
  .score
    color: darkgreen
  .hight,.low
    color: #ffffff
    padding: 2px 3px
    background-color: crimson
    border-radius: 5px
  .low
    background-color: darkgreen
  .score_hight
    color: crimson
</style>