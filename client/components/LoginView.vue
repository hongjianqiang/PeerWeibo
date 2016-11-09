<template>
  <div id="LoginView" class="container">
    <div class="row">
      <div class="six columns">
        <div class="row front-style front-signin">
          <h2>已有密钥文件? 登陆</h2>
          <div class="keyPairFile" id="keyPairFile">
            <div class="row"><h4>请把密钥文件拖放到虚线框内</h4></div>
            <div class="row">
              <div class="nine columns">
                <input type="password" class="u-full-width" placeholder="密码">
              </div>
              <div class="three columns">
                <a class="button button-primary u-full-width" style="padding:0;">登录</a>
              </div>              
            </div>
            <div class="row">
              <label class="remember">
                <input type="checkbox" value="1" name="remember_me" checked>
                <span>记住我</span>
              </label>
            </div>
          </div>
        </div>
        <div class="row front-style front-signup" v-bind:class="{ hide: isHide }">
          <h2>新来 PeerWeibo? 注册</h2>
          <form>
            <div class="row">
              <input v-model="fullName" type="text" class="u-full-width" placeholder="全名">
            </div>
            <div class="row">
              <input v-model="email" type="text" class="u-full-width" placeholder="邮箱">
            </div>
            <div class="row">
              <div class="nine columns">
                <input v-model="password" type="password" class="u-full-width" placeholder="密码">
              </div>
              <div class="three columns">
                <a v-on:click="register" class="button button-highlight u-full-width">注册</a>
              </div>  
            </div>            
          </form>
        </div>
        <div class="row front-style saveKeypair" v-bind:class="{ hide: !isHide }">
          <h2>密钥文件即登陆凭证，请保存到安全的位置</h2>
          <div class="row">
            <a class="button button-caution u-full-width" 
              v-bind:href="keyPairFileData"
              v-bind:download="keyPairFileName">
              保存密钥文件到本地磁盘
            </a>
          </div>
        </div>
      </div>
      <div class="six columns">
        <div class="row front-style about">
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
  import SHA256 from 'crypto-js/sha256'
  import Socket from 'socket.io/node_modules/socket.io-client'
  let socket = Socket.connect('ws://localhost:3000');

  let Data = {
    isHide: false,
    fullName: "",
    email: "",
    password: "",
    keyPairFileData: "data:text/txt;charset=utf-8,",
    keyPairFileName: ".txt"
  };

  module.exports = {
    data: function () {
      return Data;
    },
    mounted: function () {
      this.handleDragDropInit();
      this.handleDropbox();
    },
    methods: {
      register: function (event) {
        emit('createSeed');
        this.isHide = true;
      },
      handleDragDropInit: function () {
        document.addEventListener('dragleave', function(e) {
          // 拖离
          e.preventDefault();
        }, false);
        document.addEventListener('drop', function(e) {
          // 拖放后
          e.preventDefault();
        }, false);
        document.addEventListener('dragenter', function(e) {
          // 拖进
          e.preventDefault();
        }, false);
        document.addEventListener('dragover', function(e) {
          // 拖来拖去
          e.preventDefault();
        }, false);
      },
      handleDropbox: function () {
        let dropbox = document.getElementById('keyPairFile');

        dropbox.addEventListener('drop', function(e) {
          let fileList = e.dataTransfer.files;

          // 检测是否是拖拽文件到页面的操作
          if (fileList.length == 0) {
            return false;
          }
          
          let reader = new FileReader();
          reader.onload = function(e) {
            let text = reader.result;
            console.log(text);
          };

          reader.readAsText(fileList[0]);
          // console.log(fileList[0]);

        }, false);

        dropbox.addEventListener('dragenter', function(e) {
          dropbox.style.borderColor = 'gray';  
          dropbox.style.backgroundColor = 'white';        
        });
      }
    }
  }

  let seed, keypair, random = Math.random().toString();

  socket.on('verify', function (data) {
    let ok = JSON.parse(data);
    
    if (ok) {
      let d = {};

      d.fullName = Data.fullName;
      d.email = Data.email;
      d.password = Data.password;
      d.seed = seed;
      d.publicKey = keypair.publicKey;
      d.secretKey = keypair.secretKey;

      Data.keyPairFileName = Data.fullName + '_' + Data.email + '_' + new Date().Format("yyyyMMdd") + '.json';
      Data.keyPairFileData = Data.keyPairFileData + JSON.stringify(d);

      console.log(seed);
      console.log(keypair);
    }

  });

  socket.on('sign', function (data) {
    let signature = JSON.parse(data);
    let verify = {};
    
    verify.signature = signature.data;
    verify.message = random;
    verify.publicKey = keypair.publicKey.data;

    emit('verify', verify);
  });

  socket.on('createKeyPair', function (data) {
    keypair = JSON.parse(data);
    let sign = {};
    
    sign.message = random;
    sign.publicKey = keypair.publicKey.data;
    sign.secretKey = keypair.secretKey.data;

    emit('sign', sign);
  });

  socket.on('createSeed', function (data) {
    let str = data + this.fullName + this.email + this.password + new Date();
    let sha256 = SHA256(str).toString();
    
    seed = seedArray(sha256);

    emit('createKeyPair', seed);
  });

/*
  let dropbox = document.getElementById('keyPairFile');
  console.log(dropbox);

  dropbox.addEventListener("dragenter", function(e){  
    e.stopPropagation();  
    e.preventDefault();  
    dropbox.style.borderColor = 'gray';  
    dropbox.style.backgroundColor = 'white';  
  }, false);  
*/
  //dropZone.addEventListener('dragenter', handleFileSelect, false);

  function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    let files = evt.dataTransfer.files;
  }

  function seedArray(sha256){
    let arr = sha256.split('');
    let seedArr = [];
    let t = '';

    for (var i = 0; i < arr.length; i++) {
      t = t + arr[i];

      if (i % 2) {
        seedArr.push(parseInt(t, 16));
        t = '';
      }
    }

    return seedArr;
  }

  function emit(e, resp) {
    var r = JSON.stringify(resp);
    socket.emit(e, r);
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

  .front-style {
    background-color: rgba(0,0,0,0.5);
    border-radius: 5px;
    margin-bottom: 30px;
  }
  .front-signin .keyPairFile {
    padding: 12px;
    margin: 12px;
    border: 3px #8899a6 dashed;
    border-radius: 5px;
  }
  .keyPairFile h4 {
    color: #8899a6;
    font-style: italic;
  }
  .remember {
    color: #8899a6;
  }
  .remember input[type="checkbox"] {
    float:left;
    width:18px;
    height:18px;
  }
  .remember span {
    float:left; 
    display:block;
    height:18px;
    line-height:18px;
    padding-left:5px;
  }

  .front-style h2 {
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

  .saveKeypair h2 {
    padding: 10px 12px;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 300;
    border-bottom: 1px solid #aab8c2;
  }

  .saveKeypair div {
    padding: 12px;
    margin: 0;
  }

  .about {
    padding: 12px;
  }
</style>