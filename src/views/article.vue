<template>
  <el-container style="overflow-y: hidden;">
    <el-header style="box-shadow: 0 1px 4px rgba(0,21,41,0.08);padding:0;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }" :replace="true">活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
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
        <div class="title">赤壁赋</div>
        <div class="content">
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
            <div class="wraper">
                <template>
                    Scroll down to see the bottom-right button.

                </template>
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
            </div>
            <p><el-button type="primary">ddd</el-button></p>
            <el-radio label="dd" v-model="radio"></el-radio>
        </div>
        <div class="remark"></div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
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
      visitedViews: [{
        path: '#'
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
      }]
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
.card{
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
  height: calc(100vh - 60px);
}
.main{
  padding: 0;
}
</style>
<style lang="scss" scoped>
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

</style>
