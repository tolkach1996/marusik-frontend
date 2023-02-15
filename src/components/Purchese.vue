<template>
    <div class="purchase">
        <Goods
            v-for="good in goods"
            :good="good"
            :key="good.id"
            @addGood="addGoods"
            @showGoodInfo="showGoodInfo"
        />
    </div>
    <router-link to="/basket">
        <button class="button_pay" v-if="pay">Корзина</button>
    </router-link>
</template>

<script>
import Goods from './Goods.vue';
import { goodsData } from '../data/index';

export default {
    components:{Goods},
    data(){
        return {
            goods : goodsData,
            pay: false,
            tg: window.Telegram.WebApp,
        }
    },
    methods: {
        addGoods(good){
            this.$store.state.basket.push(good)
            this.pay = true
        }
    },
    //mounted(){
    //    console.log(this.basket)
    //}
}
</script>

<style>
.purchase{
    display: flex;
    flex-direction: row;
    max-width: 850px;
    flex-wrap: wrap;
}
.button_pay{
    position: sticky;
    bottom: 0px;
    width: 100%;
}
</style>