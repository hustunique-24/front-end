<template>
  <v-app id="inspire">
      <v-content>
  <v-layout row>

    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="/static/images/pillow2.png" height="250px">
          <v-layout column class="media">
            <v-card-title>
              <v-btn icon @click="goback()">
                <v-icon>chevron_left</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn  icon class="mr-3">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn  icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-title class="white--text">
              <div class="display-1">抱枕信息</div>
            </v-card-title>
          </v-layout>
        </v-card-media>
        <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">code</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>650-555-1234</v-list-tile-title>
              <v-list-tile-sub-title>序列号</v-list-tile-sub-title>
            </v-list-tile-content>
            <!-- <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action> -->
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
                <v-icon color="indigo">insert_link</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>WiFi (正常)</v-list-tile-title>
              <v-list-tile-sub-title>抱枕连接情况</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>wifi_tethering</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
                <v-icon color="indigo">scatter_plot</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>语音:正常 ; 震动:正常</v-list-tile-title>
              <v-list-tile-sub-title>传感器自检</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>V0.0.1 Beta</v-list-tile-title>
              <v-list-tile-sub-title>固件版本</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">battery_charging_full</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>90%剩余(正在充电中)</v-list-tile-title>
              <v-list-tile-sub-title>抱枕电量</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">location_on</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>武汉，湖北</v-list-tile-title>
              <v-list-tile-sub-title>定位地址</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
      </v-content>
</v-app>
</template>

<script>
export default {
    methods: {
        goback() {
            this.$router.go(-1);
        }
    }
}
</script>


<style lang="stylus">
  .media
    height: 100%
    margin: 0
</style>