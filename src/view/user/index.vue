<template>
  <div>
    <van-row class="avatar">
      <van-col span="8" offset="8"
        ><van-image
          fit="cover"
          round
          lazy-load
          width="100px"
          height="100px"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
      /></van-col>
    </van-row>
    <van-cell icon="gold-coin-o" title="余额" value="123.00" label="描述信息" />
    <tabbar />
  </div>
</template>

<script>
import { Image as VanImage } from 'vant'

export default {
  components: {
    VanImage
  }
}
</script>

<style scoped lang="less">
.avatar {
  padding-top: 20px;
  margin-bottom: 40px;
}
</style>
