<template>
  <div id="app">
    <Mheader></Mheader>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import Mheader from './components/m-header/m-header'
  import tab from './components/tab/tab'
  export default {
    name: 'app',
    components: {
      Mheader,
      tab
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
