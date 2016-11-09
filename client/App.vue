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

.button {
  padding: 0;
}

.hide {
  display: none;
}
</style>

<script>
/*
 * 共享的一些函数库 及 定义的一些常量
 */

Date.prototype.Format = function (fmt) { 
  /* 对Date的扩展，将 Date 转化为指定格式的String
   * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
   * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
   * 例子： 
   * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
   * (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
   * author: meizz 
   * 调用： 
   * var time1 = new Date().Format("yyyy-MM-dd");
   * var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");  
   */
   
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};  
</script>