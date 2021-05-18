<!--  -->
<template>
  <!-- Layout 布局 , Button 按钮 , Input 输入框 , Select 选择器 , Cascader 级联选择器 , TimePicker 时间选择器,  DatePicker 日期选择器 , DateTimePicker 日期时间选择器
  Table 表格 , Pagination 分页 , Loading 加载 , Message 消息提示 , MessageBox 弹框 , Notification 通知 , Breadcrumb 面包屑 , Dropdown 下拉菜单
  Dialog 对话框 , Tooltip 文字提示 , Popover 弹出框 -->
  <div id="fullPage">
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
  },
  created(){
  },
  components: {},

  computed: {},

  mounted(){},

  methods: {
  }
}

</script>
<style lang='scss' scoped>
#fullPage{
  width:100%;
  height:100%;
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