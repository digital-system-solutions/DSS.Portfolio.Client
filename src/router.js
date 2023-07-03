// Composables
import { createRouter, createWebHistory } from "vue-router"
//const viewModules = import.meta.globEager("@/views/**/index.js")
//const routes = Object.values(viewModules).map((module) => module.default)

const routes = [
	{
		path: "/",
		component: () => import("@/App.vue"),
		children: [
			{
				path: "",
				name: "Home",
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})


export default router
