<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li v-for="(url,index) in urls" v-if="index==4">
        <a v-bind:href="url.linkUrl">
          <img v-bind:src="url.picUrl">
        </a>
      </li>
      <li v-for="url in urls">
        <a v-bind:href="url.linkUrl">
          <img v-bind:src="url.picUrl">
        </a>
      </li>
      <li v-for="(url,index) in urls" v-if="index==0">
        <a v-bind:href="url.linkUrl">
          <img v-bind:src="url.picUrl">
        </a>
      </li>
    </ul>
    <div class="dots">
      <span class="dot" v-for="(url,index) in urls" v-bind:class="{active:index==currentPageIndex-1}"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRecommend} from '../../api/recommend'
  import BScroll from 'better-scroll'

  export default {
    name: 'recommend',
    data() {
      return {
        urls: [],
        currentPageIndex: 0,
        loop: true
      }
    },
    components: {
    },
    created: function () {
      this._getRecommend()
    },
    mounted: function () {
      this._play()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === 0) {
            this.urls = res.data.slider
            console.log(this.urls)
            this.$nextTick(() => {
              this._setWrapperWidth()
              this._initScroll()
              this.scroll.goToPage(1, 0, 0)
              this.currentPageIndex = 1
            })
          }
        })
      },
      _setWrapperWidth() {
        var picLi = this.$refs.wrapper.children[0].children
        var picWidth = picLi[0].children[0].children[0].clientWidth
        for (var i = 0; i < picLi.length; i++) {
          picLi[i].children[0].children[0].style.width = picWidth + 'px'
          picLi[i].style.width = picWidth + 'px'
        }
        this.$refs.wrapper.children[0].style.width = picWidth * picLi.length + 'px'
      },
      _initScroll() {
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: true,
          click: true,
          bounce: true,
          snapLoop: true,
          snapThreshold: 0.5,
          snapSpeed: 400
        })
        this.scroll.on('beforeScrollStart', () => {
          clearTimeout(this.timer)
          this.currentPageIndex = this.scroll.getCurrentPage().pageX
        })
        this.scroll.on('scrollEnd', () => {
          this.currentPageIndex = this.scroll.getCurrentPage().pageX
          if (this.currentPageIndex > 5) {
            this.scroll.goToPage(1, 0, 0)
            this.currentPageIndex = 1
            this._play()
          } else if (this.currentPageIndex < 1) {
            this.scroll.goToPage(5, 0, 0)
            this.currentPageIndex = 5
            this._play()
          } else {
            this._play()
          }
        })
      },
      _play() {
        var a = this
        if (a.currentPageIndex < 6) {
          this.timer = setTimeout(function () {
            a.scroll.goToPage(a.currentPageIndex + 1, 0, 400)
            a.currentPageIndex++
          }, 3000)
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrapper
    position :relative
    overflow :hidden
    text-align :center
    .content
      overflow :hidden
      li
        float left
        overflow :hidden
        a
          display :block
          img
            width :100%
    .dots
      position :absolute
      bottom:10%
      right :0
      left :0
      text-align :center
      .dot
        display :inline-block
        width :8px
        height :8px
        background :hsla(0,0%,100%,.5)
        border-radius :50%
        margin :0 4px
      .active
        display :inline-block
        width :20px
        height :8px
        background :hsla(0,0%,100%,.8)
        border-radius :5px
        margin :0 4px

</style>
