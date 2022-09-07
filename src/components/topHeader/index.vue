<template>
	<div class="top-header">
		<i class="top-header-icon_one el-icon-s-operation"></i>
		<div class="left">您好，欢迎来到千图云平台！</div>
		<i class="top-header-icon_two el-icon-right"></i>
		<div class="rect1"></div>
		<div class="login">注册丨登录</div>
		<img class="circle" src="../../assets/Elipse 1 拷贝.png">
		<div class="informNumber">6</div>
		<div class="right">系统消息</div>
	</div>
</template>
<style lang="less">
.top-header {
	width: 100%;
	height: 75px;
	// overflow: auto;
	.top-header-icon_one {
		float: left;
		line-height: 75px;
		font-size: 28px;
		margin-left: 38px;
		vertical-align: middle;
	}
	// .top-header-icon_one,
	// .left,
	// .right {
	// 	display: inline-block;
	// }
	.left {
		float: left;
		line-height: 75px;
		margin-left: 41px;
	}
	.right {
		font-size: 19px;
		float: right;
		line-height: 75px;
	}
	.circle {
		float: right;
		margin-top: 13px;
		margin-right: 34px;
		width: 26px;
		height: 26px;
    }
	.top-header-icon_two {
		float: right;
		line-height: 75px;
		font-size: 28px;
		margin-right: 27px;
		vertical-align: middle;
	}
	.rect1 {
		float: right;
		width: 3px;
		height: 18px;
		margin-top: 28px;
		margin-right: 23px;
		background-color: #dedede;
    }
	.login {
		float: right;
		width: 96px;
		height: 18px;
		margin-top: 30px;
		margin-right: 23px;
		font-family: SourceHanSansCN-Light;
		font-size: 19px;
		line-height: 18px;
		color: #111111;
    }
	.informNumber {
		float: right;
		width: 9px;
		height: 13px;
		margin-top: 20px;
		margin-right: -17.5px;
		font-family: SourceHanSansCN-Light;
		font-size: 16px;
		line-height: 13px;
		color: #ffffff;
}
}
</style>
