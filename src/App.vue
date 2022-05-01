<template>
  <div id="app">
    <Header></Header>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/floor">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
    // 导入header.vue文件
    import Header from './components/public/nav.vue'
    export default {
        components: {
            Header
        }
    }
</script>
<style lang="less">
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
