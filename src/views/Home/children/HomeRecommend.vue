<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-for="(item,index) in recommendData.list" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommendData: {
        type: Object,
        require:true
      },
    },
  }
</script>

<style scoped lang="sass">
.home-recommend
  display: flex
  padding: 15px 0
  text-align: center
  line-height: 30px
  border-bottom: 5px solid #eee
  .home-recommend-item
    flex: 1
  img
    width: 70px
</style>