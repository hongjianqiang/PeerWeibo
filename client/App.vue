<template>
  <div id="wrapper">
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- <router-link> will be rendered as an `<a>` tag by default -->
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        msg: "我是组成的头部！"
      }
    }
  }
</script>

<style>
#wrapper {
  color: white;
}

.center {
  position: fixed;
  top: 50%;
  left: 50%;
  width:50%;
  height: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
}
  
</style>