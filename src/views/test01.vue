<template >
  <div id="card">
    <el-col :span="5" class="col">
        <div class="top">
          <p class="tt">云·企业官网定制，最快7天交付</p>
          <p class="info">设计师量身定制，咨询立减500元起</p>
        </div>
        <div class="incon">
          <p class="st">无需自己动手，建站专家为您服务</p>
          <div class="exparea">
            <p class="exp" data-spm-anchor-id="5176.13985499.1387536.i0.133265f0Q2uEaL">1对1网站策划及设计（PC站+手机站）</p>
            <p class="exp">标准价格，标准服务，不满意全额退款</p>
            <p class="exp">标配云服务器，快速稳定，不限流量</p>
            <p class="exp">一价全包，4980元起</p>
          </div>
          <div class="linkarea">
            <a href="https://ai.alimebot.taobao.com/intl/index.htm?from=K40PX19Mf7" target="_blank" class="golink">咨询有礼</a>
            <a href="https://ac.aliyun.com/jianzhan/webdesign" target="_blank" class="golink1">查看详情</a>
          </div>
        </div>
    </el-col>
  </div>
</template>

<script>
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
*, :after, :before {
  box-sizing: inherit;
}
#card{
  margin-left: 10px;
  margin-right: 10px;
}
.col{
  background: #fff;
  overflow: hidden;
  height: 335px;
  border: 1px solid #ebecec;
  margin-bottom: 20px;
  box-sizing: border-box;
  transition: all .3s ease-in-out;
  margin-left: 10px;
  margin-right: 10px;
}
.col:hover{
  box-shadow: 0 2px 15px 0 rgba(0,0,0,.15)!important;
}
.top{
  background: url(https://img.alicdn.com/tfs/TB1hLZbcAP2gK0jSZPxXXacQpXa-760-192.png) no-repeat center center;
  background-size: 100% 100%;
  height: 96px;
  overflow: hidden;
  padding: 20px 28px 0;
}
.top .tt{
  font-size: 18px;
  color: #fff;
  line-height: 25px;
  overflow: hidden;
  margin-bottom: 11px;
}
.top .info{
  font-size: 14px;
  color: #fff;
  line-height: 20px;
  overflow: hidden;
}
.incon{
  overflow: hidden;
  padding: 20px 28px 0;
}
.incon .st{
  font-size: 14px;
  color: #181818;
  line-height: 20px;
  overflow: hidden;
  margin-bottom: 12px;
}
.incon .exparea{
  overflow: hidden;
  height: 107px;
  margin-bottom: 20px;
}
.incon .exparea .exp {
  height: 26px;
  font-size: 14px;
  color: #73777a;
  line-height: 26px;
  background: url(https://img.alicdn.com/tfs/TB1yo.fcxD1gK0jSZFyXXciOVXa-28-26.png) no-repeat 0;
  background-size: 14px 13px;
  padding-left: 20px;
  /* 字数过多省略 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.incon .linkarea {
  overflow: hidden;
  font-size: 0;
}
.incon .linkarea .golink {
  display: inline-block;
  vertical-align: middle;
  width: 48%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background: #fe6a00;
  text-decoration: none;
  margin-right: 2%;
}
.incon .linkarea .golink1 {
  display: inline-block;
  vertical-align: middle;
  width: 48%;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  color: #fe6a00;
  border: 1px solid #fe6a00;
  text-decoration: none;
}
.incon .linkarea .golink1:hover {
    transition: all .3s;
    background: #fe6a00;
    color: #fff;
}
</style>
