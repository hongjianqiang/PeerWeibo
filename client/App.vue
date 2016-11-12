<template>
  <div id="wrapper">
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- <router-link> will be rendered as an `<a>` tag by default -->
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <input v-model="this.$root.cfg">
      <div v-bind:text-content.prop="this.$root.cfg"></div>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<style>
#wrapper {
  color: white;
  font-family: 雅黑;
}

.center {
  position: fixed;
  top: 50%;
  left: 50%;
  width:50%;
  height: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
}

.button {
  padding: 0;
}

.hide {
  display: none;
}
</style>

<script>
  let Data = {
  };
  
  module.exports = {
    data: function () {
      return Data;
    }
  };
</script>