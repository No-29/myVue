<template>
  <el-container style="overflow-y: hidden;">
    <el-header style="box-shadow: 0 1px 4px rgba(0,21,41,0.08);padding:0;">
      <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.native.prevent="handleScroll">
        <router-link class="tags-view-item" :class="isActive(tag)?'active':''" ref="tag" tag="span" v-for="tag in visitedViews" :key="tag.path" :to="{ path: tag.path }">活动管理{{tag}}</router-link>
      </el-scrollbar>
    </el-header>
    <el-container class="main-container">
      <el-aside width="200px">
        <el-scrollbar style="height:100%;">
          Aside
          <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
              <h1>滚动内容部分</h1>
        </el-scrollbar>
      </el-aside>
      <el-main class="main">
        <el-scrollbar style="height:100%;width:100%;">
          <el-backtop target='.el-scrollbar__wrap'>
              <div>
                  回到顶部
              </div>
          </el-backtop>
          <video-player class="video-player vjs-custom-skin"
            style="width:300px;"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
            @ended="onPlayerEnded($event)"
            @waiting="onPlayerWaiting($event)"
            @playing="onPlayerPlaying($event)"
            @loadeddata="onPlayerLoadeddata($event)"
            @timeupdate="onPlayerTimeupdate($event)"
            @canplay="onPlayerCanplay($event)"
            @canplaythrough="onPlayerCanplaythrough($event)"
            @statechanged="playerStateChanged($event)"
            @ready="playerReadied"
          >
          </video-player>
          <div class="name"></div>
          <div class="title">赤壁赋</div>
          <div class="content">
            <!-- <el-image src="/static/images/login_bg.jpg">
              <slot>用户头像</slot>
            </el-image> -->
            <table>
                <tr><th v-for="item in tableColumn" :key="item">{{item}}</th></tr>
                <tr v-for="(item,idx) in tableData" :key="idx">
                  <!-- <td>{{item.id}}</td><td>{{item.name}}</td> -->
                  <td v-for="(value,i) in item" :key="i">{{value}}</td>
                </tr>
              </table>
              千米：<input v-model="kilomiters"/>
              米：<input v-model="miters"/>
              <p id="info">{{time | dateformat}}</p>
              <p ><span>庭院深深深几许</span></p>
              <card></card>
              <card></card>
              <card></card>
              <div v-for="(item,i) in numberList" :key="i" >
                <el-input-number v-model="numberList[i].value" placeholder="" :min="1" :max="1"></el-input-number>
              </div>
              <div class="card">
                <div class="header"><h3 class="header-h3"><span>推荐阅读</span></h3></div>
                <div class="content" v-for="i in 6" :key="i">
                  <div class="title">
                    <a href="#">庭院深深深几许,滚动内容部分。</a>
                  </div>
                  <div class="readtimes">
                    阅读 19675
                  </div>
                </div>
              </div>
              <div class="wraper">
                  <template>
                      Scroll down to see the bottom-right button.
                  </template>
              </div>
              <p><el-button type="primary">ddd</el-button></p>
              <el-radio label="dd" v-model="radio"></el-radio>
          </div>
          <div class="out-article">
            <div class="header"><h3 class="header-h3"><span>推荐阅读</span></h3></div>
            <ul class="out-content">
              <li class="out-content-li"></li>
            </ul>
          </div>
          <div class="remark" style="height:600px;">
            <el-collapse>
              <el-collapse-item name="1" title="一致性">
                <div>事务处理一致性、原子性</div>
                <div>事务处理一致性、原子性</div>
                <div>事务处理一致性、原子性</div>
                <div>事务处理一致性、原子性</div>
                <div>事务处理一致性、原子性</div>
                <div>事务处理一致性、原子性</div>
                <div>事务处理一致性、原子性</div>
                <div>事务处理一致性、原子性</div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
    <el-footer>
      <div class="footer-left"></div>
      <div class="footer-right">
        <div class="company-info"></div>
      </div>
      <div class="footer-bottom">
      </div>
    </el-footer>
  </el-container>
