<!--  -->
<template>
  <!-- Layout 布局 , Button 按钮 , Input 输入框 , Select 选择器 , Cascader 级联选择器 , TimePicker 时间选择器,  DatePicker 日期选择器 , DateTimePicker 日期时间选择器
  Table 表格 , Pagination 分页 , Loading 加载 , Message 消息提示 , MessageBox 弹框 , Notification 通知 , Breadcrumb 面包屑 , Dropdown 下拉菜单
  Dialog 对话框 , Tooltip 文字提示 , Popover 弹出框 -->
  <div id="fullPage">
    <!-- PageHeader 页头 -->
    <div class="page-header">
      <el-page-header content="详情页面"></el-page-header>
    </div>
    <!-- Breadcrumb 面包屑 -->
    <div class="example-container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="(item,index) in breadList"
          :key="item.name"
          :to="{ path: item.path }"
        >{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 搜索区域 -->
    <div class="search">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="5">
            <el-form-item label="活动名称:">
              <el-input v-model="form.name" size="mini"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="活动名称:">
              <el-input v-model="form.name" size="mini"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="活动名称:">
              <el-input v-model="form.name" size="mini"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="活动名称:">
              <el-input v-model="form.name" size="mini"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      breadList: [],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created(){
    this.getBreadcrumb()
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {
      isHome(route) {
        return route.name === "Index";
      },
      getBreadcrumb() {
        let matched = this.$route.matched;
        //如果不是首页就拼接路由
        if (!this.isHome(matched[0])) {
          matched = [{ path: "/", meta: { title: "首页" } }].concat(matched);
        }
        this.breadList = matched;
        console.log(this.breadList)

      }
  }
}

</script>
<style lang='scss' scoped>
#fullPage{
  width:100%;
  height:100%;
  min-width: 500px;
}
.el-page-header{
  background-color: rgb(240, 246, 246);
  height: 40px;
  border-radius: 11px;
  border-bottom-right-radius:0px;
  border-bottom-left-radius:0px;
  overflow:hidden;
  min-width: 500px;
  /deep/.el-page-header__content{
    line-height: 40px;
    padding-left: 10px;
    white-space:nowrap;
    color: #697882;
    font-size: 18px;
    font-weight: 500;
  }
  /deep/.el-page-header__left{
    display: none;
  }
}
.example-container{
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  min-width: 500px;
}
.search{
  width:98%;
  min-width:500px;
  min-height: 20%;
  background-color: #f0f0f0;
  border-radius: 11px;
  margin: 0 auto;
}

</style>