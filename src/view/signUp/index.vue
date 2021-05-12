<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="state.rePassword"
        type="password"
        name="rePassword"
        label="重复密码"
        placeholder="重复密码"
        :rules="[{ validator: rePasswordValidator }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Form, Field, Button } from 'vant'
import { reactive } from 'vue'

export default {
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  setup() {
    // 验证部分
    const state = reactive({
      username: '',
      password: '',
      rePassword: ''
    })
    const rePasswordValidator = (val) => {
      if (val === '') {
        return '请输入重复密码'
      }
      if (val === state.password) {
        return true
      }
      return '两次密码不一致'
    }
    // const onSubmit = (values) => {
    //   console.log(values)
    // }

    return {
      state,
      rePasswordValidator
      // onSubmit
    }
  }
}
</script>

<style></style>
