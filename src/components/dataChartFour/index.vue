<template>
  <div class="data-chart_four">
	<div ref="chart1" style="width:100%;height:100%"></div>
 </div>
</template>

<script>
export default {
    mounted() {
      this.getEchartData1()
    },
    methods: {
        getEchartData1() {
        const chart1 = this.$refs.chart1
        const myChart = this.$echarts.init(chart1)
        if (chart1) {
          const option = {
              // color: ['#a69bfd', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#6a7985'
                  }
                }
              },
              legend: {
                show: false,
              },
              // toolbox: {
              //   feature: {
              //     saveAsImage: {}
              //   }
              // },
              grid: {
                left: '1%',
                right: '0%',
                bottom: '0%',
                containLabel: true
              },
              xAxis: [
                {
                  type: 'category',
                  boundaryGap: false,
                  data: ['', '2016年', '2017年', '2018年', '2019年', ''],
                  nameTextStyle: {
                  fontSize: 12,
                  fontWeight: "normal",
                  },
                axisLabel:{
                  textStyle:{
                    fontSize:'12',
                  },
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                      type:'solid',
                      color:'#e2e2e2'
                    }
                  }
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  name: "(人)",
                  nameLocation: "start",
                  nameTextStyle: {
                    fontSize: 14,
                    fontWeight: "normal",
                    padding: [0, 70, 0, 0],
                  },
                nameGap: -7,
                axisLabel:{
                  textStyle:{
                    fontSize:'12',
                  },
                },
                  splitLine:{
                    show:true,
                    lineStyle:{
                      type:'solid',
                      color:'#e2e2e2'
                    }
                  }
                }
              ],
              series: [
                {
                  name: 'Line 1',
                  type: 'line',
                  stack: 'Total',
                  smooth: '1',
                  showSymbol: 'true',
                  symbol:'circle',
                  symbolSize:[11,11],
                  itemStyle:{
                  color:'#b2a9fd',
                  borderColor:'#ffffff',
                  borderWidth:'3',
                  },
                  lineStyle:{
                    width:4
                  },
                  areaStyle: {
                    opacity: 0.8,
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: '#b2a9fd',
                      },
                      {
                        offset: 1,
                        color: '#ffffff'
                      }
                    ])
                  },
                  emphasis: {
                    focus: 'series'
                  },
                  data: [3000, 4000, 4700, 3700, 5300,4400]
                },
                
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
.data-chart_four {
    width: 100%;
    height: 100%;
}

</style>