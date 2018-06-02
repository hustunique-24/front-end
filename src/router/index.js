import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/components/layout'


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'layout',
            component: layout,
            // children: [
            //     {
            //         path: '/',
            //         name: 'home',
            //         component: home,
            //     }
            // ]
        }
    ]
})

export default router;