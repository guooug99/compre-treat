<template>
	<div class="common-title">
		<span class="title_content">
			{{ title }}
		</span>
	</div>
</template>
<script>
export default {
	props: {
		title: String,
	},
}
</script>
<style lang="less">
.common-title {
	height: 24px;
	font-size: 24px;
	line-height: 24px;
	padding-left: 24px;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		left: 0;
		height: 100%;
		width: 9px;
		background: #018eed;
	}
}
</style>
