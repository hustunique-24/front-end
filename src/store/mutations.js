import * as types from './types'

const mutations = {
    [types.LOGIN]: (state, data) => {
        window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('ZJUid', data.ZJUid);
        window.localStorage.setItem('association', data.association);
        state.token = data.token;
        state.ZJUid = data.ZJUid;
        state.association = data.association;
    },
    [types.LOGOUT]: (state) => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('ZJUid');
        window.localStorage.removeItem('association');
        state.token = null;
        state.ZJUid = null;
        state.association = null;
    }
}

export default mutations;