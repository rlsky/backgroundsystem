<!-- mock页 -->
<template>
  <div class="info">
    <h1>Mock Demo.</h1>
    <el-row>
      <el-col>
        <div class="table-box">
          <el-table :data="tableData" style="width: 100%" height="450">
            <el-table-column
              v-for="(col, index) in columns"
              :key="index"
              :prop="col.prop"
              :label="col.label"
              :width="col.width"
            />
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleClick(scope.row)">跳转</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getDataFromApi } from '@/api/Information'
const columns = [
  {
    prop: 'Date',
    label: '日期',
    width: 180
  },
  {
    prop: 'Name',
    label: '姓名',
    width: 180
  },
  {
    prop: 'Address',
    label: '地址',
    width: 180
  },
  {
    prop: 'Paragraph',
    label: '描述',
    width: undefined
  }
]
export default {
  name: '',
  components: {},
  data() {
    return {
      columns: columns,
      tableData: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const result = await getDataFromApi()
      console.log('-----> mock接口：getDataFromApi <------', result)
      this.tableData = result.data
    },
    handleClick(row) {
      window.open(row.Url)
    }
  }
}
</script>

<style scoped>
</style>
