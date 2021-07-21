
<template>
  <div>
    <!-- 自定义列 -->
    <el-popover v-model="visible" placement="right" trigger="click">
      <el-transfer :titles="['隐藏列', '展示列']" :button-texts="['隐藏', '展示']" v-model="value" :data="data" @change="transferChange">
        <el-button slot="left-footer" class="transfer-footer left-transfer" size="small"/>
        <el-button slot="right-footer" class="transfer-footer" size="small" @click="toSave('1')">保存更改</el-button>
      </el-transfer>
      <el-button slot="reference">自定义列</el-button>
    </el-popover>
    <!-- table -->
    <el-table ref="tableDataRef" :data="tableData" stripe border style="width: 98%">
      <el-table-column type="selection" width="55" align="center"/>
      <el-table-column type="index" width="55" label="序号" align="center"/>
      <template v-for="(item, index) in data">
        <el-table-column v-if="item.isShow" :key="index" :prop="item.prop" :label="item.label" align="center"/>
      </template>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      data: [
        {
          label: '名称',
          disabled: true,
          isShow: true,
          key: '名称',
          prop: 'name'
        },
        {
          label: '性别',
          disabled: true,
          isShow: true,
          key: '性别',
          prop: 'select'
        },
        {
          label: '年龄',
          disabled: false,
          isShow: false,
          key: '年龄',
          prop: 'kafang'
        },
        {
          label: '时间',
          disabled: false,
          isShow: false,
          key: '时间',
          prop: 'fengbi'
        },
        {
          label: '事件',
          disabled: false,
          isShow: false,
          key: '事件',
          prop: 'isETF'
        },
        {
          label: '地点',
          disabled: false,
          isShow: false,
          key: '地点',
          prop: 'range'
        },
        {
          label: '测试1',
          disabled: false,
          isShow: false,
          key: '测试1',
          prop: 'test1'
        },
        {
          label: '测试2',
          disabled: false,
          isShow: false,
          key: '测试2',
          prop: 'test2'
        },
        {
          label: '测试3',
          disabled: false,
          isShow: false,
          key: '测试3',
          prop: 'test3'
        },
        {
          label: '测试4',
          disabled: false,
          isShow: false,
          key: '测试4',
          prop: 'test4'
        },
        {
          label: '测试5',
          disabled: false,
          isShow: false,
          key: '测试5',
          prop: 'test5'
        },
        {
          label: '测试6',
          disabled: false,
          isShow: false,
          key: '测试6',
          prop: 'test6'
        },
        {
          label: '测试7',
          disabled: false,
          isShow: false,
          key: '测试7',
          prop: 'test7'
        },
        {
          label: '测试8',
          disabled: false,
          isShow: false,
          key: '测试8',
          prop: 'test8'
        },
        {
          label: '测试9',
          disabled: false,
          isShow: false,
          key: '测试9',
          prop: 'test9'
        },
        {
          label: '测试10',
          disabled: false,
          isShow: false,
          key: '测试10',
          prop: 'test10'
        },
        {
          label: '测试11',
          disabled: false,
          isShow: false,
          key: '测试11',
          prop: 'test11'
        },
        {
          label: '测试12',
          disabled: false,
          isShow: false,
          key: '测试12',
          prop: 'test12'
        },
        {
          label: '测试13',
          disabled: false,
          isShow: false,
          key: '测试13',
          prop: 'test13'
        },
        {
          label: '测试14',
          disabled: false,
          isShow: false,
          key: '测试14',
          prop: 'test14'
        },
        {
          label: '测试15',
          disabled: false,
          isShow: false,
          key: '测试15',
          prop: 'test15'
        },
        {
          label: '测试16',
          disabled: false,
          isShow: false,
          key: '测试16',
          prop: 'test16'
        },
        {
          label: '测试17',
          disabled: false,
          isShow: false,
          key: '测试17',
          prop: 'test17'
        },
        {
          label: '测试18',
          disabled: false,
          isShow: false,
          key: '测试18',
          prop: 'test18'
        },
        {
          label: '测试19',
          disabled: false,
          isShow: false,
          key: '测试19',
          prop: 'test19'
        },
        {
          label: '测试20',
          disabled: false,
          isShow: false,
          key: '测试20',
          prop: 'test20'
        },
        {
          label: '测试21',
          disabled: false,
          isShow: false,
          key: '测试21',
          prop: 'test21'
        },
        {
          label: '测试22',
          disabled: false,
          isShow: false,
          key: '测试22',
          prop: 'test22'
        },
        {
          label: '测试23',
          disabled: false,
          isShow: false,
          key: '测试23',
          prop: 'test23'
        },
        {
          label: '测试24',
          disabled: false,
          isShow: false,
          key: '测试24',
          prop: 'test24'
        }
      ],
      value: [],
      hideValue: [],
      tableData: [
        {
          name: '名称',
          select: '性别',
          kafang: '年龄',
          fengbi: '时间',
          isETF: '事件',
          range: '地点',
          test1: '测试1',
          test2: '测试2',
          test3: '测试3',
          test4: '测试4',
          test5: '测试5',
          test6: '测试6',
          test7: '测试7',
          test8: '测试8',
          test9: '测试9',
          test10: '测试10',
          test11: '测试11',
          test12: '测试12',
          test13: '测试13',
          test14: '测试14',
          test15: '测试15',
          test16: '测试16',
          test17: '测试17',
          test18: '测试18',
          test19: '测试19',
          test20: '测试20',
          test21: '测试21',
          test22: '测试22',
          test23: '测试23',
          test24: '测试24'
        }
      ]
    }
  },
  created() {
    this.getValue()
  },
  mounted() {},
  methods: {
    // 获取初始展示列
    getValue() {
      const valueArr = JSON.parse(localStorage.getItem('showvalue'))
      // 如果有缓存，把缓存的值赋值给value
      if (valueArr && valueArr.length > 0) {
        valueArr.some((item) => {
          if (item.path === this.$route.path) {
            this.value = item.value
          }
        })
      }
      // 如果有缓存，使用缓存
      if (this.value.length > 0) {
        this.value.forEach(item => {
          console.log(item)
          this.data.some(item2 => {
            if (item === item2.key) {
              item2.isShow = true
              return true
            }
          })
        })
      } else {
        // 如果没有缓存，使用接口的数据
        this.data.forEach(item => {
          if (item.isShow) {
            this.value.push(item.key)
          }
        })
      }
    },
    // 穿梭框发生变化（当前值、数据移动的方向、发生移动的数据 key 数组）
    transferChange(val, direct, arr) {
      this.value = val
      this.hideValue = arr
      this.direct = direct
      this.toSave()
    },
    // 保存修改
    toSave(flag) {
      if (flag !== '1') {
        if (this.direct === 'right') {
          this.value.forEach(item => {
            console.log(item)
            this.data.some(item2 => {
              if (item === item2.key) {
                item2.isShow = true
                return true
              }
            })
          })
        } else {
          this.hideValue.forEach(item => {
            this.data.some(item2 => {
              if (item === item2.key) {
                item2.isShow = false
                return true
              }
            })
          })
        }
        this.$nextTick(() => {
          this.$refs.tableDataRef.doLayout()
        })
      } else {
        this.visible = false
        // 缓存记忆
        // 1. 获取缓存
        const getArr = JSON.parse(localStorage.getItem('showvalue'))
        // 2.之前是否有本页面的缓存，默认标识为false
        let getFlag = false
        // 3. 如果找到本页面，将标识改为true，并将旧数据替换为新数据
        if (getArr && getArr.length > 0) {
          getArr.some((item, index) => {
            if (item.path === this.$route.path) {
              getArr[index] = { path: this.$route.path, value: this.value }
              getFlag = true
              return true
            }
          })
          // 4.如果没有找到本页面，将本页面数据推入缓存
          if (!getFlag) {
            getArr.push({ path: this.$route.path, value: this.value })
          }
          // 5.最终存储
          localStorage.setItem('showvalue', JSON.stringify(getArr))
        } else {
          // 6.如果缓存是空的，
          localStorage.removeItem('showvalue')
          localStorage.setItem('showvalue', JSON.stringify([{ path: this.$route.path, value: this.value }]))
        }
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
/deep/.el-transfer-panel__list{
  height: 206px;
}
.left-transfer{
  border: none;
  outline: none;
}
</style>
