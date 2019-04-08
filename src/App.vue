<template>
  <div class="container-fluid">
    <div class="row content">
      <Menu></Menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from "./components/navigation/Menu";

export default {
  components: {
    Menu
  }
};
</script>


<style>
.row.content {
  height: 1500px;
}

.sidenav {
  background-color: #f1f1f1;
  height: 100%;
}

@media screen and (max-width: 767px) {
  .sidenav {
    height: auto;
    padding: 15px;
  }
  .row.content {
    height: auto;
  }
}
</style>
