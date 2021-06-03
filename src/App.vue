<template>
  <div id="app">
<!--    <div id="nav">
      导航头部
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'App',
/*  data() {
    return {
      // model: 'miku',
      // model: 'koharu',
      // model: 'hibiki',
      // model: 'haru_2',
      model: 'haru_1',
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.live2dInit()
    })
  },
  methods: {
    live2dInit() {
      window.L2Dwidget.init({
        pluginRootPath: 'static/live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: `live2d-widget-model-${this.model}/assets/`,
        tagMode: false,
        debug: false,
        model: {
          jsonPath: `/static/live2dw/live2d-widget-model-${this.model}/assets/${this.model}.model.json`,
        },
        display: { position: 'right', width: 150, height: 300 },
        mobile: { show: true },
        log: false,
      })
    },
  },*/
}
</script>


<style>
#app {
  max-width: 1000px;
  margin: 0 auto;
}

</style>
<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--#nav {-->
<!--  padding: 30px;-->
<!--}-->

<!--#nav a {-->
<!--  font-weight: bold;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--#nav a.router-link-exact-active {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->
