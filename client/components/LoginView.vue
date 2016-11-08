<template>
  <div id="LoginView" class="container">
    <div class="row center">
      <div class="six columns">
        <div class="row front-signin">
          <form action="">
            <div class="row">
              <input type="email" class="u-full-width" placeholder="手机、邮件地址或用户名">
            </div>
            <div class="row">
              <div class="nine columns">
                <input type="password" class="u-full-width" placeholder="密码">
              </div>
              <div class="three columns">
                <button class="button-primary u-full-width">登录</button>
              </div>              
            </div>
            <div class="row">
              <label class="remember">
                <input type="checkbox" value="1" name="remember_me" checked>
                <span>记住我</span>
              </label>
            </div>
          </form>
        </div>
        <div class="row front-signup">
          <h2>新来 PeerWeibo? 注册</h2>
          <form action="">
            <div class="row">
              <input type="text" class="u-full-width" placeholder="全名">
            </div>
            <div class="row">
              <input type="text" class="u-full-width" placeholder="邮箱">
            </div>
            <div class="row">
              <div class="nine columns">
                <input type="password" class="u-full-width" placeholder="密码">
              </div>
              <div class="three columns">
                <button class="u-full-width button-highlight">注册</button>
              </div>  
            </div>            
          </form>
        </div>        
      </div>
      <div class="six columns">
        <div class="row">
          <h1>欢迎使用 PeerWeibo。</h1>
          <p>联系你的好友和更多精彩。获取你感兴趣的实时更新。并通过每个视角观看事件实时呈现。</p>
        </div>

        <div class="row">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        msg: "我是 LoginView.vue 页面！"
      }
    }
  }
</script>

<style>
  body { 
    background: url(../images/login_bg.jpg); 
    background-size: 100%;
    background-repeat: no-repeat;
  }

  #LoginView {

  }

  input {
    color: #000;
  }

  .front-signin{
    background: white;
    border-radius: 5px;
    margin-bottom: 30px
  }
  .front-signin form {
    padding: 12px;
    margin: 0;
  }
  .remember {
    color: #8899a6;
  }
  .remember input[type="checkbox"] {
    float:left;width:18px; height:18px
  }
  .remember span {
    float:left;display:block;height:18px;line-height:18px;padding-left:5px;
  }

  .front-signup {
    background: white;
    border-radius: 5px;
  }
  .front-signup h2 {
    color: #000;
    padding: 10px 12px;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 300;
    border-bottom: 1px solid #aab8c2;
  }
  .front-signup form {
    padding: 12px;
    margin: 0;
  }
</style>