
<template>
  <div>
<el-table :data="tableData" stripe border style="width: 98%" ref="tableDataRef">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column type="index" width="55" label="序号" align="center"></el-table-column>
      <el-table-column v-if="colData[0].istrue" prop="name" label="名称" align="center"></el-table-column>
      <el-table-column v-if="colData[1].istrue" prop="select" label="性别" align="center"></el-table-column>
      <el-table-column v-if="colData[2].istrue" prop="kafang" label="年龄" align="center"></el-table-column>
      <el-table-column v-if="colData[3].istrue" prop="fengbi" label="时间" align="center"></el-table-column>
      <el-table-column v-if="colData[4].istrue" prop="isETF" label="事件" align="center"></el-table-column>
      <el-table-column v-if="colData[5].istrue" prop="range" label="地点" align="center"></el-table-column>
 </el-table>
 
 
<!-- <el-popover placement="right" width="400" trigger="click">
    <el-checkbox-group v-model="colOptions">
        <el-checkbox v-for="item in colSelect" :label="item" :key="item" ></el-checkbox>
    </el-checkbox-group>
    <el-button slot="reference">设置</el-button>
</el-popover> -->

<el-popover placement="right" trigger="click">
  <el-transfer v-model="colOptions" :data="colSelect"></el-transfer>
  <el-button slot="reference">设置</el-button>
</el-popover>
  </div>
</template>
<script>
export default {

  data() {
    return {
      colData: [{title: "名称",istrue: true},
      {title: "性别",istrue: true},
      {title: "年龄",istrue: true},
      {title: "时间",istrue: true},
      {title: "事件",istrue: true},
      {title: "地点",istrue: true}],
      colOptions: ["名称","性别", "年龄","时间","事件","地点",], //默认全选
      colSelect: ["名称", "性别","年龄","时间","事件", "地点",]
    };
  },
  watch: {
    colOptions(valArr) {
      var arr = this.colSelect.filter(i => valArr.indexOf(i) < 0); // 未选中
      this.colData.filter(i => {
        if (arr.indexOf(i.title) != -1) {
          i.istrue = false;
          this.$nextTick(() => {
            this.$refs.tableDataRef.doLayout();
          });
        } else {
          i.istrue = true;
          this.$nextTick(() => {
            this.$refs.tableDataRef.doLayout();
          });
        }
      });
    }
  },
  created(){

  },
  mounted(){

  },
  methods: {

  }
};
</script>