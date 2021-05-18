<!-- 面包屑 -->
<template>
    <div class="example-container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          :style="{'pointer-events':(prohibitClickList.indexOf(item.path) != -1 ?'none':'auto')}"
          v-for="(item,index) in breadList" :key="item.name" :to="{ path: item.path }">
          {{item.meta.title}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
export default {
  name:'crumbs',
  props:{
    breadList:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
  data () {
    return {
      // 禁止点击跳转的面包屑item
      prohibitClickList:["/user","/oms"]
    };
  },
  created(){
  },
  components: {},

  computed: {},

  mounted(){},

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