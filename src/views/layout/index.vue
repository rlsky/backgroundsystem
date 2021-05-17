<template>

  <el-container>
    <!-- 头部 -->
    <el-header>
      <Appheader />
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapsed? '64px' : '200px'">
        <div class="asideSty" :style="{width:this.isCollapsed? '64px' : '200px' }">
          <span @click="toqiehuan">折叠切换</span>
          <el-menu
            router
            class="el-menu-vertical-demo"
            background-color="#F0F6F6"
            text-color="#3C3F41"
            :default-active="$route.path"
            active-text-color="#3497fb"
            :unique-opened="true"
            :collapse="isCollapsed">
            <Navbar :navMenus="leftMenus"></Navbar>
          </el-menu>
        </div>
      </el-aside>
      <!-- 主体 -->
      <el-main class="main">
        <div class="content">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getWeather } from '@/api/index'
import Navbar from '@/components/navbar'
import Appheader from '@/components/appheader'
import tablist from '@/utils/tablist.json'
import { json } from 'body-parser';
export default {
  name:'layout',
  components:{
    Navbar,
    Appheader
  },
  data () {
    return {
      weatherCon:{},
      leftMenus:{},
      isCollapsed: false
    }
  },
  created(){
    this.checkAuth()
    this.leftMenus=tablist.childs
    this.getWeather()
  },
  methods: {
    checkAuth() {
      const sessionInfo = JSON.parse(sessionStorage.getItem('userinfo'))
      let token = this.$store.state.login.token || (sessionInfo && sessionInfo.login.token)
      if (!token) {
        this.$router.replace('login')
      } else {
        this.getUser()
      }
    },
    getUser() {
      let User = {
        id: '7f859967-9b12-441c-badc-8a7d312f6da4',
        username: 'admin',
        name: 'luichooy',
        type: {
          code: 0,
          name: '超级管理员'
        }
      }
      this.$store.commit('login/SET_USER', User)
    },
    toqiehuan(){
      this.isCollapsed = ! this.isCollapsed
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
.el-aside{
  transition: all 0.3s ease 0s;
}
.el-container{
  height: 100vh
}
.main{
  background:#E9ECF3;
}
.content{
  background: white;
  height: 100%;
  border-radius: 10px;
  min-width: 550px;
}
.asideSty{
  height: 100%;
  background-color: rgb(240, 246, 246);
  transition: all 0.3s ease 0s;
}
.el-menu-vertical-demo{
  border-right: none;
  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>