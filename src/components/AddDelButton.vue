<template>
    <div class="main">
        <div class="button_add">
            <button class="button_add__basket" @click="addGood" v-if="countBasket == 0">В
                корзину</button>
            <div class="button_add__basket" v-else>
                <div class="button_add_basket__count">
                    <button @click="delGood">-</button>
                    <div class="button_add_basket_count_text">{{ countBasket }}</div>
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
            type: Object,
            required: true,
        },
        selected: {
            type: Number
        }
    },
    computed: {
        countBasket() {
            if (this.selected) {
                for (let item of this.good.modification) {
                    if (item.id == this.selected) {
                        return item.count;
                    }
                }
            }
            else {
                return this.good.countBasket;
            }
        }
    },
    methods: {
        addGood() {
            this.$emit('addGood', this.good)
        },
        delGood() {
            this.$emit('delGood', this.good)
        }
    }
}
</script>

<style scoped>
.main {
    background-color: var(--tg-theme-button-color);
    border-radius: 10px;
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 5px;
}

button {
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    outline: none;
    width: 100%;
}

.button_add {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}

.button_add__basket {
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    border-radius: 10px;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}

.button_add_basket__count {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;

    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}

.button_add_basket_count_text {
    margin: 0px 20px;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}
</style>