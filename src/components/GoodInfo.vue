<template>
    <div class="main">
        <div class="good">
            <div class="name">{{ good.name }}</div>
            <div class="img">
                <img v-for="image in good.img" :key="image.id" :src="`${image.src}`" alt="">
            </div>
            <div class="info"> {{ good.info }}</div>
            <div class="info"> <b>Описание: </b> {{ good.detailedinfo }}</div>
            <div class="info"> <b>Характеристики: </b> {{ good.characteristic }}</div>
            <ul class="modification" v-if="good.modification">
                <li class="modification__li" :class="{ 'modification__li--active': selected == mod.id }"
                    v-for="mod in good.modification" @click="() => active(mod.id)">{{ mod.total }}
                </li>
            </ul>
            <div class="price"><b> Цена: </b>{{ good.priice }}₽</div>
        </div>
        <div class="button">
            <AddDelButton @addGood="addGood" @delGood="delGood" :isBasket="isBasket" :good="good" :selected="selected"
                :isGoodInfo="isGoodInfo" />
            <ButtonBack />
        </div>
    </div>
</template>

<script>
import ButtonBack from './ButtonBack.vue'
import AddDelButton from './AddDelButton.vue'

export default {
    components: { AddDelButton, ButtonBack },
    data() {
        return {
            selected: null,
            isGoodInfo: true
        }
    },
    methods: {
        addGood() {
            const goodInBasket = this.$store.state.basket.find(item => item.id == this.good.id);
            if (this.good.modification) {
                if (this.selected) {
                    if (goodInBasket) {
                        for (let item of goodInBasket.modification) {
                            if (item.id == this.selected) {
                                item.count += 1;
                                break;
                            }
                        }
                    }
                    else {
                        for (let item of this.good.modification) {
                            if (item.id == this.selected) {
                                item.count += 1;
                                break;
                            }
                        }
                        this.$store.state.basket.push(this.good);
                    }
                    this.pay = true
                }
            }
            else {
                if (goodInBasket) {
                    goodInBasket.countBasket += 1;
                }
                else {
                    this.good.countBasket += 1
                    this.$store.state.basket.push(this.good)
                }
                this.pay = true
            }
        },
        delGood() {
            const goodInBasket = this.$store.state.basket.find(item => item.id == this.good.id);
            if (this.good.modification) {
                let sum = 0;
                for (let item of goodInBasket.modification) {
                    if (item.id == this.selected) {
                        item.count -= 1;
                    }
                    sum += item.count
                }
                if (sum == 0) this.$store.state.basket = this.$store.state.basket.filter(item => item.id !== this.good.id)
                if (!this.$store.state.basket[0]) this.pay = false
            }
            else {
                this.good.countBasket -= 1
                if (this.good.countBasket == 0) this.$store.state.basket = this.$store.state.basket.filter(item => item.id !== this.good.id)
                if (!this.$store.state.basket[0]) this.pay = false
            }
        },
        backPurchese() {
            this.$router.replace({ name: 'purchese' })
        },
        active(id) {
            this.selected = id;
        }
    },
    computed: {
        good() {
            return this.$store.getters.getProduct(this.$route.params.id)
        }
    },
    /*mounted(){
        this.good = this.$store.state.goodForInfo
    }*/
}
</script>

<style scoped>
.main {
    flex-wrap: wrap;
    min-width: 100%;
    max-width: 100%;
}

.good {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 100%;
}

.name {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    color: var(--tg-theme-text-color);
}

.img {
    width: 100%;
    margin-bottom: 10px;
}

.info {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    color: var(--tg-theme-text-color);
}

.price {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    font-weight: bold;
    color: var(--tg-theme-text-color);
}

img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

.button {
    width: 100%;
    position: sticky;
    bottom: 0px;
    background: var((--tg-theme-bg-color));
    color: var(--tg-theme-button-text-color);
    border-radius: 10px;
}

.button_back {
    width: 100%;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}

button {
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    border-radius: 10px;
}

.modification {
    width: 100%;
    height: 100%;
    color: var(--tg-theme-text-color);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
}

.modification__li {
    min-width: 30px;
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;

    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}

.modification__li:hover {
    border-radius: 10px;
}

.modification__li--active {
    background-color: gray;
}
</style>