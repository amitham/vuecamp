<template>
  <a-menu v-model="current" mode="horizontal" class="menu">
    <a-menu-item key="logo">
      <img class="logo" :src="`${publicPath}logo.svg`"/>
    </a-menu-item>
    <a-menu-item key="title">
      VueCamp
    </a-menu-item>
    <a-menu-item key="github" class="github-link">
      <a href="https://github.com/amitham/vuecamp" target="_blank"><a-icon type="github" />GitHub</a>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  data () {
    return {
      publicPath: process.env.BASE_URL,
      current: ['title']
    };
  }
};
</script>

<style scoped>
  .logo {
    width: 60px;
    padding: 6px;
  }

  .menu {
    line-height: 60px;
  }

  .github-link{
    float: right;
    margin-right: 50px;
  }
</style>
