<template>
  <div class="detail-goods-info">
    <div class="title">{{goodsInfoData.itemInfo.title}}</div>
    <div>
      <span class="price">{{goodsInfoData.itemInfo.price}}</span>
      <span class="old-price">{{goodsInfoData.itemInfo.oldPrice}}</span>
      <span class="discount">{{goodsInfoData.itemInfo.discountDesc}}</span>
    </div>
    <div class="columns">
      <span v-for="(item,index) in goodsInfoData.columns" :key="index">{{item}}</span>
    </div>
    <div class="services">
      <div class="services-item" v-for="(item,index) in goodsInfoData.shopInfo.services">
        <img class="img" :src="item.icon" alt="">
        <span class="name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      goodsInfoData: {
        type: Object,
        require:true
      },
    },
  }
</script>

<style scoped lang="sass">
.detail-goods-info
  padding: 0 5px
  border-bottom: 3px solid #ddd
  .title
    font-size: 18px
    line-height: 30px
  .price
    font-size: 20px
    line-height: 35px
    color: #ff5777
  .old-price
    font-size: 14px
    color: #aaa
    text-decoration: line-through
    margin: 0 3px
  .discount
    font-size: 13px
    padding: 2px 6px
    background-color: #ff5777
    border-radius: 8px
    position: relative
    top: -8px
  .columns
    display: flex
    justify-content: space-between
    font-size: 14px
    line-height: 25px
    color: #aaa
    border-bottom: 2px solid #eee
  .services
    display: flex
    justify-content: space-between
    font-size: 12px
    line-height: 50px
  .img
    width: 16px
</style>