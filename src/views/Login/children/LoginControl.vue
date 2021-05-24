<template>
  <div class="login-control">
    <div class="title">蘑菇街</div>
    <div class="input">
      <div>
        <img src="/img/login/username.png" alt="">
        <input type="text" placeholder="username" v-model="username">
      </div>
      <div>
        <img src="/img/login/password.png" alt="" >
        <input type="password" placeholder="password" v-model="password">
      </div>
    </div>
    <div class="checkInput">
      <span><input type="checkbox">记住密码</span>
      <span><input type="checkbox">自动登录</span>
    </div>
    <div class="button">
      <div @click="login">登录</div>
      <div @click="toRegister">注册</div>
    </div>
    <div class="forget">忘记密码?</div>
  </div>
</template>

<script>
  import {userLogin} from "../../../network/login";

  export default {
    name: "LoginControl",
    data() {
      return {
        username: '',
        password:''
      }
    },
    methods: {
      toRegister() {
        this.$router.push('/register')
      },
      login(){
        if(!this.username) return alert('用户名不能为空')
        if(!this.password) return alert('密码不能为空')
        userLogin(this.username,this.password).then(res=>{
          if(res=='用户名或密码错误') return alert('用户或密码错误')
          sessionStorage.setItem('token',res.token)
          sessionStorage.setItem('userId',res.id)
          sessionStorage.setItem('username',res.username)
          this.$toast.show('success','登录成功')
          setTimeout(()=>{
            this.$router.push('/')
          },1500)
        })
      }
    },
  }
</script>

<style scoped lang="sass">
.login-control
  position: fixed
  top: 44px
  bottom: 0
  left: 0
  right: 0
  background-color: #FFE4C4
  z-index: 2
  .title
    line-height: 200px
    font-size: 50px
    text-align: center
    color: #ff5777
  .input
    display: flex
    height: 200px
    flex-flow: column
    justify-content: space-evenly
  .input input
    width: 70%
    line-height: 35px
    border: 2px solid #ff5777
    font-size: 16px
    box-sizing: border-box
    margin-left: 15%
    padding-left: 40px
  .input img
    width: 30px
    margin: 5px
    position: absolute
    left: 15%
  .checkInput
    display: flex
    justify-content: space-evenly
    position: relative
    top: -20px
  .checkInput input
    width: 15px
    position: relative
    top: 1px
  .button
    line-height: 40px
    height: 150px
    display: flex
    justify-content: space-evenly
    flex-flow: column
    text-align: center
  .button div
    width: 70%
    background-color: #ff5777
    margin: 0 auto
    color: #ffffff
  .forget
    text-align: center
    line-height: 60px
</style>