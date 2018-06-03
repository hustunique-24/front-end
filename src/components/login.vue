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
            <v-icon>assignment_ind</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>注册</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>fingerprint</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>登录</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="purple darken-1" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>登录</v-toolbar-title>
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

        
        </v-card-text>
        <v-card-actions>
          <!-- <v-btn flat>取消</v-btn>
          <v-spacer></v-spacer> -->

          <v-btn color="green"  block dark @click="submit()">登录</v-btn>
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
      drawer: null,
      e2: 0,
      fix: true,
      username: '',
      password: '',
    }),
    props: {
      source: String
    },
    methods: {
        submit() {
            api.Login({
                username: this.username,
                password: this.password,
            }).then(res => {
                console.log(res.data.token);
                this.$store.dispatch('UserLogin', {
                    token: res.data.token,
                    username: this.username
                });
                this.$router.push({name: 'main'});
            }).catch(err => {
                console.log(err);
            })
        }
    }
  }
</script>