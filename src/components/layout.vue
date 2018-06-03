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
    <v-toolbar color="green" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Linkeart Pillow</v-toolbar-title>

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
          <router-view></router-view>
        </v-layout>
      </v-container>
       <v-bottom-nav
       fixed
       app
      :value="true"
      :active.sync="e2"
      :color="color"

      shift

    >
      <v-btn v-for="item in bottomNav" :key="item.id" dark>
        <span>{{item.text}}</span>
        <v-icon>{{item.icon}}</v-icon>
      </v-btn>
    </v-bottom-nav>
    </v-content>
   
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      e2: 0,
      fix: true,
      bottomNav: [
          {
              text: '探索',
              icon: 'explore',
              router: 'main',
          },
          {
              text: '消息',
              icon: 'chat',
              router: 'message'
          },
          {
              text: '抱枕',
              icon: 'cloud',
              router: 'pillow',
          },
          {
              text: '我',
              icon: 'account_box',
              router: 'me'
          }
      ]
    }),
    props: {
      source: String
    },
    computed: {
      color () {
        switch (this.e2) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
        }
      }
    },
    watch: {
        e2: function (val) {
            this.$router.push({name: this.bottomNav[val].router});
        }
    }

  }
</script>