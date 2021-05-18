<!-- 面包屑 -->
<template>
    <div class="example-container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="(item,index) in breadList"
          :key="item.name"
          :to="{ path: item.path }"
        >{{item.meta.title}}</el-breadcrumb-item>
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
    };
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
</style>