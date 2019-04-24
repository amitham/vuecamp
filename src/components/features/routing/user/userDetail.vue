<template>
  <div class="container-fluid">
    <p>Detail user has loaded ID: {{$route.params.id}}</p>
    <!-- <br> -->
    <a href="javascript:void(0)" @click="goback">Back</a>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router.push({ path: "/routing/user" });
    }
  }
};
</script>

