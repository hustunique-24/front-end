<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list two-line subheader>
          <v-subheader inset>个人信息</v-subheader>
          <v-list-tile v-for="item in items" :key="item.title" avatar @click="">
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-subheader inset>健康信息</v-subheader>
          <v-list-tile v-for="item in items2" :key="item.title" avatar @click="">
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import api from "../axios";
  export default {
    data () {
      return {
        userProfile: {
            human_sex: ''
        },
        items: [
          { icon: 'person_pin', iconClass: 'amber lighten-1 white--text', title: '姓名', subtitle: this.$store.state.username },
          { icon: 'wc', iconClass: 'blue lighten-1 white--text', title: '性别', subtitle: 'null' },
          { icon: 'person_pin', iconClass: 'green lighten-1 white--text', title: '年龄', subtitle: 'null' }
        ],
        items2: [
          { icon: 'assignment', iconClass: 'purple white--text', title: '血型', subtitle: 'null' }
        ],
        sex: '',
      }
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            api.GetInfo().then(res => {
                this.userProfile = res.data[0];
                this.items[1].subtitle = this.userProfile.human_sex;
                this.items[2].subtitle = this.userProfile.human_age;
                this.items2[0].subtitle = this.userProfile.human_xue;
                console.log(res.data[0]);
            }).catch(err => {
                console.log(err);
            })
        }
    }
  }
</script>