<template>
  <div class="category-goods-list">
    <goods-list :goods-list-data="goodsListData" img-type="category"></goods-list>
  </div>
</template>

<script>
  import GoodsList from "../../../components/content/GoodsList";
  export default {
    name: "CategoryGoodsList",
    components:{
      GoodsList
    },
    props: {
      goodsListData: {
        type: Array,
        require:true
      },
    },
  }
</script>

<style scoped>

</style>