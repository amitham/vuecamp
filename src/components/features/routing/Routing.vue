<template>
  <div class="col-sm-9">
    <h4>
      <small>Routing</small>
    </h4>
    <hr>
    <br>
    <p>
      Though user feel navigate from one page to another, in single page application everything load inside a one file (index.html).
      To simulate this behaviour we use routing. It does change part of the url and load the relavent content inside the index.html file.
    </p>
    <p>
      "vue-router" is a third party package that we need to install separately. "npm install --save vue-router" command
      will download and install it into the project.
      <strong>
        And the other important thing is vue-router should configure
        in the root vue instanse.
      </strong>
    </p>
    <p>We can maintain a sepatate file for routing and define all the routes there.</p>
    <p>Routing Example:</p>
    <br>

    <ul id="nav" class="nav nav-pills">
      <router-link tag="li" to="/routing/user" class="nav-link" style="cursor: pointer">Show Example</router-link>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
};
</script>

<style>
#nav {
  display: flex !important;
}
</style>
