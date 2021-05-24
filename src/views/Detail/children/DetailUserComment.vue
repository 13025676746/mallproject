<template>
  <div class="detail-user-comment">
    <div class="title">
      <div>用户评价({{userCommentData.cRate}})</div>
      <div>查看全部</div>
    </div>
    <div class="content">
      <div class="comment-list">
        <div class="comment-item" v-for="(item,index) in userCommentData.list">
          <div class="top">
            <img :src="item.user.avatar" alt="" class="img">
            <span>{{item.user.uname}}</span>
          </div>
          <div class="center">{{item.content}}</div>
          <div class="bottom">
            <div>{{item.created | format}}</div>
            <div>{{item.style}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../../../assets/js/utils";

  export default {
    name: "DetailUserComment",
    props: {
      userCommentData: {
        type: Object,
        require:true
      },
    },
    filters: {
      format: function (time) {
        const date=new Date(time)
        return formatDate(date,'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped lang="sass">
.detail-user-comment
  padding: 0 5px
  .title
    padding: 0 5px
    line-height: 40px
    display: flex
    justify-content: space-between
    border-bottom: 1px solid #eee
  .top
    line-height: 60px
  .img
    width: 40px
    border-radius: 50%
    border: 1px solid #eee
    margin-right: 10px
    margin-left: 5px
  .center
    padding: 5px 20px
    font-size: 14px
  .bottom
    display: flex
    padding: 5px 20px
    font-size: 14px
    color: #aaa
    border-bottom: 1px solid #eee
    div
      width: 50%
</style>