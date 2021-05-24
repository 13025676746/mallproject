<template>
  <div class="home-goods-list">
    <div class="goods-list-item"
         v-for="(item,index) in goodsListData"
         :key="index"
         @click="itemClick(item.iid || item.item_id)">
          <img class="img" v-lazy="item.show.img" alt="" v-if="imgType=='home'">
          <img class="img" v-lazy="item.img" alt="" v-if="imgType=='category'">
          <img class="img" v-lazy="item.image" alt="" v-if="imgType=='detail'">
        <div class="text">
          <div class="title">{{item.title}}</div>
          <div class="bottom">
            <span class="price">{{item.price}}</span>
            <span class="cfav">{{item.cfav}}</span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsList",
    props: {
      goodsListData: {
        type: Array,
        require:true
      },
      imgType:{
        type:String,
        require:true
      }
    },
    methods: {
      itemClick(iid) {
        this.$router.push({
          path:'/detail/'+iid
        })
      }
    },
  }
</script>

<style scoped lang="sass">
.home-goods-list
  display: flex
  justify-content: space-evenly
  flex-wrap: wrap
  .goods-list-item
    width: 48%
    text-align: center
    line-height: 25px
    display: flex
    justify-content: space-between
    flex-flow: column
  .img
    border-radius: 5px
  .title
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
  .bottom
    position: relative
    top: -8px
  .price
    color: #ff5777
  .cfav::before
    content: ""
    display: inline-block
    width: 25px
    height: 25px
    background: url("/img/common/collect.svg") no-repeat  7px 10px/16px 16px
</style>