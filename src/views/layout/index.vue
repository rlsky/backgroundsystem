<!--  -->
<template>
  <div>
    <Appheader />
    <Navbar />
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {getWeather} from '@/api/index'
import Navbar from '@/components/navbar'
import Appheader from '@/components/appheader'
export default {
  name:'layout',
  components:{
    Navbar,
    Appheader
  },
  data () {
    return {
      weatherCon:{}
    }
  },
  created(){
    this.getWeather()
  },
  methods: {
    async getWeather(){
      let result=await getWeather({
        app:'weather.today',
        weaid:'1',
        appkey:'10003',
        sign:'b59bc3ef6191eb9f747dd4e83c99f2a4',
        format:'json'
      })
      this.weatherCon = result.result;
    }
  },
  mounted(){}
}

</script>
<style lang='scss' scoped>

  /* 主区域 */
  .main {
    position: absolute;
    top: 50px;
    left: 200px;
    bottom: 0px;
    right: 0px;  /* 距离右边0像素 */
    padding: 10px;
    overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
  }
</style>