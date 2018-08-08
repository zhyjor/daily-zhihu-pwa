<template>
  <div class="slide-render-view">
    <div class="slide-wrapper">
      <div class="slide-content">
        <slide ref="slide"
               :autoPlay="isAutoPlay"
               :loop="isLoop"
               :showDot="isShowDot"
               :interval="interval"
               :threshold="threshold"
               :speed="speed">
          <div class="image-wrapper" :key="index" v-for="(item,index) in upImgs">
            <a :href="item.image">
              <img :src="item.image">
            </a>
          </div>
        </slide>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Slide from './slide.vue'
import { mapGetters } from 'vuex'

const COMPONENT_NAME = 'slide-render'
export default {
  name: COMPONENT_NAME,
  created() {
  },
  props: {
    slideArr: {}
  },
  computed: {
    ...mapGetters({
      upImgs: 'upImgs'
    })
  },
  data() {
    return {
      index: 1,
      turnToPrev: false,
      turnToNext: false,
      isAutoPlay: true,
      isLoop: true,
      isShowDot: true,
      speed: 400,
      threshold: 0.3,
      interval: 4000
    }
  },
  methods: {
    changeData() {
      this.index = (this.index + 1) % 2
      this.turnToPrev = false
      this.turnToNext = false
    },
    updateAutoPlay(val) {
      this.isAutoPlay = val
    },
    updateInterval(val) {
      if (val) {
        this.interval = +val
      }
    },
    updateLoop(val) {
      this.isLoop = val
    },
    updateShowDot(val) {
      this.isShowDot = val
    },
    turnToPrevFun() {
      if (!this.$refs.slide.slide.isInTransition) {
        this.turnTo(1)
        this.$refs.slide.prev()
      }
    },
    turnToNextFun() {
      if (!this.$refs.slide.slide.isInTransition) {
        this.turnTo(2)
        this.$refs.slide.next()
      }
    },
    turnTo(index) {
      index === 1 ? this.turnToPrev = true : this.turnToPrev = false
      index === 2 ? this.turnToNext = true : this.turnToNext = false
    },
    updateThreshold(val) {
      if (val) {
        this.threshold = +val
      }
    },
    updateSpeed(val) {
      if (val) {
        this.speed = +val
      }
    }
  },
  watch: {
    index() {
      this.$refs.slide.update()
    },
    upImgs() {
      this.$refs.slide.update()
    }
  },
  components: {
    Slide
  }
}
</script>

<style lang='scss' rel='stylesheet/scss'>
  @import "../common/style/variable.scss";

  .slide-render-view {
    .slide-wrapper {
      position: relative;
      width: 100%;
      padding-top: 40%;
      margin-bottom: 10px;
      overflow: hidden;
      .slide-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .group {
      margin-bottom: 1rem;
      border: 1px solid rgba(0, 0, 0, .1);
      border-radius: $radius-size-medium;
      background: #fff;
      .item {
        height: 3.2rem;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        &.sub {
          font-size: $fontsize-medium;
        }
      }
      /*box-shadow: 0 1px 1px 1px #eee inset*/
      .item:last-child {
        border-bottom: none;
      }

      .item:nth-child(even) {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }

  }

  .free-option {
    .button-container {
      button {
        padding: 5px;
        border-radius: 5px;
        background-color: #fff;
        outline: none;
      }
      .active {
        background-color: #3b99fc;
        border: #fff 1px solid;
        color: #fff;
      }
      .change-button {
        background-color: #3b99fc;
        padding: 5px 10px;
        color: #fff;
      }
    }

  }
</style>
