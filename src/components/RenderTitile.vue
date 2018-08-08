<template>
  <div class="main-title">
    <div @click="handleClick">
      <!--这里click事件直接绑在svg上不生效-->
      <svg-icon class="icon-left-more" icon-class="more"/>
    </div>

    <span class="title-name">首页</span>
  </div>
</template>

<script>
export default {
  name: 'render-title',
  methods: {
    handleClick() {
      this.$emit('more')
    }
  }
}
</script>

<style scoped lang="scss">
  .main-title {
    height: 8vh;
    display: flex;
    align-items: center;
    background: #3b99fc;
    color: white;
    .icon-left-more {
      font-size: 30px;
      margin: 0 5px;
    }
    .title-name {

    }
  }
</style>
