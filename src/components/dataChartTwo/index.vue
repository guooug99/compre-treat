<template>
  <div class="data-chart_two">
	<div ref="chart" style="width:100%;height:100%"></div>
 </div>
</template>

<script>
export default {
    mounted() {
        this.getEchartData()
    },
    methods: {
        getEchartData() {
        const chart = this.$refs.chart
        const myChart = this.$echarts.init(chart)
        if (chart) {
          const option = {
            tooltip: {
            trigger: 'item'
           },
           grid:{
            // show:true,
            // backgroundColor:"#ccc",
            left: "0%",
            top: "0%",
            right: "0%",
            bottom: "0%",
          },
            legend: {
              data:['2019出租房屋','2018出租房屋','','2017出租房屋','2016出租房屋'],
              orient: 'horizontal',
              bottom: '0px',
              width:'500px',
              icon:'circle',//图例图标改为圆形
              // itemGap:76,
            },
            // 修改饼图颜色
            color: ['#8aaaf5','#d882fc','#2fc4da','#65c6f3'],
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: '75%',
                center:['50%','41%'],
                left: "0%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                data: [
                  { value: 54, name: '2019出租房屋' },
                  { value: 19, name: '2018出租房屋' },
                  { value: 13, name: '2017出租房屋' },
                  { value: 14, name: '2016出租房屋' },
                
                ],
                label: {
                  //echarts饼图内部显示百分比设置
                  show: true,
                  position: "inside", //outside 外部显示 inside 内部显示
                  formatter:`{d}%`,
                  color:"#ffffff",//颜色
                  fontSize:14//字体大小
                  },
                
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }
          myChart.setOption(option)
          window.addEventListener("resize", function() {
            myChart.resize()
          })
        }
        this.$on('hook:destroyed',()=>{
          window.removeEventListener("resize", function() {
            myChart.resize();
          });
        })
      },
    },
}
</script>

<style>
.data-chart_two {
    width: 100%;
    height: 100%;
}
</style>