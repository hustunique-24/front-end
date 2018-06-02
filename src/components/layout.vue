<template>
  <div>
    <van-tabbar v-model="active">
        <van-tabbar-item v-for="item in tabbar" :key="item.text" :icon="item.icon">
            {{item.text}}
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Icon, Tabbar, TabbarItem } from 'vant';

export default {
  components: {
    [Icon.name]: Icon,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data: () => ({
      active: 0,
      tabbar: [
          {
              icon: 'home',
              text: '主页',
              route: 'home',
          },
          {
              icon: 'chat',
              text: '消息',
              route: 'message',
          },
          {
              icon: 'contact',
              text: '我的',
              route: 'my',
          },
      ]
  }),
  watch: {
      active: function (val) {
          this.$router.push({
              name: this.tabbar[this.active].route
          });
      }
  }
};
</script>

<style>
body {
  background-color: #f8f8f8;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
</style>
