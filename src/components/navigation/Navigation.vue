<template>
  <div class="menu">
    <a-menu
      class="ant-menu"
      :defaultSelectedKeys="['1']"
      mode="inline"
    >
      <a-menu-item key="1">
        <router-link to="/"><a-icon type="windows" theme="filled"/>Getting Started</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/directive"><a-icon type="folder" />Directives</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/routing"><a-icon type="folder" />Routing</router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/filters"><a-icon type="folder" />Filters</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
};
</script>

<style scoped>
  .menu {
    height: 100%;
  }

  .ant-menu {
    width: 100%;
    height: 100%;
    padding-top: 20px;
  }
</style>
