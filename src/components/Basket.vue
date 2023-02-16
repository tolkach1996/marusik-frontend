<template>
    <div class="basket">
        <Goods
            v-for="good in goods"
            :good="good"
            :key="good.id"
            @delGood="delGoods"
            @showGoodInfo="showGoodInfo"
            :isBasket="isBasket"
        />
    <button class="button_pay">Оформить заказ</button>
    </div>
</template>

<script>
import Goods from './Goods.vue'

export default {
    components:{Goods},
    data(){
        return{
            goods: [],
            isBasket: true,
        }
    },
    methods: {
        delGoods(good){
            good.countBasket = 0
            this.$store.state.basket = this.$store.state.basket.filter(item => item.id !== good.id)
            this.goods = this.$store.state.basket
            if(this.goods.length == 0){
                this.$router.replace({name: 'purchese'})
            }
        },
    },
    mounted(){
        for(let good of this.$store.state.basket){
            this.goods.push(good)
        }
    }
}
</script>

<style scoped>
.basket{
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