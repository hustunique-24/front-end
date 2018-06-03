import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'


import layout from '@/components/layout'
import main from '@/components/main'
import explore from '@/components/explore'
import pillow from '@/components/pillow'
import message from '@/components/message'
import me from '@/components/me'

import register from '@/components/register'
import login from '@/components/login'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            name: 'layout',
            component: layout,
            meta: {
              requireAuth: true,
            },
            children: [
                {
                    path: '/main',
                    name: 'main',
                    component: main
                },
                {
                    path: '/message',
                    name: 'message',
                    component: message
                },
                {
                    path: '/explore',
                    name: 'explore',
                    component: explore
                },
                {
                    path: '/me',
                    name: 'me',
                    component: me
                }
            ]
        },
        {
            path: '/pillow',
            name: 'pillow',
            component: pillow,
            meta: {
              requireAuth: true,
            },
        },
        {
            path: '/register',
            name: 'register',
            component: register,
            meta: {
              requireAuth: false,
            },
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            meta: {
            requireAuth: false,
            },
        }
    ]
})

router.beforeEach((to, from, next) => {
    // console.log(to.meta);
    if (to.matched[0].meta.requireAuth) {
        if (store.state.token) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next();
    }
});

export default router;