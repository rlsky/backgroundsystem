<!-- 面包屑 -->
<template>
  <div class="example-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="item in breadList"
        :style="{'pointer-events':(prohibitClickList.indexOf(item.path) != -1 ?'none':'auto')}"
        :key="item.name"
        :to="{ path: item.path }">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Crumbs',
  components: {},
  props: {
    breadList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      // 禁止点击跳转的面包屑item
      prohibitClickList: ['/user', '/oms']
    }
  },

  computed: {},
  created() {
  },

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.example-container{
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  min-width: 500px;
}
// /deep/.el-breadcrumb{
//   .el-breadcrumb__inner{
//       pointer-events: none;
//     }
// }

</style>
