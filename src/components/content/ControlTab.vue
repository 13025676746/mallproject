<template>
  <div class="control-tab">
    <div class="control-tab-item"
         v-for="(item,index) in titleList"
         :key="index" @click="itemClick(index)">
      <span class="title" :class="{active:currentIndex==index?true:false}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ControlTab",
    data() {
      return {
        titleList: ['流行', '新款', '精选'],
        currentIndex: 0
      }
    },
    created() {
      /*
      * 自己监听自己，实现了多个ControlTab同步currentIndex
      * */
      this.$bus.$on('controlTabItemClick',(index)=>{
        this.currentIndex=index
      })
    },
    methods: {
      /*
      * 监听点击
      * */
      itemClick(index) {
        this.currentIndex=index
        this.$bus.$emit('controlTabItemClick',index)
      },
    },
  }
</script>

<style scoped lang="sass">
  .control-tab
    display: flex
    text-align: center
    height: 40px
    line-height: 40px
    margin-bottom: 10px
    background-color: #ffffff
    .control-tab-item
      flex: 1
    .active
      color: #FF5777
      padding: 6px
      border-bottom: 3px solid #ff5777
</style>