import axios from 'axios'
import router from './router/index'
import store from './store/index'
import * as types from './store/types'

const instance = axios.create();

axios.interceptors.request.use = instance.interceptors.request.use;

// request
instance.interceptors.request.use(config => {
    if (store.state.token) {
        config.headers.Authorization = `${store.state.token}`;
    }
    return config;
}, err => {
    return Promise.reject(err);
});

// response
instance.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                store.commit(types.LOGOUT);
                break;
            default:
                break;
        }
    }
    return Promise.reject(error.response.data);
});

export default {
    Bind(data) {
        return instance.post('/api/login', data);
    },
}