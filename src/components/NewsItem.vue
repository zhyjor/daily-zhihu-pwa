<template>

  <div class="news-item">
    <div class="text-wrapper">
      <p class="text-left">看到这种毛色的猫就认定是漂亮的，基本不会错的</p>
    </div>
    <div class="img-right">
      <img src="../assets/3.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsItem'
}
</script>

<style scoped lang="scss">
  .news-item {
    overflow: hidden;
    height: 60px;
    padding: 10px 5px;
    margin: 5px 5px;
    background: white;
    border-radius: 3px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
    .text-wrapper {
      width: 100%;
      float: left;
      text-align: left;
      .text-left {
        margin: 0 90px 0 0;
      }
    }
    .img-right {
      float: left;
      width: 80px;
      margin-bottom: -60px;
      padding-bottom: 60px;
      margin-left: -80px;
      overflow: hidden;
      position: relative;
      img{
        position: absolute;
        width: 100px;
        left: -10px;
        top: -10px;
      }
    }
  }
</style>
