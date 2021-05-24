<template>
  <div class="category" v-if="categoryData">
    <category-nav-bar></category-nav-bar>
    <category-left-scroll>
      <category-title-list :title-list-data="categoryData.data.category.list" ref="titleList" @titleClick="titleClick"></category-title-list>
    </category-left-scroll>
    <category-right-scroll>
      <category-goods-type v-if="subcategoryData" :goods-type-data="subcategoryData.data.list"></category-goods-type>
      <category-control-tab ></category-control-tab>
      <category-goods-list :goods-list-data="subcategoryDetailData"></category-goods-list>
    </category-right-scroll>
  </div>
</template>

<script>
  import {getCategoryData, getSubcategoryData, getSubcategotyDetailData} from "../../network/category";
  import {ControlTabMixin} from "../../assets/js/mixins";

  import CategoryNavBar from "./children/CategoryNavBar";
  import CategoryLeftScroll from "./children/CategoryLeftScroll";
  import CategoryTitleList from "./children/CategoryTitleList";
  import CategoryRightScroll from "./children/CategoryRightScroll";
  import CategoryGoodsType from "./children/CategoryGoodsType";
  import CategoryControlTab from "./children/CategoryControlTab";
  import CategoryGoodsList from "./children/CategoryGoodsList";

  export default {
    name: "Category",
    components: {
      CategoryTitleList,
      CategoryLeftScroll,
      CategoryGoodsType,
      CategoryRightScroll,
      CategoryControlTab,
      CategoryGoodsList,
      CategoryNavBar
    },
    mixins:[ControlTabMixin],
    data() {
      return {
        categoryData: null,
        subcategoryData: null,
        subcategoryDetailData:null,
      }
    },
    created() {
      this.$toast.show()
      getCategoryData().then(res => {
        this.categoryData = res
        this.$toast.hide()
        // console.log(this.categoryData)
      }).then(res => {
        this.getSubcategoryData()
      }).then(res => {
        this.getSubcategotyDetailData()
      })
    },
    methods: {
      getSubcategoryData() {
        this.$toast.show()
        const maitKey = this.categoryData.data.category.list[this.$refs.titleList.currentIndex].maitKey
        getSubcategoryData(maitKey).then(res => {
          this.subcategoryData = res
          this.$toast.hide()
          // console.log(this.subcategoryData)
        })
      },
      getSubcategotyDetailData(){
        this.$toast.show()
        const miniWallkey = this.categoryData.data.category.list[this.$refs.titleList.currentIndex].miniWallkey
        getSubcategotyDetailData(miniWallkey,this.currentType).then(res => {
          this.subcategoryDetailData=res
          this.$toast.hide()
          // console.log(this.subcategoryDetailData)
        })
      },
      //左侧标题点击事件
      titleClick(){
        this.getSubcategoryData()
        this.getSubcategotyDetailData()
      }
    },
  }
</script>

<style scoped>

</style>