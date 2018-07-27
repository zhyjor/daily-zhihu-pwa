<template>
  <vue-drawer-layout
    class="main-draw"
    ref="drawerLayout"
    @slide-start="handleSlideStart"
    @slide-move="handleSlideMove"
    @slide-end="handleSlideEnd"
    @mask-click="handleMaskClick">
    <div class="drawer" slot="drawer">
      <drawer/>
    </div>
    <div class="content" slot="content">
      <render-titile @more="showDrow" class="up-title"/>
      <!--<slide-render class="up-slide"/>-->
      <!--<simple-scroll class="down-scroll"/>-->
    </div>
  </vue-drawer-layout>
</template>

<script>
import NewsItem from '../components/NewsItem'
import SimpleScroll from '../components/SimpleScroll'
import SlideRender from '../components/SlideRender'
import RenderTitile from '../components/RenderTitile'
import Drawer from '../components/Drawer'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    NewsItem,
    SimpleScroll,
    SlideRender,
    RenderTitile,
    Drawer
  },
  methods: {
    showDrow() {
      console.log('11')
      this.$refs.drawerLayout.toggle()
    },
    handleSlideStart() {
      console.info('slide-start')
    },
    handleSlideMove(position) {
      console.info('slide-move', position)
    },
    handleSlideEnd(visible) {
      console.info('slide-end', visible)
    },
    handleMaskClick() {
      console.info('mask-click')
      this.$refs.drawerLayout.toggle(false)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  .drawer {
    background-color: white;
    height: 100%;
  }

  .content {
    .up-slide {
      height: 30vh;
    }

    .down-scroll {
      top: 30vh;
      height: 70vh;
    }

  }
</style>
