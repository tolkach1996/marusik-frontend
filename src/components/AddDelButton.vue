<template>
    <div class="main">
        <div  class="button_add">
            <button class="button_add__basket" @click="addGood"  v-if="this.good.countBasket == 0">Добавить в корзину</button>
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
.main{
    background-color: #f9f9f9;
    border-radius: 10px;
    min-width: 100%;
    max-width: 100%;
}
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
    border-radius: 10px;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}
.button_add__basket{
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    border-radius: 10px;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}
.button_add_basket__count{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;

        background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}
.button_add_basket_count_text{
    margin: 0px 20px;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}
</style>