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
          <div class="image-wrapper" :key="index" v-for="(item,index) in arr">
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
import { getSlideList } from '../api/getSlideList'

const COMPONENT_NAME = 'slide-render'
export default {
  name: COMPONENT_NAME,
  created() {
    getSlideList().then(res => {
      console.log(res.data.STORIES.top_stories)
      this.$set(this.$data, 'arr', res.data.STORIES.top_stories)
      // this.items = res.data.STORIES.top_stories
    })

    // setTimeout(() => {
    //   console.log('修改index')
    //   this.arr = this.itemss[0]
    //   this.$refs.slide.update()
    // }, 3000)
    // setTimeout(() => {
    //   console.log('修改index')
    //   this.arr.push({
    //     linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
    //     picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
    //     id: 11351
    //   })
    //   this.$refs.slide.update()
    // }, 6000)
  },
  props: {
    slideArr: {}
  },
  data() {
    let itemss = [
      [
        {
          linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
          id: 11351
        },
        {
          linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
          id: 11372
        }
      ],
      [
        {
          linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
          id: 11378
        },
        {
          linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
          id: 11375
        },
        {
          linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
          id: 11287
        }
      ]
    ]
    let items = [
      {
        ga_prefix: '080110',
        id: 9691696,
        picUrl: 'https://pic3.zhimg.com/v2-0637200fde4c16933bba3139673d3136.jpg',
        title: '「电影理财」收益率高达 388 ％，P2P 都不敢这么干',
        type: 0
      },
      {
        ga_prefix: '080111',
        id: 9691691,
        picUrl: 'https://pic3.zhimg.com/v2-0637200fde4c16933bba3139673d3136.jpg',
        title: '「电影理财」收益率高达 388 ％，P2P 都不敢这么干',
        type: 0
      },
      {
        ga_prefix: '080111',
        id: 9691691,
        picUrl: 'https://pic3.zhimg.com/v2-0637200fde4c16933bba3139673d3136.jpg',
        title: '「电影理财」收益率高达 388 ％，P2P 都不敢这么干',
        type: 0
      }
    ]
    return {
      index: 1,
      turnToPrev: false,
      turnToNext: false,
      isAutoPlay: true,
      isLoop: true,
      isShowDot: true,
      speed: 400,
      threshold: 0.3,
      interval: 4000,
      items,
      itemss,
      arr: []
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
