<!--  -->
<template>
  <div class="app-header">
    <i class="icon el-icon-switch-button" style="font-size:30px;color:rgb(52, 151, 251)" @click="unlogin"></i>
  </div>
</template>

<script>
export default {
  name:'appheader',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted(){},

  methods: {
    unlogin(){
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
  position: fixed;
  line-height: 60px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #2d3a4b;
}
</style>