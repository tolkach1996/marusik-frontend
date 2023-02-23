<template>
    <div class="main" v-if="mod.count > 0">
        <router-link :to="'/product/' + good.id">
            <div class="main_content">
                <div class="img">
                    <img :src="good.img[0].src" alt="">
                </div>
                <div class="content">
                    <div class="content_price">{{ good.priice }}₽</div>
                    <div class="content_name"> <b> {{ good.name }}</b></div>
                    <div class="content_name">{{ good.info }}</div>
                    <div class="content_name">Размер: {{ mod.total }}</div>
                </div>
            </div>
        </router-link>
        <AddDelButton @addGood="addGood" @delGood="delGood" :good="good" :selected="mod.id" />
    </div>
</template>

<script>
import AddDelButton from './AddDelButton.vue'
import GoodInfo from './GoodInfo.vue'

export default {
    components: { AddDelButton, GoodInfo },
    props: {
        mod: {
            type: Array,
        },
        good: {
            type: Object,
            required: true,
        },
    },
    methods: {
        addGood() {
            const goodInBasket = this.$store.state.basket.find(item => item.id == this.good.id);
            if (this.good.modification) {
                if (goodInBasket) {
                    for (let item of goodInBasket.modification) {
                        if (item.id == this.mod.id) {
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
            }
            else {
                if (goodInBasket) {
                    goodInBasket.countBasket += 1;
                }
                else {
                    this.good.countBasket += 1
                    this.$store.state.basket.push(this.good)
                }
            }
        },
        delGood() {
            const goodInBasket = this.$store.state.basket.find(item => item.id == this.good.id);
            if (this.good.modification) {
                let sum = 0;
                for (let item of goodInBasket.modification) {
                    if (item.id == this.mod.id) {
                        item.count -= 1;
                    }
                    sum += item.count
                }
                if (sum == 0) this.$store.state.basket = this.$store.state.basket.filter(item => item.id !== this.good.id)
                if (!this.$store.state.basket[0]) {
                    this.pay = false
                    this.$router.push({ name: 'purchese' })
                }
            }
            else {
                this.good.countBasket -= 1
                if (this.good.countBasket == 0) this.$store.state.basket = this.$store.state.basket.filter(item => item.id !== this.good.id)
                if (!this.$store.state.basket[0]) {
                    this.pay = false
                    this.$router.push({ name: 'purchese' })
                }
            }
        }
    },

    /*mounted() {
        for (let good of this.$store.state.basket) {
            this.goods.push(good)
        }
    }*/
}
</script>

<style scoped>
.main_content {
    width: 100%;
    height: 100%;
    display: flex;

}

.content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    color: var(--tg-theme-text-color);
}

.img {
    min-width: 120px;
    min-height: 100%;
    max-width: 120px;
    max-height: 100%;
    margin-right: 20px;
}

img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}
</style>