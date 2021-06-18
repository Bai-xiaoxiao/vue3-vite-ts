<template>
  <div class="text-red-500 flex">{{ aaa.name }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/runtime-core'

export default defineComponent({
  setup() {
    const aaa = reactive({
      name: 123
    })
    return {
      aaa
    }
  }
})
</script>

<style></style>
