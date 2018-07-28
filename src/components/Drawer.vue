<template>
  <div class='drawer-wrapper'>
    <div class="drawer-up">
      <div class="drawer-up-avatar">
        <img src="../assets/3.jpg"/>
      </div>
      <span>请登录</span>
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
    .drawer-up {
      height: 15vh;
      background: #3b99fc;
      display: flex;
      .drawer-up-avatar {
        width: 30px;
        border-radius: 15px;
        margin-bottom: -30px;
        padding-bottom: 30px;
        position: relative;
        overflow: hidden;
        img {
          position: absolute;
          width: 60px;
          left: -20px;
          top: -5px;
        }
      }
    }
  }

</style>
