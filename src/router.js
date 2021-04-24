import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import minesweeper from '@/views/minesweeper'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/minesweeper',
            component: minesweeper
        }
    ]
})