<template>
    <div class="main">
        <div class="good">
            <router-link :to="'/product/'+good.id">
                <div class="name" >{{ good.name }}</div>
                <div class="img" ><img :src="good.img[0].src" alt=""></div>
                <div class="info" >{{ good.info }}</div>
            </router-link>
            <div class="modification" v-if="good.modification">
                <select v-model="selected">
                    <option disabled value="">Выберите один из вариантов</option>
                    <option v-for="modification in good.modification" :key="modification.id"> {{ modification.total }}</option>
                </select>
            </div>
            <div class="price" >{{ good.priice }}₽</div>
        </div>
        <AddDelButton
        @addGood="addGood"
        @delGood="delGood"
        :isBasket="isBasket"
        :good="good"
        />
    </div>
</template>

<script>
import GoodInfo from './GoodInfo.vue'
import AddDelButton from './AddDelButton.vue'

export default {
    components:{AddDelButton,GoodInfo},
    data(){
        return {
            tg: window.Telegram.WebApp,
            selected: ''
        }
    },
    props: {
        good: {
            type: Array,
            required: true,
        },
        isBasket:{
            type: Boolean,
            required: true,
        },

    },
    methods: {
        onClose(){
            this.tg.close()
        },
        addGood(){
            this.$emit('addGood', this.good, this.selected)
        },
        delGood(){
            this.$emit('delGood', this.good)
        }
    }
}

</script>

<style scoped>
.main{
    width: 48%;
}
.good{
    display: flex;
    flex-direction: column;
    border: 1px solid var(--tg-theme-button-color);
    border-radius: 10px;
    max-height: 600px;
    width: 100%;
    cursor: pointer;
}
.name{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    color: var(--tg-theme-text-color);
}
.img{
    width: 100%;
    height: 180px;
    margin-bottom: 10px;
}
.info{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    color: var(--tg-theme-text-color);
}
.modification{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    color: var(--tg-theme-text-color);
}
.price{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    font-weight: bold;
    color: var(--tg-theme-text-color);
}
img{
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