<template>
  <div id="app">
    <router-view />
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

<style lang="scss">
@import "styles/init.css";
</style>
