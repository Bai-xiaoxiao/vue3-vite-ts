<template>
  <van-tabbar route>
    <van-tabbar-item to="/index" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/order" icon="orders-o">订单</van-tabbar-item>
    <van-tabbar-item to="/user" icon="manager">个人中心</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: 'tabbar',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
};
</script>

<style>
</style>