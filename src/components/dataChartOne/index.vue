<template>
  <div class="data-chart_one">
	<el-table
      :data="tableData1"
      class="tableBox1"
      style="margin-top: 18px;"
      :header-cell-style="{background:'#f5f6f8',color:'#606266'}"
      >
      <el-table-column
        prop="numbers"
        label="编号"
        width="63"
        align="center"
        class-name="numbers"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="105"
        align="center"
        class-name="name">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="105"
        align="center"
        class-name="state">
      </el-table-column>
      <el-table-column
        prop="date"
        label="时间"
        width="105"
        align="center"
        class-name="date">
      </el-table-column>
    </el-table>
 </div>
</template>

<script>
export default {
    data() {
        return {
            tableData1: [{
            numbers: '001',
            name: '李某某',
            state: '已处理',
            date:'2019-07-07',
          }, {
            numbers: '001',
            name: '李某某',
            state: '已处理',
            date:'2019-07-07',
          }, {
            numbers: '001',
            name: '李某某',
            state: '已处理',
            date:'2019-07-07',
          }, {
            numbers: '001',
            name: '李某某',
            state: '已处理',
            date:'2019-07-07',
          },{
            numbers: '001',
            name: '李某某',
            state: '已处理',
            date:'2019-07-07',
          },
          {
            numbers: '001',
            name: '李某某',
            state: '已处理',
            date:'2019-07-07',
          },
          ],
        }
    },

}
</script>

<style>
.tableBox1 th {
    padding: 0 !important;
    height: 32px;
    line-height: 32px;
}

.tableBox1 td {
    padding: 0 !important;
    height: 33px;
    line-height: 33px;
}

</style>