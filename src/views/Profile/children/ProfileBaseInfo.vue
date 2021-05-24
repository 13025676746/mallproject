<template>
  <div class="profile-base-info">
    <div class="exit" @click="exitCurrent">退出</div>
    <div class="avatar">
      <img src="/img/profile/avatar.png" alt="">
    </div>
    <div class="login-register">
      <div class="top">{{username}}</div>
      <div class="bottom"><img src="/img/profile/phone.png" alt="">暂未绑定手机号</div>
    </div>
    <div class="forward"><img src="/img/profile/next.png" alt=""></div>
  </div>
</template>

<script>
  export default {
    name: "ProfileBaseInfo",
    computed: {
      username() {
        return sessionStorage.getItem('username');
      }
    },
    methods: {
      exitCurrent(){
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('username')
        this.$toast.show('success','退出成功')
        setTimeout(()=>{
          this.$router.push('/login')
        },1500)
      }
    },
  }
</script>

<style scoped lang="sass">
.profile-base-info
  height: 80px
  background-color: #ff5777
  color: #ffffff
  display: flex
  justify-content: space-between
  padding: 60px 10px
  line-height: 25px
  .avatar img
    width: 80px
  .login-register img
    width: 20px
  .forward img
    width: 50px
    margin-top: 15px
  .top
    font-size: 18px
    margin-top: 15px
  .login-register
    position: relative
    left: -25px
  .bottom
    position: relative
    left: -5px
  .exit
    position: absolute
    right: 15px
    top: 44px
    border: 1px solid #ffffff
    padding: 0 3px
</style>