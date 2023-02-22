<template>
    <div class="main">
        <div class="basket">
            <GoodsBasket v-for="good in goods" :good="good" :key="good.id" @addGood="addGoods" @delGood="delGoods"
                @showGoodInfo="showGoodInfo" />
        </div>
        <div class="button">
            <ButtonBack />
            <button class="button_pay" @click="onClose">Оформить заказ</button>
        </div>
    </div>
</template>

<script>
import ButtonBack from './ButtonBack.vue'
import GoodsBasket from './GoodsBasket.vue'
import Goods from './Goods.vue'

export default {
    components: { Goods, GoodsBasket, ButtonBack },
    data() {
        return {
            goods: [],
            isBasket: true,
        }
    },
    methods: {
        onClose() {
            this.tg.close()
        },
        addGoods(good) {
            if (this.$store.state.basket.find(item => item.id == good.id)) {
                for (let item of this.$store.state.basket) {
                    if (item.id == good.id) {
                        item.countBasket += 1
                    }
                }
            }
            else {
                good.countBasket += 1
                this.$store.state.basket.push(good)
            }
            this.pay = true
        },
        delGoods(good) {
            good.countBasket -= 1
            if (good.countBasket == 0) this.$store.state.basket = this.$store.state.basket.filter(item => item.id !== good.id)
            this.goods = [];
            for (let good of this.$store.state.basket) {
                this.goods.push(good)
            }
            if (!this.$store.state.basket[0]) this.pay = false
            if (this.goods.length == 0) {
                this.$router.replace({ name: 'purchese' })
            }
        },
    },
    mounted() {
        for (let good of this.$store.state.basket) {
            this.goods.push(good)
        }
    }
}
</script>

<style scoped>
.main {
    flex-wrap: wrap;
    min-height: 100%;
}

.basket {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: var(--tg-theme-bg-color);
    color: var(--tg-theme-text-color);
}

.button {
    width: 100%;
    position: sticky;
    left: 0px;
    bottom: 0px;
    background: var((--tg-theme-bg-color));
    color: var(--tg-theme-button-text-color);
}

.button_back {
    width: 100%;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    margin-bottom: 5px;
}

.button_pay {
    width: 100%;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    margin-top: 5px;
}
</style>