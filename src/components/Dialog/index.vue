<template>
  <teleport to="body">
    <transition name="slide">
      <div
        v-if="$props.modelValue"
        class="
          modal
          fixed
          left-0
          top-0
          right-0
          bottom-0
          bg-opacity-50 bg-black
          overflow-auto
        "
      >
        <div
          class="dialog-wrap w-1/3 rounded-md bg-white mr-auto ml-auto overflow-hidden"
        >
          <div
            class="
              title
              p-5
              pb-2.5
              font-bold
              text-black text-opacity-80 text-lg
              relative
            "
          >
            <span>{{ $props.title }}</span>
            <button
              @click="close"
              class="outline-none absolute p-1 font-bold top-5 right-5"
            >
              X
            </button>
          </div>
          <div class="content py-8 px-5">内容</div>
          <div class="footer px-5 pt-2.5 pb-5">底部</div>
        </div>
        <button @click="close">关闭弹窗</button>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: { type: Boolean },
    title: { type: String }
  },
  setup(props, context) {
    console.log(props)

    const close = () => {
      context.emit('update:modelValue', false)
    }
    return {
      close
    }
  }
})
</script>

<style lang="less">
.slide-leave-active,
.slide-enter-active {
  transition: all 0.5s ease-in;
}
// vue2=>vue3 元素初始位置:slide-enter=>slide-enter-from
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  div.dialog-wrap {
    transform: translateY(-10%);
  }
}
.modal {
  z-index: 2000;
  height: 100%;
  .dialog-wrap {
    z-index: 2001;
    width: 300px;
    margin-top: 15vh;
    transition: all 0.5s;
  }
}
</style>
