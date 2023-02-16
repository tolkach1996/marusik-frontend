<template>
    <div class="main">
        <div class="button_del" v-if="isBasket">
        <button @click="delGood" >Убрать из корзины</button>
        </div>
        <div  v-else class="button_add">
            <button class="" @click="addGood"  v-if="this.good.countBasket == 0">Добавить в корзину</button>
            <div class="button_add__basket" v-else>
                <div class="button_add_basket__count">
                    <button @click="delGood">-</button>
                    <div class="button_add_basket_count_text">{{ this.good.countBasket }}</div>
                    <button @click="addGood">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        good: {
            type: Array,
            required: true,
        },
        isBasket:{
            type: Boolean,
            required: true,
        }
    },
    methods: {
        addGood(){
            this.$emit('addGood', this.good)
        },
        delGood(){
            this.$emit('delGood', this.good)
        }
    }
}
</script>

<style scoped>
button{
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    outline: none;
    width: 100%;
}
.button_add{

    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
}
.button_add__basket{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.button_add_basket__count{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
}
.button_add_basket_count_text{
    margin: 0px 20px;
}
</style>