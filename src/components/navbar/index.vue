<!-- 左侧导航栏 -->
<template>
  <fragment>
    <template v-for="(navMenu,index) in navMenus">
      <el-menu-item
        v-if="!navMenu.childs"
        :key="index"
        :index="navMenu.entity.path">
        <i :class="navMenu.entity.icon"/>
        <span slot="title">{{ navMenu.entity.alias }}</span>
      </el-menu-item>
      <el-submenu
        v-else
        :key="index"
        :index="navMenu.entity.path">
        <template slot="title">
          <i :class="navMenu.entity.icon"/>
          <span> {{ navMenu.entity.alias }}</span>
        </template>
        <Navbar :nav-menus="navMenu.childs"/>
      </el-submenu>
    </template>
  </fragment>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    navMenus: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
