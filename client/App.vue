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

<style>
body {
  background: url(./images/login_bg.jpg) fixed;
  background-size: 100%;
  background-repeat: no-repeat;
}

.container { width: 95%; max-width: 95%; }

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

.fixed {
  position: fixed;
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
