import { createRouter, createWebHistory } from 'vue-router'
import Purchese from '../components/Purchese.vue'
import Basket from '../components/Basket.vue'

const routes = [
    {
        path: '/',
        name: 'purchese',
        component: Purchese
    },
    {
        path: '/basket',
        name: 'basket',
        component: Basket
    }
    /*{
        path: '/:id/info',
        name: 'purchese',
        component: info
    }*/
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
