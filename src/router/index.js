import { createRouter, createWebHistory } from 'vue-router'
import Purchese from '../components/Purchese.vue'
import Basket from '../components/Basket.vue'
import GoodInfo from '../components/GoodInfo.vue'

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
    },
    {
        path: '/info',
        name: 'info',
        component: GoodInfo
    },
    {
        path: '/product/:id',
        name: 'product',
        component: GoodInfo
    }
    /*{
        path: '/:id/info',
        name: 'GoodInfo',
        component: GoodInfo
    }*/
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
