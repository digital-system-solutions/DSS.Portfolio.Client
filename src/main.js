
// Components
import App from './App.vue'
import { createPinia } from "pinia"
import { createApp, markRaw } from "vue"
import webFontLoader from "webfontloader"
import vuetify from './vuetify'
import router from './router'

webFontLoader.load({
	google: {
		families: ["Roboto"],
	},
})

const pinia = createPinia()
pinia.use(({ store }) => {
	store.$router = markRaw(router)
})

const app = createApp(App)
app.use(vuetify).use(pinia).use(router)
app.mount("#app")


