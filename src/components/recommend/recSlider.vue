<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>{{Urls}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'recSlider',
    data() {
      return {
        // Urls:[]
      }
    },
    props: ['Urls'],
    mounted: function () {
      console.log(this.Urls)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrapper
    width :100%
    .content
      width :500%
      li
        width :20%
</style>
