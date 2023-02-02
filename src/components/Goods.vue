<template>
    <div class="main">
        <div class="purchase" v-for="good in goods" v-bind:key="good.id">
            <div class="name" >{{ good.name }}</div>
            <div class="img" ><img :src="good.img" alt=""></div>
            <div class="info" >{{ good.info }}</div>
            <div class="price" >{{ good.priice }}₽</div>
            <button>Добавить в корзину</button>
        </div>
    </div>
</template>

<script>
import {goodsData} from "../data/index"

export default {
components: {},
    data(){
        return {
            goods: goodsData.filter(item => item.purchase == this.$route.params.id)
        }
    }
}
</script>

<style>
.main{
max-width: 30%;
}
.purchase{
    width: 500px;
    margin: 0px 10px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    text-align: center;

}
button{
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    outline: none;
}
</style>