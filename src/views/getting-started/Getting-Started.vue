<template>
  <a-layout class="app-content">
    <h1>Getting Started</h1>
    <hr class="app-hr"/>
    <div class="mt-25">
      <ul class="logo-list">
        <li>
          <div class="image-con"><img :src="`${publicPath}images/vue.png`"/></div>
          <div class="title-con">Vue</div>
        </li>
        <li>
          <div class="image-con"><img :src="`${publicPath}images/vuex.png`"/></div>
          <div class="title-con">Vuex</div>
        </li>
        <li>
          <div class="image-con"><img :src="`${publicPath}images/router.png`"/></div>
          <div class="title-con">Vue-Router</div>
        </li>
        <li>
          <div class="image-con"><img :src="`${publicPath}images/babel.png`"/></div>
          <div class="title-con">Babel</div>
        </li>
        <li>
          <div class="image-con"><img :src="`${publicPath}images/eslint.svg`"/></div>
          <div class="title-con">ESLint</div>
        </li>
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

  .logo-list > li > .image-con {
    line-height: 185px;
  }

  .logo-list > li > .image-con,
  .logo-list > li > .title-con {
    width: 100%;
  }

  .logo-list > li > .image-con > img {
    width: 180px;
  }

  .logo-list > li > .title-con {
    line-height: 60px;
    font-weight: bold;
  }
</style>
