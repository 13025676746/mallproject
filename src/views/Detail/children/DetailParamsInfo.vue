<template>
  <div class="detail-params-info">
    <div class="size-key">{{paramsInfo.rule.key}}</div>
    <div class="size-value">
      <div class="size-row" v-for="(item,index) in paramsInfo.rule.tables[0]" :key="index">
        <div class="size-column" v-for="(item,index) in item" :key="index">
            {{item}}
        </div>
      </div>
    </div>
    <div class="params-key">{{paramsInfo.info.key}}</div>
    <div class="params-value">
      <div class="params-item" v-for="(item,index) in paramsInfo.info.set">
        <div class="item-key">{{item.key}}</div>
        <div class="item-value">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamsInfo",
    props: {
      paramsInfo: {
        type: Object,
        require:true
      },
    },
  }
</script>

<style scoped lang="sass">
.detail-params-info
  font-size: 14px
.size-key,.params-key
  line-height: 50px
  text-align: center
  color: #ff5777
  font-size: 16px
.size-value
  border: 1px solid #eee
  margin: 0 5px
.size-row
  display: flex
  line-height: 40px
.size-column
  flex: 1
  border: 1px solid #eee
  text-align: center
.params-value
  margin: 0 5px
  border: 1px solid #eee
.params-item
  display: flex
  line-height: 40px
.item-key
  width: 80px
  border: 1px solid #eee
  text-align: center
  display: flex
  justify-content: space-evenly
  flex-flow: column
.item-value
  padding-left: 10px
  flex: 1
  border: 1px solid #eee
</style>