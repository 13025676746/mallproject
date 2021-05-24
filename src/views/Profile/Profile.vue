<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">个人信息</div>
    </nav-bar>
    <profile-base-info></profile-base-info>
    <profile-account-info></profile-account-info>
    <profile-options></profile-options>
  </div>
</template>

<script>
  import NavBar from "../../components/common/NavBar/NavBar";
  import ProfileBaseInfo from "./children/ProfileBaseInfo";
  import ProfileAccountInfo from "./children/ProfileAccountInfo";
  import ProfileOptions from "./children/ProfileOptions";

  export default {
    name: "Profile",
    components:{
      NavBar,
      ProfileBaseInfo,
      ProfileAccountInfo,
      ProfileOptions
    }
  }
</script>

<style scoped lang="sass">
.nav-bar
  background-color: #ff5777
  color: #ffffff
</style>