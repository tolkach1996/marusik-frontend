import { createStore } from 'vuex';
import { goodsData } from '../data/index'

export default createStore({
    state: {
        basket: [],
        goodForInfo: {},
        goods: goodsData
    },
    getters: {
        getProduct: (state) => (id) => {
            return state.goods.find(item => item.id == id)
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})