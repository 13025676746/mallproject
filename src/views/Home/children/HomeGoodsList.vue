<template>
  <div class="home-goods-list">
    <goods-list :goods-list-data="goodsListData" img-type="home"></goods-list>
  </div>
</template>

<script>
  import GoodsList from "../../../components/content/GoodsList";
  export default {
    name: "HomeGoodsList",
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

<style scoped lang="sass">

</style>