<template>
  <div>
    <van-list
      v-model:loading="state.loading"
      :finished="state.finished"
      finished-text="没有更多了"
      @load="onLoad"
      class="scroll-list"
    >
      <van-cell v-for="item in state.list" :key="item" :title="item" />
    </van-list>

    <tabbar />
  </div>
</template>

<script>
import { List as VanList } from "vant";
import { reactive } from "vue";
export default {
  components: { VanList },
  setup() {
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
    });

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          state.list.push(state.list.length + 1);
        }

        // 加载状态结束
        state.loading = false;

        // 数据全部加载完成
        if (state.list.length >= 40) {
          state.finished = true;
        }
      }, 1000);
    };

    return {
      state,
      onLoad,
    };
  },
};
</script>

<style lang="less" scoped>
.scroll-list {
  min-height: 100vh;
  padding-bottom: 50px;
}
</style>