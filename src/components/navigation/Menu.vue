<template>
  <div class="col-sm-3 sidenav">
    <h4>Vue Features</h4>
    <ul id="main-nav" class="nav nav-pills nav-stacked">
      <li class="active">
        <router-link to="/">Getting Started</router-link>
      </li>
      <li>
        <router-link to="/directive">Directives</router-link>
      </li>
      <li>
        <router-link to="/routing">Routing</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
#main-nav {
  display: block !important;
}
</style>
