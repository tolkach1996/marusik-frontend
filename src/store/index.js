import { createStore } from 'vuex';
import { goodsData } from '../data/index'

export default createStore({
    state: {
        basket: [],
        goodForInfo: {},
        goods: goodsData,
        tg: window.Telegram.WebApp,
    },
    getters: {
        getProduct: (state) => (id) => {
            return state.goods.find(item => item.id == id)
        }
    },
    mutations: {},
    actions: {
        onToggle({ state }) {
            if(state.tg.MainButton.isVisible) {
                state.tg.MainButton.hide();
            } else {
                state.tg.MainButton.show();
            }
        }
    },
    modules: {}
})