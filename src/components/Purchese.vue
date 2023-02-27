<template>
    <div class="purchase">
        {{ error }}
        <div class="purchase__content">
            <Goods v-for="good in goods" :good="good" :key="good.id" @delGood="delGood" />
        </div>
    </div>
    <div class="block__fixed">
        <button class="button_pay" @click="showMainButton">Корзина</button>
    </div>
    
</template>

<script>
import Goods from './Goods.vue';
import { goodsData } from '../data/index';
import { mapActions, mapState } from 'vuex';

export default {
    components: { Goods },
    data() {
        return {
            goods: goodsData,
            error: '',
        }
    },
    methods: {
        ...mapActions(['onToggle']),
        delGood(good) {
            good.countBasket -= 1
            if (good.countBasket == 0) this.$store.state.basket = this.$store.state.basket.filter(item => item.id !== good.id)
            if (!this.$store.state.basket[0]) this.pay = false
        },
        showMainButton() {
            try {
                this.onToggle();
            } catch(e) {
                console.error(e);
                this.error = e;
            }
        }
    },
    computed: {
        ispay() {
            return this.$store.state.basket.length > 0;
        },
        ...mapState(['tg'])
    },
    mounted() {
        this.tg.expand();
        this.tg.enableClosingConfirmation();
    }
}
</script>

<style scoped>
.purchase {
    min-width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.purchase__content {
    width: 100%;
    padding: 0px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.block__fixed {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    padding-top: 10px;
    background-color: #fff;
    z-index: 2;
}

.button_pay {
    width: 100%;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}
</style>