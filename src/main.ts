import { createApp } from 'vue'
import { Lazyload, Cell, CellGroup, Col, Row, Image } from 'vant'
import App from './App.vue'
import router from './router'
import tabbar from './components/tabbar/index.vue'

const app = createApp(App)
app.component(tabbar.name, tabbar)
app
  .use(router)
  .use(Lazyload)
  .use(Cell)
  .use(Image)
  .use(CellGroup)
  .use(Col)
  .use(Row)
  .mount('#app')
