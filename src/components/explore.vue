<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>

        <v-list two-line subheader>
          <v-subheader inset>基本数据</v-subheader>
          <v-list-tile v-for="item in items" :key="item.title" avatar @click="show_notice(item)">
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">notifications</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-subheader inset>建议操作</v-subheader>
          <v-list-tile v-for="item in items2" :key="item.title" avatar @click="show_fulldialog(item)">
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">settings</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>


    <v-dialog v-model="dialog_full" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="amber darken-4">
          <v-btn icon dark @click.native="dialog_full = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>按摩模式设置</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="submit_notice()">开始按摩</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>按摩设置</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>快速按摩</v-list-tile-title>
              <v-list-tile-sub-title>进行一次短暂的按摩</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>智能调节频率</v-list-tile-title>
              <v-list-tile-sub-title>基于心率的按摩速度智能调整</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>实时记录心率数据</v-list-tile-title>
              <v-list-tile-sub-title>按摩心率变换图会实时同步到后台</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-dialog>


    <!-- notis -->
    <v-dialog v-model="dialog_notice" max-width="500px">
      <!-- <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn> -->
      <v-card>
        <v-card-title>
          <span class="headline">{{noticeData.header}}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <!-- <v-flex xs12 sm6 md4>
                <v-text-field label="提醒人~" required></v-text-field>
              </v-flex> -->
              <v-flex xs12 sm6 md4>
                <div>
                    <v-time-picker format="24hr" min="8:00" max="22:15" v-model="picker"></v-time-picker>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" flat @click="submit_notice()">提交</v-btn>
          <v-btn color="error" flat @click.native="dialog_notice = false">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import api from "../axios";
  export default {
    data () {
      return {
        items: [
          { icon: 'wb_sunny', iconClass: 'amber white--text', title: '天气', subtitle: '武汉，晴', type:'weather' },
          { icon: 'favorite', iconClass: 'deep-orange  white--text', title: '心率', subtitle: '70 beats/min', type: 'heart' },
          { icon: 'timeline', iconClass: 'green darken-1 white--text', title: '温度', subtitle: '26', type: 'degree' }
        ],
        items2: [
          { icon: 'vibration', iconClass: 'orange white--text', title: '按摩', subtitle: '进行短暂的震动按摩', type: 'shake' },            
          { icon: 'timer', iconClass: 'blue white--text', title: '闹钟', subtitle: '设定一个闹钟进行提醒' },
          { icon: 'music_note', iconClass: 'purple darken-2 white--text', title: '音乐', subtitle: '播放音乐' }
        ],
        dialog_full: false,
        dialog_notice: false,
        fulldiaglogData: {
            type: '',

        },
        noticeData: {
            header: '',
            type: '',
        },
        notifications: false,
        sound: true,
        widgets: false,
        picker: '11:15',
      }
    },
    methods: {
        show_fulldialog(item) {
            this.dialog_full = true;
            this.noticeData = {
                header: `设定${item.title}提醒`,
                type: item.type
            }
        },
        show_notice(item) {
            this.noticeData = {
                header: `设定${item.title}提醒`,
                type: item.type
            }
            this.dialog_notice = true;
        },
        prase_time(time) {
            return `2018-06-03T${time}:00Z`
            // const d = new Date(`2018-06-03 ${time}`);
        },
        submit_notice() {
            api.SendMessage({
                User: `http://hack.laphets.com:8080/api/userprofile/1/`,
                type: this.noticeData.type,
                time: this.prase_time(this.picker),
                content: 'OK',
            }).then(res => {
                console.log(res);
                this.dialog_notice = false; 
            }).catch(err => {
                console.log(err);
            })
        }
    }
  }
</script>