<template>
  <div class="home" v-if="homeData">
    <home-nav-bar></home-nav-bar>
    <home-scroll @requestMoreGoodsData="requestMoreGoodsData">
      <home-swiper :swiper-data="homeData.swiperData"></home-swiper>
      <home-recommend :recommend-data="homeData.recommendData"></home-recommend>
      <home-featrue></home-featrue>
      <home-control-tab></home-control-tab>
      <home-goods-list :goods-list-data="homeGoodsData[currentType].list" ref="goodsList"></home-goods-list>
    </home-scroll>
  </div>
</template>

<script>
  import {getHomeData, getHomeGoodsData} from "../../network/home";
  import {ControlTabMixin} from "../../assets/js/mixins";

  import HomeNavBar from "./children/HomeNavBar";
  import HomeSwiper from "./children/HomeSwiper";
  import HomeRecommend from "./children/HomeRecommend";
  import HomeFeatrue from "./children/HomeFeatrue";
  import HomeScroll from "./children/HomeScroll";
  import HomeControlTab from "./children/HomeControlTab";
  import HomeGoodsList from "./children/HomeGoodsList";

  export default {
    name: "Home",
    components: {
      HomeNavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeatrue,
      HomeScroll,
      HomeControlTab,
      HomeGoodsList
    },
    mixins: [ControlTabMixin],
    data() {
      return {
        //初始化页面数据
        homeData: null,
        homeGoodsData: {
          pop: {list: [], page: 0},
          new: {list: [], page: 0},
          sell: {list: [], page: 0}
        },
      }
    },
    created() {
      //请求home页面基本数据
      this.getHomeData()
      //请求home页面商品数据
      this.getHomeGoodsData('pop')
      this.getHomeGoodsData('new')
      this.getHomeGoodsData('sell')
    },
    methods: {
      /*
      * 封装home页面数据请求方法
      * */
      getHomeData() {
        this.$toast.show()
        getHomeData().then(res => {
          this.homeData = res
          this.$toast.hide()
          // console.log(this.homeData)
        })
      },
      getHomeGoodsData(type) {
        this.$toast.show()
        let page = this.homeGoodsData[type].page += 1
        getHomeGoodsData(type, page).then(res => {
          this.homeGoodsData[type].list.push(...res.data)
          this.$toast.hide()
          // console.log(this.homeGoodsData[type].list)
        })
      },
      requestMoreGoodsData() {
        this.getHomeGoodsData(this.currentType)
      },
    },
  }
</script>

<style scoped lang="sass">

</style>