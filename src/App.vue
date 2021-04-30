<template>
  <div id="app">
    app.vue
  </div>
</template>

<script>
import {getWeather} from '@/api/index'
export default {
  name: 'App',
  created(){
    this.getWeather()

  },
  methods:{
    async getWeather(){
      let result=await getWeather({
        app:'weather.today',
        weaid:'1',
        appkey:'10003',
        sign:'b59bc3ef6191eb9f747dd4e83c99f2a4',
        format:'json'
      })
      console.log(result)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
