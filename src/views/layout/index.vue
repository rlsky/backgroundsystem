<template>

  <el-container>
    <el-header>
      <Appheader />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          router="router"
          default-active="0"
          class="el-menu-vertical-demo"
          @select="menuSelected"
          background-color="#F0F6F6"
          text-color="#3C3F41"
          active-text-color="black">
          <Navbar :navMenus="leftMenus"></Navbar>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="welcom" v-if="$route.path === '/' || $route.path === '/layout'">
          欢迎来到<span class="testfont">后台管理系统</span>
        </div>
        <router-view v-else></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getWeather } from '@/api/index'
import Navbar from '@/components/navbar'
import Appheader from '@/components/appheader'
import tablist from './tablist.json'
export default {
  name:'layout',
  components:{
    Navbar,
    Appheader
  },
  data () {
    return {
      weatherCon:{},
      leftMenus:{}
    }
  },
  created(){
    this.leftMenus=tablist.childs
    this.getWeather()
  },
  methods: {
    menuSelected(e){
      console.log(e)
    },
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
  .el-container{
    height: 100vh
  }
  .el-menu {
    height: 100%;
  }
  .welcom{
    font-size: 28px;
    font-family: 'HYRunYuan-EEW';
    font-weight: normal;
    color: #97999B;
    .testfont{
      font-family: 'HYRunYuan-FEW';
      font-size: 36px;
      font-weight: normal;
      color: #8B8075;
    }
  }
</style>