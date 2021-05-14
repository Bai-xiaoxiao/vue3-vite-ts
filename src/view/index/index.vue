<template>
  <div>
    <!-- banner -->
    <van-swipe :autoplay="3000" lazy-render class="swipe-c">
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>

    <!-- 商品信息 -->
    <div class="goods">
      <van-row gutter="0" justify="space-between">
        <van-col v-for="item in goods" :key="item.id" span="11" class="col-item">
          <van-image
            width="100%"
            height="150"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            fit="cover"
          />
          <div class="good-msg">
            <span class="name">{{ item.name }}</span>
            <span class="price">￥{{ item.price }}</span>
          </div>
        </van-col>
      </van-row>
    </div>

    <tabbar />
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
import { reactive } from 'vue'

export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  setup() {
    const images = [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg'
    ]

    const goods = reactive([
      {
        id: 1,
        name: '商品名',
        price: 100,
        img: 'https://img.yzcdn.cn/vant/apple-2.jpg'
      },
      {
        id: 2,
        name: '商品名',
        price: 100,
        img: 'https://img.yzcdn.cn/vant/apple-2.jpg'
      },
      {
        id: 3,
        name: '商品名',
        price: 100,
        img: 'https://img.yzcdn.cn/vant/apple-2.jpg'
      }
    ])

    return {
      images,
      goods
    }
  }
}
</script>

<style lang="less" scoped>
.swipe-c {
  height: 30vh;
  img {
    width: 100%;
    object-fit: cover;
  }
}
.goods {
  margin: 20px 10px;
  .col-item {
    margin-bottom: 10px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    .good-msg {
      display: flex;
      justify-content: space-between;
      padding: 6px 4px;
      .name {
        font-size: 14px;
      }
      .price {
        font-size: 16px;
        color: #ee0a24;
      }
    }
  }
}
</style>
