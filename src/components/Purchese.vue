<template>
    <div class="purchase">
        <Goods v-for="good in goods" :good="good" :key="good.id" @delGood="delGood" />
    </div>
    <router-link to="/basket">
        <button class="button_pay" v-if="ispay">Корзина</button>
    </router-link>
</template>

<script>
import Goods from './Goods.vue';
import { goodsData } from '../data/index';

export default {
    components: { Goods },
    data() {
        return {
            goods: goodsData,
            tg: window.Telegram.WebApp
        }
    },
    methods: {
        delGood(good) {
            good.countBasket -= 1
            if (good.countBasket == 0) this.$store.state.basket = this.$store.state.basket.filter(item => item.id !== good.id)
            if (!this.$store.state.basket[0]) this.pay = false
        }
    },
    computed: {
        ispay() {
            return this.$store.state.basket.length > 0;
        }
    }
}
</script>

<style scoped>
.purchase {
    min-width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.button_pay {
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}
</style>