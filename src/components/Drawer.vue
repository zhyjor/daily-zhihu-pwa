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
    <div class="drawer-middle">首页</div>
    <div class="drawer-down">
      财经日报
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
      showTooltip: false
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
    color: white;
    .drawer-up {
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
  }

</style>
