<template>
    <div class="basket">
        <Goods
            v-for="good in goods"
            :good="good"
            :key="good.id"
            @addGood="addGoods"
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
        }
    },
    mounted(){
        for(let good of this.$store.state.basket){
            this.goods.push(good)
        }
        console.log(this.goods)
    }
}
</script>

<style scoped>
.basket{
    display: flex;
    flex-direction: row;
    text-align: center;
    max-width: 850px;
    flex-wrap: wrap;
}
.button_pay{
    position: sticky;
    bottom: 0px;
    width: 100%;
}
</style>