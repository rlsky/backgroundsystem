<!-- 头部header -->
<template>
  <div class="app-header">
    <a class="logo" @click="goHome">Lorena</a>
    <el-tooltip :content="typename" class="item" effect="dark" placement="bottom">
      <div class="user" @click="goUser">
        <i class="usericon el-icon-user-solid" style="font-size:30px;color:white"/>
        <span style="color:white">{{ username }}</span>
      </div>
    </el-tooltip>
    <div v-if="weathercon" class="weater">
      <span>{{ weathercon.citynm }} </span>
      <span>{{ weathercon.temperature }} </span>
      <span>{{ weathercon.weather }} </span>
      <span>{{ weathercon.week }}</span>
    </div>
    <el-tooltip class="item" effect="dark" content="退出" placement="bottom">
      <i class="icon el-icon-switch-button" style="font-size:30px;color:rgb(52, 151, 251)" @click="unlogin"/>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Appheader',
  components: {},
  props: {
    weathercon: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      typename: '',
      username: ''
    }
  },

  computed: {},
  created() {
    const userinfo = this.$store.state.login.userinfo
    if (userinfo) {
      this.typename = userinfo.type.name
      this.username = userinfo.name
    }
  },
  mounted() {},

  methods: {
    goUser() {
      this.$router.push('/user/index')
    },
    /* 跳转首页 */
    goHome() {
      this.$router.push('/home')
    },
    /* 退出登录，清除vuex和session中的token和uesrinfo */
    unlogin() {
      this.$confirm('即将退出系统登陆，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$store.commit('login/SET_TOKEN', '')
          this.$store.commit('login/SET_USER', null)
          this.$router.replace({ path: '/login' })
        })
        .catch(() => {
          return false
        })
    }
  }
}

</script>
<style lang='scss' scoped>
/* 头部样式 */
.app-header {
  position: relative;
  line-height: 60px;
  height: 100%;
  background-color: #2d3a4b;
  padding: 0 20px;
}
.logo{
  display: inline-block;
  font-size: 30px;
  color: rgb(52, 151, 251);
  line-height: 60px;
}
.weater{
  display: inline-block;
  height: 60px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: antiquewhite
}
.user{
  position: absolute;
  right: 140px;
  display: inline-block;
  height: 60px;
  .usericon{
    line-height: 60px;
  }
}
.icon{
  position: absolute;
  right: 60px;
  line-height: 60px;
}
</style>
