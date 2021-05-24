<template>
  <div class="cart-goods-list" v-if="goodsListData[0]">
    <div class="goods-list-item" v-for="(item,index) in goodsListData" :key="index">
      <div class="shop-info">
        <img class="shop-logo" :src="item.shopLogo" alt="">
        <span>{{item.shopName}}</span>
      </div>
      <div class="goods-info">
        <div class="select" @click="changeSelect(item.iid,item.isSelect,index)">
          <img src="/img/cart/select_all.png" alt="" v-if="item.isSelect">
          <img src="/img/cart/circle.png" alt="" v-else>
        </div>
        <div class="goods-img"><img :src="item.img" alt=""></div>
        <div class="base-info">
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.descri}}</div>
          <div class="price-number">
            <span class="price">{{item.price}}</span>
            <span>×{{item.number}}</span>
          </div>
        </div>
        <div class="select" @click="deleteItem(item.iid,index)" v-if="manager"><img src="/img/cart/delete.png" alt=""></div>
      </div>
    </div>
  </div>
  <div class="empty" v-else>购物车为空</div>
</template>

<script>
  import {cartDelete,cartSelectUpdate} from "../../../network/cart";

  export default {
    name: "CartGoodsList",
    data() {
      return {
        manager: false
      }
    },
    props: {
      goodsListData: {
        type: Array,
        require:true
      },
    },
    methods: {
      changeSelect(iid,isSelect,index) {
        cartSelectUpdate(iid,sessionStorage.getItem('userId'),!isSelect).then(res=>{
          // console.log(res)
          this.$store.commit('changeSelect',index)
        })
      },
      deleteItem(iid,index){
        cartDelete(iid,sessionStorage.getItem('userId')).then(res=>{
          // console.log(res)
          this.$store.commit('deleteItem',index)
          this.$toast.show('success','删除成功')
        })
      }
    },
  }
</script>

<style scoped lang="sass">
.cart-goods-list
  padding: 10px 10px 44px
  .goods-list-item
    background-color: #ffffff
    border-radius: 10px
    padding: 10px
    margin-top: 10px
  .shop-info
    margin-bottom: 5px
  .shop-logo
    width: 30px
    border-radius: 50%
    margin-right: 15px
  .goods-info
    display: flex
  .select
    width: 30px
    height: 30px
    margin-right: 10px
    margin-top: 40px
  .goods-img
    width: 100px
    height: 110px
    border-radius: 10px
    overflow: hidden
  .base-info
    flex: 1
    font-size: 14px
    padding: 0 10px
    min-width: 0
    display: flex
    flex-flow: column
    justify-content: space-between
  .title,.desc
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    font-weight: 700
  .price-number
    display: flex
    justify-content: space-between
  .desc
    position: relative
    top: -15px
    font-weight: 500
  .price
    font-weight: 700
    font-size: 16px
    color: #ff5777
.empty
  background-color: #FFE4C4
  text-align: center
  line-height: calc(100vh - 49px - 44px - 44px)
  font-size: 30px
  /*color: #ffffff*/
</style>