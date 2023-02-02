import { createRouter, createWebHistory } from 'vue-router'
import Goods from '../components/Goods.vue'

const routes = [
    {
        path: '/:id',
        name: 'purchese',
        component: Goods
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
