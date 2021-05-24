<template>
  <div class="cart-bottom-control" v-if="goodsListData[0]">
    <div @click="changeSelectAll">
      <img src="/img/cart/select_all.png" alt="" v-if="isSelectAll">
      <img src="/img/cart/circle.png" alt="" v-else>
      <span>全选</span>
    </div>
    <div>总计:￥<span>{{totalSum}}</span></div>
    <div class="to-settle">去结算({{selectLength}})</div>
  </div>
  <div class="empty" v-else></div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {cartAllSelectUpdate} from "../../../network/cart";

  export default {
    name: "CartBottomControl",
    props: {
      goodsListData: {
        type: Array,
        default: true
      },
    },
    computed: {
      ...mapGetters(['isSelectAll','totalSum','selectLength'])
    },
    methods: {
      changeSelectAll() {
        cartAllSelectUpdate(sessionStorage.getItem('userId'),!this.isSelectAll).then(res=>{
          // console.log(res)
          this.$store.commit('changeSelectAll',this.isSelectAll)
        })
      }
    },
  }
</script>

<style scoped lang="sass">
.cart-bottom-control
  height: 44px
  line-height: 44px
  background-color: #FFE4C4
  text-align: center
  display: flex
  justify-content: space-between
  position: fixed
  bottom: 49px
  left: 0
  right: 0
  img
    width: 30px
    margin-left: 10px
    position: relative
    top: -2px
  .to-settle
    width: 100px
    background-color: #ff5777
    color: #ffffff
.empty
  height: 44px
  background-color: #FFE4C4
</style>