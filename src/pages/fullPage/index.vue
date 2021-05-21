<!-- ele页面 -->
<template>
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
            <el-form-item label="选择城市:">
              <el-cascader
                size="mini"
                filterable
                clearable
                v-model="form.city"
                :options="options"
                @change="handleChange">
              </el-cascader>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </div>

  </div>
</template>

<script>
import { getTableData , getAddress} from '@/api/fullPage'
export default {
  data () {
    return {
      form: {
        name: '', // 活动名称
        city:[], // 选中的省市县id组成的数组
      },
      options: [], // 城市列表
    };
  },
  created(){
    this.getTableData()
    this.getAddress()
  },
  methods: {
    /* 获取table列表 */
    async getTableData(){
      let result=await getTableData({
        per_page:10,
        cur_page:1
      })
      console.log('-----> 本地服务接口：getTableData <------',result)
    },
    /* 获取城市列表 */
    async getAddress(){
      let result=await getAddress()
      this.options=result.data
      console.log('-----> 本地服务接口：getAddress <------',result)
    },
    /* 选择城市发生改变 */
    handleChange(value) {
      console.log('城市发生改变')
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
.search{
  width:98%;
  min-width:500px;
  min-height: 20%;
  background-color: #f0f0f0;
  border-radius: 11px;
  margin: 0 auto;
}
</style>