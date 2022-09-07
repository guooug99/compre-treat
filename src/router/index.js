import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: () => import('../views/index.vue'),
		redirect: '/dashboard',
		children: [
			{
				path: '/dashboard',
				name: 'dashboard',
				component: () => import('../views/dashboard/index'),
			},
			{
				path: '/security',
				name: 'security',
				component: () => import('../views/security/index'),
			},
			{
				path: '/traffic',
				name: 'traffic',
				component: () => import('../views/traffic/index'),
			},
			{
				path: '/drug',
				name: 'drug',
				component: () => import('../views/drug/index'),
			},
			{
				path: '/law',
				name: 'law',
				component: () => import('../views/law/index'),
			},
			{
				path: '/data',
				name: 'data',
				component: () => import('../views/data/index'),
			},
			{
				path: '/aptitude',
				name: 'aptitude',
				component: () => import('../views/aptitude/index'),
			},
			{
				path: '/serve',
				name: 'serve',
				component: () => import('../views/serve/index'),
			},
		],
	},
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
})

export default router
