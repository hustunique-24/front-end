import * as types from './types'

const mutations = {
    [types.LOGIN]: (state, data) => {
        window.localStorage.setItem('token', data.token);

        state.token = data.token;

    },
    [types.LOGOUT]: (state) => {
        window.localStorage.removeItem('token');

        state.token = null;

    }
}

export default mutations;