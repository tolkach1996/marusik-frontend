<template>
    <div class="purchase">
        <Goods
            v-for="good in goods"
            :good="good"
            :key="good.id"
            @addGood="addGoods"
            @delGood="delGood"
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
            if(this.$store.state.basket.find(item => item.id == good.id)){
                for (let item of this.$store.state.basket){
                    if(item.id == good.id){
                        item.countBasket +=1
                    }
                }
            }
            else{
                good.countBasket += 1
                this.$store.state.basket.push(good)
            }
            this.pay = true
        },
        delGood(good){
            good.countBasket -= 1
            if(good.countBasket == 0) this.$store.state.basket = this.$store.state.basket.filter(item => item.id !== good.id)
            if(!this.$store.state.basket[0]) this.pay = false
        }
    },
    mounted(){
        if(!this.$store.state.basket[0]) this.pay = false
        else this.pay = true
    }
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