import Vue from "vue"
import VueRouter from "vue-router"
import imageViewer from "@module/imageViewer.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "viewer",
		component: imageViewer,
	},
	{
		path: "/viewer",
		name: "imageViewer",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "imageViewer" */ "@module/imageViewer.vue"),
	},
]

const router = new VueRouter({
	routes,
})

export default router
