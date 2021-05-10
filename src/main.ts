import { createApp } from "vue";
import App from "./App.vue";
import { router } from './router';
import tabbar from './components/tabbar/index.vue'
import { Lazyload, Cell, CellGroup, Col, Row, Button } from 'vant'

const a = 1;
if (a == 1) {
  console.log(123);
}

const app = createApp(App);
app.component(tabbar.name, tabbar);
app.use(router)
.use(Lazyload)
.use(Cell)
.use(CellGroup)
.use(Col)
.use(Row)
.mount("#app");
