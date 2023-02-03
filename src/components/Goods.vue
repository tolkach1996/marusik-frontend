<template>
    <div class="main">
            <div class="purchase" v-for="good in goods" v-bind:key="good.id" >
                <div class="name" >{{ good.name }}</div>
                <div class="img" ><img :src="good.img" alt=""></div>
                <div class="info" >{{ good.info }}</div>
                <div class="price" >{{ good.priice }}₽</div>
                <button @click="showPay">Добавить в корзину</button>
            </div>
        <button v-if="pay" class="button_pay" @click="onClose">Посмотреть заказ</button>
    </div>
</template>

<script>
import {goodsData} from "../data/index"

export default {
    components: {},
        data(){
            return {
                goods: goodsData.filter(item => item.purchase == this.$route.params.id),
                pay: false,
                tg: window.Telegram.WebApp
            }
        },
    methods: {
        showPay(){
            this.pay = true;
        },
        onClose(){
            this.tg.close()
        }
    }
}
</script>

<style>
.main{
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: row;
}

.purchase{
    min-height: 100%;
    margin: 5px;
    border: 1px solid var(--tg-theme-button-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 1 1 auto;
    cursor: pointer;
}
.purchase div{
    margin-top: 15px;
    text-align: center;
    align-items: center;
}
.button_pay{
    position: sticky;
    bottom: 0px;
}
.price{
    font-weight: bold;
    margin-bottom: 15px;
}
button{
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    outline: none;
    width: 100%;
}
img{
    width: 100%;
}
</style>