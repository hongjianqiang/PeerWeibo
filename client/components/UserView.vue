<template>
  <div id="UserView" class="container">
    <div class="row meta">
      <div class="row">
        <span class="photoWrap"></span>
      </div>
      <div class="row">
        <h5>洪建强</h5>
      </div>
      <div class="row">
        <span>60d7fa031b31f83cfac7c7f0eff7fef744b92731</span>
      </div>
      <div class="row">
        <span>博学、慎思、明辨、笃行</span>
      </div>
    </div>
    <div class="row">
      <div class="four columns">
        <div class="row detail">
          <div class="four columns">
            <div class="u-full-width">912</div>
            <div class="u-full-width">关注</div>
          </div>
          <div class="four columns">
            <div class="u-full-width">123</div>
            <div class="u-full-width">粉丝</div>
          </div>
          <div class="four columns">
            <div class="u-full-width">1180</div>
            <div class="u-full-width">微薄</div>
          </div>
        </div>
      </div>
      <div class="eight columns">
        
      </div>
    </div>
  </div>
</template>

<script>
  let Data = {

  };

  module.exports = {
    data: function () {
      return Data;
    },
    mounted: function () {
      console.log('Mount UserView.vue');
      console.log(this.$route.params.id);
    },
    methods: function () {

    }
  };
</script>

<style>
#UserView {
}
.meta {
  text-align: center;
  background-color: rgba(0,0,0,0.3);
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.meta h5 {
  margin-bottom: 0;
}
.meta .photoWrap {
  background: #FFF;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto;
}
.detail {
  padding: 15px;
  background-color: rgba(0,0,0,0.3);
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
