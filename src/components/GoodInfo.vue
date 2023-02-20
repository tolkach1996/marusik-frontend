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
        <div class="button">
                <AddDelButton
                @addGood="addGood"
                @delGood="delGood"
                :good="good"
                />
            <ButtonBack/>
        </div>
    </div>
</template>

<script>
import ButtonBack from './ButtonBack.vue'
import AddDelButton from './AddDelButton.vue'

export default {
    components: {AddDelButton,ButtonBack},
    methods: {
        addGood(){
            if(this.$store.state.basket.find(item => item.id == this.good.id)){
                for (let item of this.$store.state.basket){
                    if(item.id == this.good.id){
                        item.countBasket +=1
                    }
                }
            }
            else{
                this.good.countBasket += 1
                this.$store.state.basket.push(this.good)
            }
            this.pay = true
        },
        delGood(){
            this.good.countBasket -= 1
            if(this.good.countBasket == 0) this.$store.state.basket = this.$store.state.basket.filter(item => item.id !== this.good.id)
            if(!this.$store.state.basket[0]) this.pay = false
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
    min-width: 100%;
    max-width: 100%;
}
.good{
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 100%;
}
.name{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    color: var(--tg-theme-text-color);
}
.img{
    width: 100%;
    margin-bottom: 10px;
}
.info{
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
.button{
    width: 100%;
    position: sticky;
    bottom: 0px;
    background: var((--tg-theme-bg-color));
    color: var(--tg-theme-button-text-color);
    border-radius: 10px;
}
.button_back{
    width: 100%;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}
button{
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    border-radius: 10px;
}
</style>