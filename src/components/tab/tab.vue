<template>
  <div class="tab">
    <ul>
      <li>
        <router-link to="/recommend" class="tabitem">推荐</router-link>
      </li>
      <li>
        <router-link to="/singer" class="tabitem">歌手</router-link>
      </li>
      <li>
        <router-link to="/rank" class="tabitem">排行</router-link>
      </li>
      <li>
        <router-link to="/search" class="tabitem">搜索</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'tab'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    height :44px
    line-height: 44px
    font-size: $font-size-medium
    ul
      display :flex
      li
        float :left
        flex :1
        .tabitem
          display :inline-block
          line-height:20px
          padding :0 5px
        .router-link-active
          border-bottom:2px solid $color-theme
          color:$color-theme
</style>
