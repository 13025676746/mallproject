<template>
  <div class="category-goods-type">
    <div class="goods-type-item" v-for="(item,index) in goodsTypeData" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryGoodsType",
    props: {
      goodsTypeData: {
        type: Array,
        require:true
      },
    },
  }
</script>

<style scoped lang="sass">
.category-goods-type
  display: flex
  justify-content: space-evenly
  flex-wrap: wrap
  text-align: center
  font-size: 14px
  line-height: 25px
.goods-type-item
  width: 30%
  margin-bottom: 5px
</style>