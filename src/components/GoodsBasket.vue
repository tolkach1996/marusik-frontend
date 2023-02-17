<template>
    <div class="main">
        <router-link :to="'/product/'+good.id">
        <div class="main_content">
            <div class="img">
                <img :src="good.img[0].src" alt="">
            </div>
            <div class="content">
                <div class="content_price">{{ good.priice }}₽</div>
                <div class="content_name"> <b> {{ good.name }}</b></div>
                <div class="content_name">{{ good.info }}</div>
            </div>
        </div>
        </router-link>
        <AddDelButton
        @addGood="addGood"
        @delGood="delGood"
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
        }
    },
    methods: {
        addGood(){
            this.$emit('addGood', this.good)
        },
        delGood(){
            this.$emit('delGood', this.good)
        },
        goodInfo(){
            this.$store.state.goodForInfo = this.good
            this.$router.replace({name: 'info'})
        }
    }
}

</script>

<style scoped>
.main{
    width: 375px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
}
.main_content{
    width: 100%;
    height: 100%;
    display: flex;

}
.content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    color: var(--tg-theme-text-color);
}
.img{
    min-width: 120px;
    min-height: 100%;
    max-width: 120px;
    max-height: 100%;
    margin-right: 20px;
}
img{
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

</style>

<!--

.good{
    display: flex;
    flex-direction: column;
    border: 1px solid var(--tg-theme-button-color);
    border-radius: 10px;
    max-height: 600px;
    max-width: 400px;
    padding: 10px;
    cursor: pointer;
}
.name{
    width: 100%;
    height: 100%;
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
    width: 100px;
    height: 100px;
    object-fit: cover;
}
img{
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}















<style lang="scss" scoped>
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