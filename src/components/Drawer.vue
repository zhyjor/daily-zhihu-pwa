<template>
  <div class='drawer-wrapper'>
    <div class="drawer-up">
      <div class="draw-up-up">
        <div class="drawer-up-avatar">
          <img src="../assets/3.jpg"/>
        </div>
        <span>请登录</span>
      </div>
      <div class="draw-up-down">
        <div class="draw-up-down-left">
          <svg-icon class="icon-left-star" icon-class="star"/>
          <span>我的收藏</span>
        </div>
        <div class="draw-up-down-right">
          <svg-icon class="icon-right-download" icon-class="download"/>
          <span>离线下载</span>
        </div>
      </div>
    </div>
    <div class="drawer-down">
      <div class="drawer-down-first">
        <svg-icon class="" icon-class="mainpage"/>
        <span>首页</span>
      </div>
      <div class="drawer-down-last" v-for="item in items" :key="item.id">
        <span>{{item.name}}</span>
        <svg-icon v-if="item.added" class="drawer-down-last-icon" icon-class="add"/>
        <svg-icon v-else class="drawer-down-last-icon" icon-class="rightarrow"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'drawer',
  data() {
    return {
      isShow: true,
      themesList: [],
      toolContent: 'you have added it',
      showTooltip: false,
      items: [
        {
          name: '电影日报',
          id: 0,
          added: true
        },
        {
          name: '财经日报',
          id: 1,
          added: true
        },
        {
          name: '日常心理学',
          id: 2,
          added: false
        },
        {
          name: '互联网安全',
          id: 3,
          added: true
        },
        {
          name: '音乐日报',
          id: 4,
          added: true
        },
        {
          name: '设计日报',
          id: 5,
          added: true
        }
      ]
    }
  },
  methods: {},
  components: {}
}
</script>
<style lang="scss" rel="stylesheet">
  .drawer-wrapper {
    display: flex;
    flex-direction: column;
    .drawer-up {
      color: white;
      height: 15vh;
      background: #3b99fc;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .draw-up-up {
        display: flex;
        align-items: center;
        padding: 15px 0 10px 15px;
        .drawer-up-avatar {
          width: 30px;
          height: 0;
          border-radius: 15px;
          margin-bottom: -30px;
          padding-bottom: 30px;
          top: -15px;
          position: relative;
          overflow: hidden;
          img {
            position: absolute;
            width: 60px;
            left: -20px;
            top: -5px;
          }
        }
        span {
          padding-left: 10px;
          color: white;
        }
      }
      .draw-up-down {
        display: flex;
        justify-content: space-around;
        padding: 0 10px 10px 20px;
        font-size: 14px;
        span {
        }
        .icon-right-download {
          margin-left: 10px;
        }
      }
    }
    .drawer-down {
      .drawer-down-first {
        display: flex;
        align-items: center;
        line-height: 40px;
        background-color: #eee;
        color: #3b99fc;
        padding: 0 20px 0 10px;
        span{
          margin-left: 10px;
        }
      }
      .drawer-down-last {
        display: flex;
        align-items: center;
        line-height: 40px;
        justify-content: space-between;
        padding: 0 20px 0 10px;
        .drawer-down-last-icon{
          color: #aaa;
        }
      }
    }
  }

</style>
