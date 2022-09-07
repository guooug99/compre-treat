<template>
	<div class="main-page">
		<side-menu class="side"></side-menu>
		<div class="main-content">
			<top-header class="header"></top-header>
			<router-view class="content_body"></router-view>
		</div>
	</div>
</template>
<script>
import SideMenu from '../components/sideMenu/index'
import TopHeader from '../components/topHeader/index'
export default {
	components: {
		SideMenu,
		TopHeader,
	},
}
</script>
<style lang="less">
.main-page {
	display: flex;
	// vw是一种视窗单位，也是相对单位，是视窗宽度百分比的意思
	width: 100vw;
	min-width: 1280px;
	min-height: 100%;
	// 溢出显示滚动条
	overflow: auto;
	.main-content {
		width: 100%;
		display: flex;
		flex-direction: column;
		flex: 1;

		.content_body {
			flex: 1;
			padding: 20px;
			background: #eff0f5;
			height: 100%;
		}
	}
}
</style>
