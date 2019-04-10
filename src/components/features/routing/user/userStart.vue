<template>
  <div>
    <p>This is user start page</p>
    <br>
    <ul id="nav" class="nav nav-pills">
      <li class="nav-item">
        <router-link class="nav-link" to="/routing/user/detail">Detail</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/routing/user/edit">Edit</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link"></router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

