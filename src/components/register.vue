<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="purple darken-1" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>抱枕绑定</v-toolbar-title>
      <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>view_module</v-icon>
          </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="username"
            prepend-icon="face"
            v-model="username"
            :rules="[() => !!username || '这个字段是必须的']"
            label="用户名"
            placeholder="您的用户名"
            required
          ></v-text-field>
        <v-text-field
          name="input-10-2"
          prepend-icon="lock"
          v-model="password"
          label="您的密码"
          hint="至少8个有效字符"
          min="8"
          type="password"
        ></v-text-field>
          <v-text-field
          v-model="bao_id"
          prepend-icon="donut_large"
          name="input-10-2"
          label="抱枕序列号"
        ></v-text-field>
          
          <v-text-field
          name="input-10-2"
          v-model="human_age"
          prepend-icon="multiline_chart"
          label="用户年龄"
          type="number"
        ></v-text-field>
          
        <v-text-field
          name="input-10-2"
          v-model="human_status"
          prepend-icon="adb"
          label="用户状态"
        ></v-text-field>

        <v-select
          :items="bloodCh"
          v-model="human_xue"
          label="用户血型"
          single-line
          auto
          prepend-icon="whatshot"
          hide-details
        ></v-select>

        <v-select
          :items="genderCh"
          v-model="human_sex"
          label="用户性别"
          single-line
          auto
          prepend-icon="wc"
          hide-details
        ></v-select>

        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn flat>登录</v-btn>
          <v-spacer></v-spacer>

          <v-btn color="primary" flat @click="submit()">提交</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

        </v-layout>
      </v-container>
    </v-content>
   
  </v-app>
</template>

<script>
import api from "../axios";
  export default {
    data: () => ({
        bloodCh: [
            'A',
            'B',
            'AB',
            'O'
        ],
        genderCh: [
            '男',
            '女'
        ],
      drawer: null,
      e2: 0,
      fix: true,
      username: '',
      password: '',
      bao_id: '',
      human_age: '',
      human_status: '',
      human_xue: '',
      human_sex: ''
    }),
    props: {
      source: String
    },
    methods: {
        submit() {
            api.Register({
                username: this.username,
                password: this.password,
                bao_id: this.bao_id,
                human_age: this.human_age,
                human_status: this.human_status,
                human_xue: this.human_xue,
                human_sex: this.human_sex
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }
    }
  }
</script>