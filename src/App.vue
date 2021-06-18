<template>
  <div>
    <router-view />
    -----------------------
    <Dialog v-model="showDialog" title="弹窗头部" />
    <button @click="showDialog = true">打开弹窗</button>
    -----------------------
  </div>
</template>

<script lang="ts">
import Dialog from '@compos/Dialog/index.vue'
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
  components: {
    Dialog
  },
  setup() {
    return {
      showDialog: ref(false)
    }
  }
})
</script>

<style lang="less">
body {
  font-size: 14px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>
