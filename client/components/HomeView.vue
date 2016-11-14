<template>
  <div id="HomeView" class="container">
    <div class="row">
      <div class="three columns front left-nav">
        <div class="row padding">
          <span class="bold"><i class="fa fa-home"></i> 首页</span>
        </div>
        <div class="row padding">
          <span class="bold"><i class="fa fa-star"></i> 我的收藏</span>
        </div>
        <div class="row padding">
          <span class="bold"><i class="fa fa-thumbs-up"></i> 我的赞</span>
        </div>
        <div class="row padding hot">
          <span>热门微薄</span>
        </div>
        <div class="row padding">
          <span>特别关注</span>
        </div>
        <div class="row padding">
          <span>未分类</span>
        </div>
      </div>

      <div class="six columns">
        <div class="row front send-weibo">
          <div class="row">
            <h5>有什么新鲜事想告诉大家？</h5>
            <textarea class="u-full-width"></textarea>
          </div>

          <div class="row">
            <div class="ten columns kind">
              <span><i class="fa fa-smile-o"></i> 表情 </span>
              <span><i class="fa fa-picture-o"></i> 图片 </span>
              <span><i class="fa fa-file-video-o"></i> 视频 </span>
            </div>
            <div class="two columns">
              <a v-on:click="" class="button button-primary u-full-width">发布</a>
            </div>
          </div>
        </div>

        <div class="row front view">
          <div class="row meta">
            <div class="one column">
              <span class="face"></span>
            </div>
            <div class="eleven columns WB-info">
              <div class="row">
                <span class="nick-name">互联网的那些事儿</span>
              </div>
              <div class="row">
                <span class="time">今天 11:17 来自 手机微博触屏版</span>
              </div>
              <div class="row">
                <div class="WB-text">做工程是暴利，为啥会破产？拖欠。做工程项目，说白了就是赌博。甲方业主先不给钱，包工头垫资干活，设备原材料和人工费是很难拖欠的，包工头把家里房子抵押贷款。半年下来，入不敷出，没钱了。甲方如果烂尾，包工头就破产了。如果甲方顺利完工，也不拖欠，你就赚大钱了。只要一次赌输，包工头就完了。</div>
              </div>
            </div>
          </div>
          <div class="row feed">
            <div class="three columns">
              <span><i class="fa fa-star-o"></i> 收藏</span>
            </div>
            <div class="three columns">
              <span><i class="fa fa-reply"></i> 转发</span>
            </div>
            <div class="three columns">
              <span><i class="fa fa-comments"></i> 评论</span>
            </div>
            <div class="three columns">
              <span><i class="fa fa-thumbs-up"></i> 点赞</span>
            </div>
          </div>
        </div>

        <div class="row front view">
          <div class="row meta">
            <div class="one column">
              <span class="face"></span>
            </div>
            <div class="eleven columns WB-info">
              <div class="row">
                <span class="nick-name">互联网的那些事儿</span>
              </div>
              <div class="row">
                <span class="time">今天 11:17 来自 手机微博触屏版</span>
              </div>
              <div class="row">
                <div class="WB-text">做工程是暴利，为啥会破产？拖欠。做工程项目，说白了就是赌博。甲方业主先不给钱，包工头垫资干活，设备原材料和人工费是很难拖欠的，包工头把家里房子抵押贷款。半年下来，入不敷出，没钱了。甲方如果烂尾，包工头就破产了。如果甲方顺利完工，也不拖欠，你就赚大钱了。只要一次赌输，包工头就完了。</div>
              </div>
            </div>
          </div>
          <div class="row feed">
            <div class="three columns">
              <span><i class="fa fa-star-o"></i> 收藏</span>
            </div>
            <div class="three columns">
              <span><i class="fa fa-reply"></i> 转发</span>
            </div>
            <div class="three columns">
              <span><i class="fa fa-comments"></i> 评论</span>
            </div>
            <div class="three columns">
              <span><i class="fa fa-thumbs-up"></i> 点赞</span>
            </div>
          </div>
        </div>

        <div class="row front view">
          <div class="row meta">
            <div class="one column">
              <span class="face"></span>
            </div>
            <div class="eleven columns WB-info">
              <div class="row">
                <span class="nick-name">互联网的那些事儿</span>
              </div>
              <div class="row">
                <span class="time">今天 11:17 来自 手机微博触屏版</span>
              </div>
              <div class="row">
                <div class="WB-text">做工程是暴利，为啥会破产？拖欠。做工程项目，说白了就是赌博。甲方业主先不给钱，包工头垫资干活，设备原材料和人工费是很难拖欠的，包工头把家里房子抵押贷款。半年下来，入不敷出，没钱了。甲方如果烂尾，包工头就破产了。如果甲方顺利完工，也不拖欠，你就赚大钱了。只要一次赌输，包工头就完了。</div>
              </div>
            </div>
          </div>
          <div class="row feed">
            <div class="three columns">
              <span><i class="fa fa-star-o"></i> 收藏</span>
            </div>
            <div class="three columns">
              <span><i class="fa fa-reply"></i> 转发</span>
            </div>
            <div class="three columns">
              <span><i class="fa fa-comments"></i> 评论</span>
            </div>
            <div class="three columns">
              <span><i class="fa fa-thumbs-up"></i> 点赞</span>
            </div>
          </div>
        </div>

        <div class="row front view">
          <div class="row meta">
            <div class="one column">
              <span class="face"></span>
            </div>
            <div class="eleven columns WB-info">
              <div class="row">
                <span class="nick-name">互联网的那些事儿</span>
              </div>
              <div class="row">
                <span class="time">今天 11:17 来自 手机微博触屏版</span>
              </div>
              <div class="row">
                <div class="WB-text">做工程是暴利，为啥会破产？拖欠。做工程项目，说白了就是赌博。甲方业主先不给钱，包工头垫资干活，设备原材料和人工费是很难拖欠的，包工头把家里房子抵押贷款。半年下来，入不敷出，没钱了。甲方如果烂尾，包工头就破产了。如果甲方顺利完工，也不拖欠，你就赚大钱了。只要一次赌输，包工头就完了。</div>
              </div>
            </div>
          </div>
          <div class="row feed">
            <div class="three columns">
              <span><i class="fa fa-star-o"></i> 收藏</span>
            </div>
            <div class="three columns">
              <span><i class="fa fa-reply"></i> 转发</span>
            </div>
            <div class="three columns">
              <span><i class="fa fa-comments"></i> 评论</span>
            </div>
            <div class="three columns">
              <span><i class="fa fa-thumbs-up"></i> 点赞</span>
            </div>
          </div>
        </div>
      </div>

      <div class="three columns">
        <div class="row person_info front">
          <div class="row faceBox">
            <div class="face"></div>
          </div>
          <div class="row nameBox">
            <span class="bold">洪建强</span>
          </div>
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
      </div>
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
#HomeView {

}
.front {
  padding: 15px;
  background-color: rgba(0,0,0,0.3);
  border-radius: 5px;
  margin-bottom: 20px;
}
.left-nav span {
  font-size: 16px;
}
.left-nav .hot {
  border-top: 1px #82b9dc solid;
  border-bottom: 1px #82b9dc solid;
}
.left-nav .padding {
  padding: 10px;
}
.bold { font-weight: bold; }

.send-weibo h5 {
  margin-bottom: 0;
}
.send-weibo textarea {
  height: 110px;
  color: #000;
  margin-bottom: 0;
}
.send-weibo .kind {
  height: 40px;
  line-height: 40px;
}
.kind span {
  margin-left: 10px;
}

.person_info {
}
.person_info .faceBox {
  margin-bottom: 10px;
}
.person_info .face {
  background: #FFF;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.person_info .nameBox {
  text-align: center;
  margin-bottom: 10px;
}
.person_info .detail {
  text-align: center;
}

.meta .face {
  background: #FFF;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: block;
}
.WB-info span {
  padding: 0 10px;
}
.WB-info .time {
  font-size: 12px;
  color: #BBB;
}
.WB-info .WB-text {
  padding-left: 10px;
  padding-bottom: 5px;
}

.feed {
  border-top: 1px #BBB solid;
  padding-top: 5px;
}
.feed div {
  text-align: center;
}
</style>
