<template>
  <div class="m-header">
    <div class="title">
      <div class="pic"></div>
      <h1>Music Player</h1>
    </div>
    <div class="my">
      <router-link to="/user">
        <i class="icon-mine"></i>
      </router-link>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'm-header'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .title
      margin:0px auto
      .pic
        width: 30px
        height 32px
        display inline-block
        margin-top:6px
        background-image:url("logo.png")
        background-size: 30px 32px
        margin-right :9px
      h1
        display: inline-block
        vertical-align: top
        line-height: 44px
        font-size: $font-size-large
    .my
      position:absolute
      right :0
      top:0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>
