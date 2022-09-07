<template>
 <div class="trend-chart">
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
					color: ['#65c6f3', '#a69bfd'],
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
						data:['2019年流动人口','2018年流动人口'],
						left: 153,
						top: 6
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						// width: "810",
						// height: "212",
						containLabel: true,
						show:true,
						// backgroundColor: "#ccc",
					},
					xAxis: [
						{
							type: 'category',
							boundaryGap: false,
							data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
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
																padding: [0, 60, 0, 0],
															},
															nameGap: -7,
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
															name: '2019年流动人口',
															type: 'line',
															stack: 'Total',
															smooth: true,
															lineStyle: {
																width: 0
															},
															showSymbol: false,
															areaStyle: {
																opacity: 0.8,
																color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
																	{
																		offset: 0,
																		color: '#e5abfd'
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
															data: [11000, 9600, 6500, 7900, 11000, 11400, 9500,5500,6500,9200,11500,12000,11300]
														},
														{
															name: '2018年流动人口',
															type: 'line',
															smooth: true,
															lineStyle: {
																width: 0
															},
															showSymbol: false,
															label: {
																show: true,
																position: 'top'
															},
															areaStyle: {
																opacity: 0.8,
																color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
																	{
																		offset: 0,
																		color: '#c7c0fe'
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
															data: [8000, 9200, 9500, 7900, 7100, 7400,8500,9000,8800,7800,5800,6500,8200]
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
	.trend-chart {
		width: 100%;
		height: 100%;
	}

</style>