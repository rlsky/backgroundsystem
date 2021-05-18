<template>

  <el-container>
    <!-- 头部 -->
    <el-header>
      <Appheader :weathercon="weathercon"/>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapsed? '64px' : '200px'">
        <div class="asideSty" :style="{width:this.isCollapsed? '64px' : '200px' }">
          <div class="iconWrap" @click="toqiehuan">
            <i class="zhedie" :class="[isCollapsed?'el-icon-s-unfold':'el-icon-s-fold']"></i>
          </div>
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
          <!-- 面包屑：首页不展示 -->
          <Crumbs v-if="$route.path != '/home'" :breadList="breadList"/>
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
import Crumbs from '@/components/crumbs'
import tablist from '@/utils/tablist.json'
import { json } from 'body-parser';
export default {
  name:'layout',
  components:{
    Navbar,
    Appheader,
    Crumbs
  },
  data () {
    return {
      weathercon:{},
      leftMenus:{},
      isCollapsed: false,
      breadList: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created(){
    this.checkAuth()
    this.leftMenus=tablist.childs
    this.getBreadcrumb()
    this.getWeather()
  },
  methods: {
    /* 通过路由获取面包屑列表 */
    getBreadcrumb() {
      let matched = this.$route.matched;
      //如果不是首页就拼接路由
      if (!this.isHome(matched[0])) {
        matched = [{ path: "/", meta: { title: "主页" } }].concat(matched);
      }
      this.breadList = matched;
    },
    /* 判断当前是否是首页 */
    isHome(route) {
      return route.name === "home" || route.redirect === "/home";
    },
    /* 验证用户是否登录，条件：vuex中存在token || sessionStorage中存在token */
    checkAuth() {
      const sessionInfo = JSON.parse(sessionStorage.getItem('userinfo'))
      let token = this.$store.state.login.token || (sessionInfo && sessionInfo.login.token)
      if (!token) {
        this.$router.replace('login')
      } else {
        this.getUser()
      }
    },
    /* 获取用户信息 */
    getUser() {
      /**
       * 在这里请求用户信息
       * 1.存入vuex中
       * 2.在存入vuex的过程中同步存入了sessionStorage中
       */
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
    /* navbar折叠切换 */
    toqiehuan(){
      this.isCollapsed = ! this.isCollapsed
    },
    /* 天气接口 */
    async getWeather(){
      let result=await getWeather({
        app:'weather.today',
        weaid:'1',
        appkey:'10003',
        sign:'b59bc3ef6191eb9f747dd4e83c99f2a4',
        format:'json'
      })
      this.weathercon = result.result;
      console.log(this.weathercon)
    }
  },
  mounted(){}
}

</script>
<style lang='scss' scoped>
.el-aside{
  transition: all 0.3s ease 0s;
}
.el-header{
  padding: 0px;
}
.el-container{
  height: 100vh
}
.main{
  background:#E9ECF3;
}
.iconWrap{
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
  z-index: 9;
}
.zhedie{
  font-size: 26px;

}
.content{
  background: white;
  height: 100%;
  border-radius: 10px;
  min-width: 550px;
  padding: 20px;
}
.asideSty{
  position: relative;
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