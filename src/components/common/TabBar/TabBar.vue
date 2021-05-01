<template>
  <div class="tab-bar" :style="{backgroundColor:options.backgroundColor || '#f6f6f6'}">
    <div class="tab-bar-item"
         v-for="(item,index) in options.list"
         :key="index"
         @click="changePage(index)" >
      <img v-if="!(currentIndex==index)" class="img" :src="item.iconPath" alt="">
      <img v-else class="img" :src="item.iconSelectedPath" alt="">
      <div class="title"
           :style="{color:(currentIndex==index) ? (options.selectedColor || '#f00') : (options.color || '#333')}" >
        {{item.text}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    data() {
      return {
        currentIndex:0
      }
    },
    props: {
      options: {
        type: Object,
        require:true
      },
    },
    methods: {
      changePage(index) {
        if (this.currentIndex!=index)
          this.currentIndex=index
        if(this.$route.path!=this.options.list[index].pagePath)
          this.$router.push(this.options.list[index].pagePath)
      }
    },
  }
</script>

<style scoped lang="sass">
.tab-bar
  position: fixed
  bottom: 0
  left: 0
  right: 0
  display: flex
  box-shadow: 0 -1px 1px rgba(20,20,20,0.05)
  height: 49px
  padding: 3px 0 1px
  text-align: center
  .tab-bar-item
    flex: 1
  .img
    width: 25px
    height: 25px
    position: relative
    top: 3px
  .title
    font-size: 14px
    line-height: 20px
    position: relative
    bottom: 2px
</style>