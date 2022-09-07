<template>
	<div class="side-menu">
		<div class="logo">
			<img src="../../assets/greenlogo.png">
		</div>
		<ul class="side-menu-list">
			<li
				class="menu-item-content"
				v-for="item in menuConfig"
				:class="{ 'is-active': item.key === activeKey }"
				:key="item.key"
				@click="menuClick(item)"
			>
				<i class="menu-item-icon" :class="item.icon"></i>
				<span class="menu-item-label">{{ item.label }}</span>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			menuConfig: [
				{
					label: '首页',
					key: 'dashboard',
					icon: 'el-icon-s-home',
				},
				{
					label: '治安管理',
					key: 'security',
					icon: 'el-icon-bell',
				},
				{
					label: '交通管理',
					key: 'traffic',
					icon: 'el-icon-truck',
				},
				{
					label: '涉毒管理',
					key: 'drug',
					icon: 'el-icon-delete',
				},
				{
					label: '法制管理',
					key: 'law',
					icon: 'el-icon-collection-tag',
				},
				{
					label: '数据分析',
					key: 'data',
					icon: 'el-icon-data-analysis',
				},
				{
					label: '资质认定',
					key: 'aptitude',
					icon: 'el-icon-medal',
				},
				{
					label: '综合服务',
					key: 'serve',
					icon: 'el-icon-s-order',
				},
			],
		}
	},
	computed: {
		activeKey() {
			console.log(this.$route)
			return this.$route.name
		},
	},
	methods: {
		menuClick(menuItem) {
			// 当前路由名字与要去的路由名字不一致时，才需要跳转到新路由
			if (this.activeKey !== menuItem.key) {
				this.$router.push({ name: menuItem.key })
			}
		},
	},
}
</script>
<style lang="less">
.side-menu {
	width: 200px;
	// height: 100%;
	min-height: 400px;
	background: #242b34;
	display: flex;
	flex-direction: column;
	.logo {
		width: 100%;
		height: 75px;
		background: #018eed;
		// 父子都是行内块元素，自动换行
		display: inline-flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-weight: bold;
		font-size: 38px;
	}
	.side-menu-list {
		width: 100%;
		flex: 1;
		margin-top: 16px;
		.menu-item-content {
			position: relative;
			width: 100%;
			height: 67px;
			cursor: pointer;
			color: #888f97;
			padding: 0 30px;
			line-height: 67px;
			.menu-item-icon {
				font-size: 28px;
				margin-right: 15px;
				vertical-align: middle;
			}
			.menu-item-label {
				font-size: 18px;
				vertical-align: middle;
			}
			&.is-active {
				color: #fff;
				.menu-item-icon {
					color: #018eed;
				}
				&::after {
					content: '';
					position: absolute;
					left: 0;
					width: 6px;
					height: 100%;
					background: #018eed;
				}
			}
			&:hover {
				color: #fff;
				.menu-item-icon {
					color: #018eed;
				}
			}
		}
	}
}
</style>
