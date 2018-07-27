<template>
  <div id='slider' @click='hideSlider()'>
    <div class='left'>
      <div class='user-info'>
        <div class='login'>请登录</div>
        <div class='info flex'>
          <span class='collect'>我的收藏</span>
          <span class='download'>我的下载</span>
        </div>
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
      showTooltip: false
    }
  },
  methods: {},
  components: {}
}
</script>
<style lang="scss">
  .show {
    transform: translate3d(0, 0, 0) !important;
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  #slider {
    position: absolute;
    transform: translate3d(-100%, 0, 0);
    width: 100%;
    top: 0;
    bottom: 0;
    font-size: 0.3rem;
    background-color: rgba(0, 0, 0, 0);
    transition: all 0.5s ease-in 0s;
    z-index: 200;
    .left {
      width: 75%;
      height: 100%;
      background-color: #fff;

      .user-info {
        background-color: #00A1E9;
        color: #fff;
        height: 2.5rem;
        .login {
          background-size: 0.5rem;
          background-repeat: no-repeat;
          background-position: 0.2rem center;
          height: 1rem;
          line-height: 1rem;
          padding-left: 0.9rem;
        }
        .info {
          margin-top: 0.5rem;
          justify-content: flex-start;
          span {
            background-size: 0.35rem;
            background-position: 0.4rem center;
            background-repeat: no-repeat;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            width: 50%;
          }
          .collect {
          }
          .download {
          }
        }

      }

      ul {
        .title {
          background-size: 0.5rem;
          background-repeat: no-repeat;
          background-position: 0.5rem center;
          padding-left: 1.2rem;
        }
        .pressed {
          background-color: #F0F0F0;
          color: #1188BA;
        }
        li {
          height: 0.8rem;
          line-height: 0.8rem;
          padding-left: 0.5rem;
          position: relative;
          span {
            position: absolute;
            width: 0.8rem;
            height: 0.8rem;
            right: 0;
          }
        }
        .add {
          background-size: 0.5rem;
          background-repeat: no-repeat;
          background-position: center;
        }
        .more {
          background-size: 0.5rem;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }
  }
</style>
