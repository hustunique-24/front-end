import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
    token: window.localStorage.getItem('token'),
    username: window.localStorage.getItem('username'),
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})