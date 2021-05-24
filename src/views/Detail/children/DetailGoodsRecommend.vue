<template>
  <div class="detail-goods-recommend">
    <div class="title">商品推荐</div>
    <goods-list :goods-list-data="goodsRecommendData" img-type="detail"></goods-list>
  </div>
</template>

<script>
  import GoodsList from "../../../components/content/GoodsList";

  export default {
    name: "DetailGoodsRecommend",
    components:{
      GoodsList
    },
    props: {
      goodsRecommendData: {
        type: Array,
        require:true
      },
    },
  }
</script>

<style scoped lang="sass">
.title
  line-height: 49px
  color: #ff5777
  text-align: center
</style>