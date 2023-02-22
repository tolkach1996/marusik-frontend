<template>
    <div class="main">
        <div class="good">
            <router-link :to="'/product/' + good.id">
                <div class="name">{{ good.name }}</div>
                <div class="img"><img :src="good.img[0].src" alt=""></div>
                <div class="info">{{ good.info }}</div>
            </router-link>
            <ul class="modification" v-if="good.modification">
                <li class="modification__li" :class="{ 'modification__li--active': selected == mod.id }"
                    v-for="mod in good.modification" @click="() => active(mod.id)">{{ mod.total }}
                </li>
            </ul>
            <div class="price">{{ good.priice }}₽</div>
        </div>
        <AddDelButton @addGood="addGood" @delGood="delGood" :isBasket="isBasket" :good="good" :selected="selected" />
    </div>
</template>

<script>
import GoodInfo from './GoodInfo.vue'
import AddDelButton from './AddDelButton.vue'

export default {
    components: { AddDelButton, GoodInfo },
    data() {
        return {
            tg: window.Telegram.WebApp,
            selected: null
        }
    },
    props: {
        good: {
            type: Array,
            required: true,
        },
        isBasket: {
            type: Boolean,
            required: true,
        }
    },
    methods: {
        onClose() {
            this.tg.close()
        },
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
            this.$emit('delGood', this.good)
        },
        active(id) {
            this.selected = id;
        }
    }
}

</script>

<style scoped>
.main {
    width: 48%;
}

.good {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--tg-theme-button-color);
    border-radius: 10px;
    max-height: 600px;
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
    height: 180px;
    margin-bottom: 10px;
}

.info {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    color: var(--tg-theme-text-color);
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
</style>

<!--<style lang="scss" scoped>
<style scoped>
.main{
    width: 100%;
    display: flex;
    flex-direction: row;
}

.purchase{
    max-width: 40%;
    min-height: 70%;
    margin: 5px;
    border: 1px solid var(--tg-theme-button-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 1 1 auto;
    cursor: pointer;
    border: 1px solid black;
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

.img{
    max-height: 50%;
}
img{
    max-width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>-->