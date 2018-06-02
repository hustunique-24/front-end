import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import main from '@/components/main'
import explore from '@/components/explore'
import pillow from '@/components/pillow'
import message from '@/components/message'
import me from '@/components/me'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            name: 'layout',
            component: layout,
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
            component: pillow
        }
    ]
})
