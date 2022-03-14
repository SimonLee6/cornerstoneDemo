import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import "./assets/css/normalize.css"
import "./assets/css/reset.css"
import ElementUI from "element-ui"

import "element-ui/lib/theme-chalk/index.css"
import "element-ui/lib/theme-chalk/icon.css"

import "./scss/baseElement.scss"
import "./scss/base.scss"

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#imageApp")
