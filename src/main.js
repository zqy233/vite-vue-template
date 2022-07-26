import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./utils/lib-flexible"
import "element-plus/theme-chalk/src/message.scss"
import "element-plus/theme-chalk/dark/css-vars.css"
import "echarts"
import Echarts from "vue-echarts"
const app = createApp(App)
app.component("Echarts", Echarts)
app.use(store).use(router).mount("#app")
