import { createApp } from 'vue'
import { Lazyload, Cell, CellGroup, Col, Row } from 'vant'
import App from './App.vue'
import router from './router'
import tabbar from './components/tabbar/index.vue'

const a = 1
if (a === 1) {
  // console.log(123);
}

const app = createApp(App)
app.component(tabbar.name, tabbar)
app.use(router).use(Lazyload).use(Cell).use(CellGroup).use(Col).use(Row).mount('#app')
