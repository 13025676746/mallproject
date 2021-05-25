<template>
  <div class="register-control">
    <div class="title">蘑菇街</div>
    <div class="input">
      <div>
        <img src="/img/login/username.png" alt="">
        <input type="text" placeholder="username" v-model="username">
      </div>
      <div>
        <img src="/img/login/password.png" alt="">
        <input type="password" placeholder="password" v-model="password">
      </div>
      <div>
        <img src="/img/login/password.png" alt="">
        <input type="password" placeholder="password" v-model="repeatPassword">
      </div>
      <div class="register" @click="registerUser">立即注册</div>
    </div>
  </div>
</template>

<script>
  import {registerUser} from "../../../network/register";

  export default {
    name: "RegisterControl",
    data() {
      return {
        username: '',
        password:'',
        repeatPassword:''
      }
    },
    methods: {
      registerUser() {
        if(!this.username) return this.$toast.show('failure','用户名不能为空')
        if(!this.password) return this.$toast.show('failure','密码不能为空')
        if(!this.repeatPassword) return this.$toast.show('failure','请输入确认密码')
        if(this.password !== this.repeatPassword) return this.$toast.show('failure','两次密码不一致')
        registerUser(this.username,this.password).then(res=>{
          if(res=='用户名已存在') return this.$toast.show('failure','用户名已存在')
          if(res=='注册成功') {
            this.$toast.show('success','注册成功')
            setTimeout(()=>{
              this.$router.replace('/login')
            },1500)
          }else{
            this.$toast.show('failure','连接超时')
          }
        })
      }
    },
  }
</script>

<style scoped lang="sass">
.register-control
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
    height: 300px
    flex-flow: column
    justify-content: space-evenly
  .input input
    width: 70%
    line-height: 35px
    border: 2px solid #ff5777
    font-size: 16px
    padding-left: 40px
    box-sizing: border-box
    margin-left: 20px
  .input img
    width: 30px
    margin: 5px
    position: relative
    left: 60px
  .register
    line-height: 40px
    width: 70%
    margin: 0 auto
    background-color: #ff5777
    text-align: center
    color: #ffffff
</style>