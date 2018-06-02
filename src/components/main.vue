<template>

    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="/static/images/sunshine.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">今日状态: 优</h3>
            <div>准备好和您的抱枕开启新的一天了吗？</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="success" @click="gotoExplore()">探索</v-btn>
            
          <v-btn flat color="orange">抱枕</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
export default {
    methods: {
        gotoExplore() {
            this.$router.push({name: 'explore'});
        }
    }
}
</script>
