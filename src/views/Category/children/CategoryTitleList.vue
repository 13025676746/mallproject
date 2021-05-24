<template>
  <div class="category-title-list">
    <div class="title-list-item"
         v-for="(item,index) in titleListData"
         :key="index"
         :class="{active:index===currentIndex}"
         @click="itemClick(index)">
      {{item.title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryTitleList",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titleListData: {
        type: Array,
        require: true
      },
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('titleClick')
      }
    },
  }
</script>

<style scoped lang="sass">
.category-title-list
  width: 100px
  line-height: 45px
  text-align: center
  background-color: #F6F5F7
  font-size: 14px
.active
  background-color: #ffffff
  color: #ff5777
  border-left: 3px solid #ff5777
</style>
