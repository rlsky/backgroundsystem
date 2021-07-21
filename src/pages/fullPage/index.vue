<!-- ele页面 -->
<template>
  <div id="fullPage">
    <!-- 搜索区域 -->
    <div class="search">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="5">
            <el-form-item label="活动名称:">
              <el-input v-model="form.name" size="mini"/>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="选择城市:">
              <el-cascader
                v-model="form.city"
                :options="cityoptions"
                size="mini"
                filterable
                clearable
                @change="handleChange"/>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </div>

    <!-- 表格 -->
    <Table
      :list="list"
      :total="total"
      :otherHeight="otherHeight"
      :options="options"
      :pagination="pagination"
      :columns="columns"
      @handleSizeChange="handleSizeChange"
      @handleIndexChange="handleIndexChange"
      @handleSelectionChange="handleSelectionChange"
      @handleFilter="handleFilter"
      @handelAction="handelAction"/>

  </div>
</template>

<script>
import { getTableData, getAddress } from '@/api/fullPage'
import Table from '@/components/table'
export default {
  name: 'Ele',
  components: {
    Table,
    expandDom: {
      props: {
        column: {
          required: true
        },
        row: {
          required: true
        }
      },
      render(h) {
        return h('div', {}, ([this.column.render(this.row, this.column)]))
      }
    }
  },
  data() {
    return {
      form: {
        name: '', // 活动名称
        city: [] // 选中的省市县id组成的数组
      },
      cityoptions: [], // 城市列表
      total: 0,
      list: [],
      otherHeight: 208,
      columns: [
        {
          prop: 'username',
          label: '用户名称',
          align: 'center',
          width: 160
        },
        {
          prop: 'deliveryTime',
          label: '时间',
          align: 'center',
          width: 200,
          formatter: (row, column, cellValue) => {
            return `<span style="white-space: nowrap;color: dodgerblue;">${row.rateTime}</span>`
          }
        },
        {
          prop: 'state',
          label: '状态',
          align: 'center',
          width: '160',
          render: (h, params) => {
            return h('el-tag', {
              props: { type: params.row.state === 0 ? 'success' : params.row.state === 1 ? 'info' : 'danger' } // 组件的props
            }, params.row.state === 0 ? '上架' : params.row.state === 1 ? '下架' : '审核中')
          }
        },
        {
          prop: 'avatar',
          label: '链接',
          align: 'center',
          width: '300'
        },
        {
          prop: 'text',
          label: '平路',
          align: 'center',
          width: 280
        },
        {
          prop: 'recommend',
          label: '品种',
          align: 'center',
          width: 240
        },
        {
          prop: 'rateTime',
          label: '发布时间',
          align: 'center',
          width: 180,
          formatter: (row, column, cellValue) => {
            return `<span style="white-space: nowrap;color: dodgerblue;">${row.rateTime}</span>`
          }
        }
      ], // 需要展示的列
      pagination: {
        pageIndex: 1,
        pageSize: 10
      }, // 分页参数
      options: {
        stripe: true, // 是否为斑马纹 table
        loading: false, // 是否添加表格loading加载动画
        highlightCurrentRow: true, // 是否支持当前行高亮显示
        mutiSelect: true // 是否支持列表项选中功能
      } // table 的参数
    }
  },
  created() {
    this.getTableData()
    this.getAddress()
  },
  methods: {
    /* 获取table列表 */
    async getTableData() {
      this.options.loading = true
      const result = await getTableData({
        per_page: this.pagination.pageSize,
        cur_page: this.pagination.pageIndex
      })
      setTimeout(() => {
        this.list = result.data.table
        this.total = result.data.total
        this.options.loading = false
      }, 300)

      console.log('-----> 本地服务接口：getTableData <------', result)
    },
    /* 获取城市列表 */
    async getAddress() {
      const result = await getAddress()
      this.cityoptions = result.data
      console.log('-----> 本地服务接口：getAddress <------', result)
    },
    /* 选择城市发生改变 */
    handleChange(value) {
      console.log('城市发生改变')
    },
    // 切换每页显示的数量
    handleSizeChange(pagination) {
      console.log(pagination, 'pagination')
      this.pagination = pagination
      this.getTableData()
    },
    // 切换页码
    handleIndexChange(pagination) {
      console.log(pagination)
      this.pagination = pagination
      this.getTableData()
    },
    // 选中行
    handleSelectionChange(val) {
      console.log('val:', val)
    },
    // 编辑
    handleEdit(index, row) {
      console.log(' index:', index)
      console.log(' row:', row)
    },
    // 删除
    handleDel(index, row) {
      console.log(' index:', index)
      console.log(' row:', row)
    },
    handleFilter() {
      console.log('handleFilter')
    },
    handelAction() {
      console.log('handelAction')
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
  min-height: 100px;
  background-color: #f0f0f0;
  border-radius: 11px;
  margin: 0 auto;
}
</style>
