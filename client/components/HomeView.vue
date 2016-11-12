<template>
  <div id="HomeView" class="container">
    <div class="row">
      <div class="three columns" style="background:red;">three columns</div>
      <div class="six columns" style="background:black;">six columns</div>
      <div class="three columns" style="background:green;">three columns</div>
    </div>
  </div>
</template>

<script>
  import Socket from 'socket.io/node_modules/socket.io-client'

  let root, socket;

  let Data = {

  };

  module.exports = {
    data: function () {
      return Data;
    },
    mounted: function () {
      console.log(this.$root.cfg);
      /*
      if(this.$root.cfg){ // 密钥文件未导入的情况
        window.location.hash = '/Login';
      } else {
        socket = Socket.connect('ws://localhost:3000');
        root = this.$root;

        root.cfg = {};
      }
      */
    },
    methods: function () {

    }
  };


</script>

<style>
#HomeView {  }

</style>
