<template>
  <div class="detail" v-if="detailData">
    <detail-nav-bar></detail-nav-bar>
    <detail-scroll>
      <detail-swiper :swiper-data="detailData.swiperData"></detail-swiper>
      <detail-goods-info :goods-info-data="detailData.goodsInfoData"></detail-goods-info>
      <detail-shop-info :shop-info-data="detailData.shopInfoData"></detail-shop-info>
      <detail-user-comment :user-comment-data="detailData.userCommentData"></detail-user-comment>
      <detail-goods-detail :goods-detail="detailData.goodsDetail"></detail-goods-detail>
      <detail-params-info :params-info="detailData.paramsInfo"></detail-params-info>
      <detail-goods-recommend v-if="recommendData" :goods-recommend-data="recommendData"></detail-goods-recommend>
    </detail-scroll>
    <detail-bottom-tab @addToCart="addToCart"></detail-bottom-tab>
  </div>
</template>

<script>
  import {getDetailData,getRecommentData} from "../../network/detail";
  import {cartAdd,cartNumberUpdate} from "../../network/cart";

  import DetailNavBar from "./children/DetailNavBar";
  import DetailSwiper from "./children/DetailSwiper";
  import DetailGoodsInfo from "./children/DetailGoodsInfo";
  import DetailScroll from "./children/DetailScroll";
  import DetailShopInfo from "./children/DetailShopInfo";
  import DetailGoodsDetail from "./children/DetailGoodsDetail";
  import DetailUserComment from "./children/DetailUserComment";
  import DetailParamsInfo from "./children/DetailParamsInfo";
  import DetailGoodsRecommend from "./children/DetailGoodsRecommend";
  import DetailBottomTab from "./children/DetailBottomTab";

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailGoodsInfo,
      DetailScroll,
      DetailShopInfo,
      DetailGoodsDetail,
      DetailUserComment,
      DetailParamsInfo,
      DetailGoodsRecommend,
      DetailBottomTab
    },
    data() {
      return {
        detailData: null,
        recommendData:null
      }
    },
    computed: {
      iid() {
        return this.$route.params.iid;
      }
    },
    created() {
      getDetailData(this.iid).then(res=>{
        this.detailData=res
        // console.log(this.detailData)
      })
      getRecommentData().then(res=>{
        this.recommendData=res
        // console.log(this.recommendData)
      })
    },
    methods: {
      addToCart() {
        const flag=this.$store.state.cartList.find(item=>{
          return item.iid==this.iid
        })
        if(flag) {
          const iid=this.iid
          const userid=sessionStorage.getItem('userId')
          cartNumberUpdate(iid,userid).then(res=>{
            // console.log(res)
            this.$store.commit('addGoodsNumber', iid)
          })
          return
        }
        const goods={
          userid:sessionStorage.getItem('userId'),
          iid:this.detailData.goodsInfoData.itemInfo.iid,
          shopLogo:this.detailData.shopInfoData.shopLogo,
          shopName:this.detailData.shopInfoData.name,
          img:this.detailData.goodsInfoData.itemInfo.topImages[0],
          title:this.detailData.goodsInfoData.itemInfo.title,
          desc:this.detailData.goodsInfoData.itemInfo.desc,
          price:this.detailData.goodsInfoData.itemInfo.lowNowPrice,
          number:1,
          isSelect:true,
        }
        cartAdd(goods).then(res=>{
          // console.log(res)
          this.$store.commit('addGoods',goods)
        })
      }
    },
  }
</script>

<style scoped>

</style>