import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
      name: 'index',
    },
  },
  {
    name: "index",
    component: () => import('../view/index/index.vue'),
    meta: {
      title: "首页",
    },
  },
  {
    name: "user",
    component: () => import("../view/user/index.vue"),
    meta: {
      title: "个人中心",
    },
  },
  {
    name: "order",
    component: () => import("../view/order/index.vue"),
    meta: {
      title: "订单",
    },
  },
  {
    name: "signUp",
    component: () => import("../view/signUp/index.vue"),
    meta: {
      title: "注册",
    },
  },
  // {
  //   name: "cart",
  //   component: () => import("./view/cart"),
  //   meta: {
  //     title: "购物车",
  //   },
  // },
  // {
  //   name: "goods",
  //   component: () => import("./view/goods"),
  //   meta: {
  //     title: "商品详情",
  //   },
  // },
];

// add route path
routes.forEach((route) => {
  route.path = route.path || "/" + (route.name || "");
});

// let contexts = require.context(".", false, /(?!.*index).js$/);
// let routes = [];
// contexts.keys().forEach((component) => {
//   let item = contexts(component).default;
//   if (!item) return;

//   if (item.path) {
//     // 单组件模块
//     routes.push(item);
//   } else {
//     // 导出多个对象
//     let objArr = Object.values(item);
//     routes.push(...objArr);
//   }
// });

let allRoutes = [...routes];
// let router:any = new Router({
//   mode: "history",
//   path: "aaa",
//   routes: allRoutes,
//   scrollBehavior() {
//     return { x: 0, y: 0 };
//   },
// });
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export { router };
