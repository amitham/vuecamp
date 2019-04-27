<template>
  <a-layout>
    <a-layout-header class="header">
      <Header></Header>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="250">
        <Navigation></Navigation>
      </a-layout-sider>
      <a-layout class="content">
        <router-view></router-view>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';

export default {
  components: {
    Header,
    Navigation
  }
};
</script>

<style scoped>
  .header {
    padding: 0;
    background: #FFF;
  }

  .content {
    height: calc(100vh - 64px);
    padding: 20px;
    overflow: auto;
    background: #fbfbfb;
  }

  .content::-webkit-scrollbar {
    width: 12px;
  }

  .content::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .content::-webkit-scrollbar-thumb {
    background-color: rgba(24, 144, 255, 0.5);
    outline: 1px solid slategrey;
  }
</style>
