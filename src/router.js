import Vue from 'vue'
import Router from 'vue-router'
import minesweeper from '@/views/minesweeper'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/minesweeper',
            component: minesweeper
        }
    ]
})