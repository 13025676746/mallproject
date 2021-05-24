<template>
  <div class="detail-goods-detail">
    <div v-for="(item,index) in goodsDetail.detailImage" :key="index">
      <div class="title">{{item.key}}</div>
      <img class="img" v-for="(item,index) in item.list" :key="index" :src="item" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsDetail",
    props: {
      goodsDetail: {
        type: Object,
        require:true
      },
    },
  }
</script>

<style scoped lang="sass">
.title
  line-height: 50px
  text-align: center
  font-size: 18px
  color: #FF5777
.img
  margin-bottom: 5px
</style>