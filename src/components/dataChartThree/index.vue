<template>
  <div class="data-chart_three">
    <el-table
      :data="tableData2"
      class="tableBox2"
      style="margin-top: 18px;"
      :cell-style="tableCellStyle"
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
            tableData2: [{
            numbers: '001',
            name: '李某某',
            state: '未处理',
            date:'2019-07-07',
          }, {
            numbers: '001',
            name: '李某某',
            state: '未处理',
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
    methods:{
         // 字体颜色处理
      tableCellStyle ({rowIndex, columnIndex}) {
        if(columnIndex === 2) { // 表格的第3列做处理
          if(rowIndex == 0) { // 如果是低风险背景色蓝色，字体色白色
          return 'color:red' 
          }else if(rowIndex == 1) {// 较大风险
            return 'color:red' 
          }
        }
      },
    }

}
</script>

<style>
.tableBox2 th {
  padding: 0 !important;
  height: 32px;
  line-height: 32px;
}

.tableBox2 td {
  padding: 0 !important;
  height: 33px;
  line-height: 33px;
}
</style>