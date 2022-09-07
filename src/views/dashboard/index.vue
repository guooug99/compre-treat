<template>
	<div class="common-page dashboard">
		<div class="data-ana common-bg">
			<common-title title="数据分析"></common-title>
			<div class="data-ana-content">
				<div class="data-item-card" v-for=" (item,index) in cardData" :key="index">
					<div class="data-item_card" :class="item.bgc">
						<span class="data-item_card_number">{{item.number}}</span>
						<span class="data-item_card_title">{{item.name}}</span>
						<img class="bg-image1" src="../../assets/形状 46.png">
						<img class="bg-image2" src="../../assets/形状 47.png">
					</div>
				</div>
			</div>
			<div class="data-ana_charts">
				<div class="data-ana_chart">
					<div class="data-ana_chart_top">
							<span class="data-ana_chart_title">电信诈骗信息</span>
							<span class="data-ana_chart_more" >更多&gt;&gt;</span>
					</div>
					<div class="data-ana_chart_content">
						<DataChartOne></DataChartOne>
					</div>
				</div>
				<div class="data-ana_chart">
					<div class="data-ana_chart_top">
							<span class="data-ana_chart_title">出租房屋比率</span>
					</div>
					<div class="data-ana_chart_content">
						<DataChartTwo></DataChartTwo>
					</div>
				</div>
				<div class="data-ana_chart">
					<div class="data-ana_chart_top">
							<span class="data-ana_chart_title">涉毒人员信息</span>
							<span class="data-ana_chart_more" >更多&gt;&gt;</span>
					</div>
					<div class="data-ana_chart_content">
						<DataChartThree></DataChartThree>
					</div>
				</div>
				<div class="data-ana_chart">
					<div class="data-ana_chart_top">
							<span class="data-ana_chart_title">流动人口</span>
					</div>
					<div class="data-ana_chart_content">
						<DataChartFour></DataChartFour>
					</div>
				</div>
			</div>
		</div>
		<div class="more-data">
			<div class="trend common-bg">
				<common-title title="流动人口"></common-title>
				<div class="trend-chart-bg">
					<trend-chart></trend-chart>
				</div>
			</div>
			<div class="more-infos common-bg">
				<div class="more-infos_top">
					<common-title title="信息公告"></common-title>
				    <span class="more-infos_more" >更多&gt;&gt;</span>
				</div>
				<informNotice></informNotice>
			</div>
		</div>
	</div>
</template>
<script>
import CommonTitle from '../../components/commonTitle/index.vue'
import TrendChart from '../../components/trendChart/index.vue'
import DataChartOne from '../../components/dataChartOne/index.vue'
import DataChartTwo from '../../components/dataChartTwo/index.vue'
import DataChartThree from '../../components/dataChartThree/index.vue'
import DataChartFour from '../../components/dataChartFour/index.vue'
import informNotice from '../../components/informNotice/index.vue'
export default {
	data() {
		return {
			cardData: [
				{ number: '8925条', name: '电信诈骗' ,bgc:'blue'},
				{ number: '12640间', name: '出租房屋' ,bgc:'bluish-violet'},
				{ number: '709人', name: '涉毒人员' ,bgc:'orange'},
				{ number: '56899人', name: '流动人口' ,bgc:'purple'}
			],
		}
	},
	components: {
    CommonTitle,
    TrendChart,
    DataChartOne,
    DataChartThree,
    DataChartTwo,
    DataChartFour,
	informNotice
},
}
</script>
<style lang="less">
.dashboard {
	display: flex;
	flex-direction: column;
	.common-bg {
		background: #fff;
		padding: 20px;
	}
	.data-ana {
		display: flex;
        flex-direction: column;
		.data-ana-content {
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: 29%;
			.data-item-card {
				width: 23%;
				margin-top:10px;
				.data-item_card {
					width: 100%;
					height: 128px;
					position: relative;
					// background: #65c6f3;
					border-radius: 16px;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-items: flex-start;
					color: #fff;
					font-size: 32px;
					.data-item_card_number {
						width: 169px;
						height: 39px;
						margin-left: 50px;
						margin-top: 30px;
						text-align: center;
						font-family: SourceHanSansCN-Heavy;
						font-size: 38px;
						font-weight: bold;
						color: #ffffff;
					}
					.data-item_card_title {
						width: 96px;
						height: 24px;
						margin-left: 178px;
						margin-top: 15px;
						font-family: SourceHanSansCN-Regular;
						font-size: 24px;
						color: #ffffff;
					}
					.bg-image1 {
						position: absolute;
						left:0px;
						bottom:0px;
					}
					.bg-image2 {
						position: absolute;
						right:0px;
						bottom:0px;
					}
				}
				.blue {
					background: #65c6f3;
				}
				.bluish-violet {
					background: #89aaf4;
				}
				.orange {
					background: #f98463;
				}
				.purple {
					background: #a69bfd;
				}
			}
		}
		.data-ana_charts {
					width: 100%;
					height: 300px;
					// background: rgb(207, 154, 190);
					margin-top: 20px;
					display: flex;
					justify-content: space-between;
					.data-ana_chart{
						display: flex;
						flex-direction: column;
						width: 23%;
						// background: #ccc;
					    .data-ana_chart_top {
							width: 100%;
							height: 19px;
							display: flex;
							justify-content: space-between;
							.data-ana_chart_title {
							width: 115px;
							height: 19px;
							margin-left: 12px;
							font-family: SourceHanSansCN-Light;
							font-size: 19px;
							line-height: 19px;
							letter-spacing: 0px;
							color: #111111;
							}
							.data-ana_chart_more {
								width: 39px;
								height: 11px;
								margin-right: 8px;
								margin-top: 8px;
								font-family: SourceHanSansCN-Light;
								font-size: 12px;
								line-height: 11px;
								letter-spacing: 0px;
								color: #242b34;
							}
					 }
						.data-ana_chart_content {
							width: 100%;
							flex:1;
							margin-top: 12px;
							// background-color: rgb(201, 192, 228);
						}
					}
				}
	}
	.more-data {
		flex: 1;
		margin-top: 20px;
		display: flex;
		width: 100%;
		min-height: 335px;
		.trend {
			display: flex;
			flex-direction: column;
			flex: 1;
			.trend-chart-bg {
				flex:1;
				// background-color: rgb(104, 175, 172);
				margin-left: 10px;
				margin-bottom: 11px;
			}
		}
		.more-infos {
			margin-left: 20px;
			width: 500px;
            display: flex;
			flex-direction: column;
			.more-infos_top{
				display: flex;
			    justify-content: space-between;
				.more-infos_more {
				width: 58px;
				height: 17px;
				margin-right: 20px;
				margin-top: 18px;
				font-family: SourceHanSansCN-Light;
				font-stretch: normal;
				line-height: 17px;
				color: #888f97;
			}
			}
			
		}
	}
}
</style>
