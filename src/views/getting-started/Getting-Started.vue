<template>
  <a-layout class="app-content">
    <h1>Getting Started</h1>
    <hr class="app-hr"/>
    <div class="mt-25">
      <ul class="logo-list">
        <li><img :src="`${publicPath}images/vue.png`"/></li>
        <li><img :src="`${publicPath}images/vuex.png`"/></li>
        <li><img :src="`${publicPath}images/router.png`"/></li>
        <li><img :src="`${publicPath}images/babel.png`"/></li>
        <li><img :src="`${publicPath}images/eslint.svg`"/></li>
      </ul>
    </div>
    <div>
      <ul class="logo-list names-list">
        <li>Vue</li>
        <li>Vuex</li>
        <li>Vue-Router</li>
        <li>Babel</li>
        <li>ESLint</li>
      </ul>
    </div>
  </a-layout>
</template>

<script>
export default {
  name: 'Getting-Started',
  data () {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style scoped>
  .logo-list {
    list-style: none;
    padding-left: 0;
  }

  .logo-list > li {
    float: left;
    line-height: 180px;
    margin-right: 30px;
    width: 180px;
    text-align: center;
  }

  .logo-list > li > img {
    width: 180px;
  }

  .names-list > li {
    line-height: 60px;
    font-weight: bold;
  }
</style>
