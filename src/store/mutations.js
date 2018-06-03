import * as types from './types'

const mutations = {
    [types.LOGIN]: (state, data) => {
        window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('username', data.username);
        state.token = data.token;
        state.username = data.username;
    },
    [types.LOGOUT]: (state) => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('username');
        state.token = null;
        state.username = null;
    }
}

export default mutations;