<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cateListLength}})</div>
      <div slot="right" @click="changeStatus">{{title}}</div>
    </nav-bar>
    <scroll :options="options" class="scroll">
      <cart-goods-list :goods-list-data="cartList" ref="itemRef"></cart-goods-list>
    </scroll>
    <cart-bottom-control :goods-list-data="cartList"></cart-bottom-control>
  </div>
</template>

<script>
  import {ScrollMixin} from "../../assets/js/mixins";
  import {mapGetters} from 'vuex'
  import {cartQuery} from "../../network/cart";

  import NavBar from "../../components/common/NavBar/NavBar";
  import CartGoodsList from "./children/CartGoodsList";
  import CartBottomControl from "./children/CartBottomControl";
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartGoodsList,
      CartBottomControl
    },
    mixins:[ScrollMixin],
    data() {
      return {
        title:'管理'
      }
    },
    computed: {
      ...mapGetters(['cateListLength']),
      cartList() {
        return this.$store.state.cartList;
      }
    },
    created() {
      this.$toast.show()
      const userid=sessionStorage.getItem('userId')
      cartQuery(userid).then(res=>{
        // console.log(res)
        const initData=[...res].map(item=>{
          item.isSelect=eval(item.isSelect.toLowerCase())
          return item
        })
        this.$store.commit('initCartList',initData)
        this.$toast.hide()
      })
    },
    methods: {
      changeStatus() {
        if(this.title=='管理') {
          this.$refs.itemRef.manager=true
          return this.title = '完成'
        }
        this.$refs.itemRef.manager=false
        this.title='管理'
      }
    },
  }
</script>

<style scoped lang="sass">
.nav-bar
  background-color: #ff5777
  color: #ffffff
.scroll
  background-color: rgba(245,245,245,0.8)
</style>
