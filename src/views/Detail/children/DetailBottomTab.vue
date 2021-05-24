<template>
  <div class="detial-bottom-tab">
    <div class="bottom-tab-item"
         v-for="(item,index) in titleList"
         :key="index"
         :class="{addToCart:index===3,pruchase:index===4}" @click="itemClick(index)">

      {{item}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomTab",
    data() {
      return {
        titleList: ['客服','店铺','收藏','加入购物车','购买']
      }
    },
    methods: {
      itemClick(index) {
        if(index === 3){
          this.$emit('addToCart')
          this.$toast.show('success','加入购物车成功',1500)
          return
        }
      }
    },
  }
</script>

<style scoped lang="sass">
.detial-bottom-tab
  line-height: 49px
  text-align: center
  background-color: #FFE4C4
  position: fixed
  bottom: 0
  left: 0
  right: 0
  z-index: 1
  display: flex
  .bottom-tab-item
    flex: 1
  .addToCart
    flex: 0 0 120px
    background-color: yellow
  .pruchase
    flex: 0 0 80px
    background-color: #ff5777
</style>