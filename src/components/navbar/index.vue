<template>
  <fragment>
    <template v-for="navMenu in navMenus">
      <el-menu-item v-if="navMenu.childs==null&&navMenu.entity&&navMenu.entity.state==='ENABLE'"
        :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name" @click="toPath(navMenu.entity.value)" :route="navMenu.entity.value">
        <i :class="navMenu.entity.icon"></i>
        <span slot="title">{{navMenu.entity.alias}}</span>
      </el-menu-item>

      <el-submenu v-if="navMenu.childs&&navMenu.entity&&navMenu.entity.state==='ENABLE'"
        :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name" @click="toPath(navMenu.entity.value)" :route="navMenu.entity.value">
        <template slot="title">
          <i :class="navMenu.entity.icon"></i>
          <span> {{navMenu.entity.alias}}</span>
        </template>
        <Navbar :navMenus="navMenu.childs"></Navbar>
      </el-submenu>
    </template>
  </fragment>
</template>

<script>
  export default {
    name: 'Navbar',
    props: ['navMenus'],
    data() {
      return {}
    },
    created(){
      console.log()
    },
    methods: {
      toPath(url){
        console.log(url)
      }
    }
  }
</script>
<style lang='scss' scoped>
</style>