</template>
<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import Card from './test01.vue'
export default {
  components: {
    videoPlayer,
    Card
  },
  data () {
    return {
      radio: '1',
      tableColumn: ['id', 'name'],
      tableData: [
        {id: 1, name: '111'},
        {id: 2, name: '222'}
      ],
      timer: null,
      time: null,
      kilomiters: 0,
      miters: 0,
      numberList: [{
        id: 1,
        value: 1
      }, {
        id: 2,
        value: 3
      }, {
        id: 3,
        value: 6
      }, {
        id: 4,
        value: 9
      }],
      visitedViews: [{
        path: '1'
      }, {
        path: '2'
      }, {
        path: '3'
      }, {
        path: '4'
      }, {
        path: '5'
      }, {
        path: '6'
      }, {
        path: '7'
      }, {
        path: '8'
      }],
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0, 3.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4', // 类型
          src: '../../static/videos/movie.mp4' // url地址
        }],
        poster: '', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    }
  },
  mounted: function () {
    const me = this
    this.timer = setInterval(function () {
      me.time = new Date()
    }, 1000)
  },
  watch: {
    kilomiters (value, old) {
      this.kilomiters = value
      this.miters = value * 1000
      // document.getElementById('info').innerHTML = '原值：' + old + ',现值：' + value
    },
    miters (value, old) {
      this.kilomiters = value / 1000
      this.miters = value
    }
  },
  methods: {
    isActive (route) {
      return route.path === this.$route.path
    },
    handleScroll (e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 40
      const $scrollWrapper = this.$refs.scrollContainer.$refs.wrap
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft - eventDelta / 4
    },
    // 播放回调
    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    // 暂停回调
    onPlayerPause (player) {
      console.log('player pause!', player)
    },
    // 视频播完回调
    onPlayerEnded (player) {
      console.log(player)
    },
    // DOM元素上的readyState更改导致播放停止
    onPlayerWaiting (player) {
      console.log(player)
    },
    // 已开始播放回调
    onPlayerPlaying (player) {
      console.log(player)
    },
    // 当播放器在当前播放位置下载数据时触发
    onPlayerLoadeddata (player) {
      console.log(player)
    },
    // 当前播放位置发生变化时触发。
    onPlayerTimeupdate (player) {
      console.log(player)
    },
    // 媒体的readyState为HAVE_FUTURE_DATA或更高
    onPlayerCanplay (player) {
      // console.log('player Canplay!', player)
    },
    // 媒体的readyState为HAVE_ENOUGH_DATA或更高。这意味着可以在不缓冲的情况下播放整个媒体文件。
    onPlayerCanplaythrough (player) {
      // console.log('player Canplaythrough!', player)
    },
    // 播放状态改变回调
    playerStateChanged (playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },
    // 将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数。。
    playerReadied (player) {
      console.log('example player 1 readied', player)
    }
  },
  filters: {
    dateformat (date) {
      if (!date) {
        return
      }
      var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
      }
      let fmt = 'yyyy-MM-dd hh:mm:ss'
      if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
      }
      return fmt
    }
  }
}

</script>
<style >
.out-article{
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
}
.out-content{
  margin-bottom: 24px;
}
.out-content-li{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}
.card1{
  height: 100%;
  overflow-y:auto;
}
.el-scrollbar__wrap{
  overflow-x: hidden;
}
.el-backtop{
  width: 45px;
  height: 45px;
}
.main-container{
  height: calc(100vh - 120px);
  background-color: #f9f9f9
}
.main{
  padding: 0;
}
.card{
  position: fixed;
  top: 66px;
  width: 220px;
  /* height: 380px; */
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 16px;
  z-index: 1;
  right: 0;
}
.header{
  border-left:4px solid chocolate;
}
.header-h3{
  font-size: 16px;
  padding-left: 6px;
  height: 18px;
}
.content{
  margin-bottom: 12px;
}
.title{
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
a{
  color: #404040;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
.readtimes{
  font-size: 12px;
  color: #969696;
}
.video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
<style lang="scss" scoped>
.video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  // width: 100%;
  /deep/ {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: 49px;
    }
  }
  .tags-view-item{
    display: inline-block;
    position: relative;
    cursor: pointer;
    font-size: 12px;
    margin-top: 4px;
    margin-left: 5px;
    border:1px solid #d8dce5;
    height: 26px;
    line-height: 26px;
    padding:0 8px;
    color: #495060;
    background: #fff;
    &.active {
      background-color: #42b983;
      color: #fff;
      border-color: #42b983;
      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 2px;
      }
    }
    &:first-of-type{
      margin-left: 15px;
    }
    &:last-of-type{
      margin-right: 15px;
    }
  }
}
.footer{
  width: 1200px;
  margin: 0 auto;
  display: inline-block;
  .footer-left{
    width: 50%;
    text-align: left;
  }
  .footer-right{
    width: 50%;
    text-align: center;
  }
  .footer-bottom{
    color: darkgray;
    font-size: 12px;
    text-align: center;

  }
}
</style>
