<template>
    <div class="main">
        <div class="good">
            <div class="name" >{{ good.name }}</div>
            <div class="img" >
            <img
                v-for="image in good.img"
                :key="image.id"
                :src="`${image.src}`"
                alt="">
            </div>
            <div class="info" >  {{ good.info }}</div>
            <div class="info" > <b>Описание: </b> {{ good.detailedinfo }}</div>
            <div class="info" > <b>Характеристики: </b> {{ good.characteristic }}</div>
            <div class="price" ><b> Цена: </b>{{ good.priice }}₽</div>
        </div>
        <button @click="backPurchese"> Назад </button>
        <!--<AddDelButton
        @addGood="addGood"
        @delGood="delGood"
        :isBasket="isBasket"
        :good="good"
        />-->
    </div>
</template>

<script>
import AddDelButton from './AddDelButton.vue'

export default {
    components: {AddDelButton},
    /*data(){
        return {
            good: {}
        }
    },*/
    methods: {
        addGood(){
            this.$emit('addGood', this.good)
        },
        delGood(){
            this.$emit('delGood', this.good)
        },
        backPurchese(){
            this.$router.replace({name: 'purchese'})
        }
    },
    computed:{
        good(){
            return this.$store.getters.getProduct(this.$route.params.id)
        }
    },
    /*mounted(){
        this.good = this.$store.state.goodForInfo
    }*/
}
</script>

<style scoped>
.main{
    flex-wrap: wrap;
}
.good{
    display: flex;
    flex-direction: column;
    border: 1px solid var(--tg-theme-button-color);
    border-radius: 10px;
    max-width: 400px;
    padding: 10px;
}
.name{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
}
.img{
    width: 400px;
    margin-bottom: 10px;
}
.info{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
}
.price{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    font-weight: bold;
}
img{
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}
button{
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    outline: none;
    width: 100%;

    position: sticky;
    bottom: 0px;
    width: 100%;
}
</style>