<template>
    <div class="main">
        <div class="good">
            <div class="name" >{{ good.name }}</div>
            <div class="img" ><img :src="good.img" alt=""></div>
            <div class="info" >{{ good.info }}</div>
            <div class="price" >{{ good.priice }}₽</div>
            <button @click="addGood">Добавить в корзину</button>
            <button @click="delGood">Убрать из корзины</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tg: window.Telegram.WebApp
        }
    },
    props: {
        good: {
            type: Array,
            required: true,
        },
    },
    methods: {
        onClose(){
            this.tg.close()
        },
        addGood(){
            this.$emit('addGood', this.good)
        }
    }
}

</script>

<style scoped>
.good{
    display: flex;
    flex-direction: column;
    border: 1px solid var(--tg-theme-button-color);
    border-radius: 10px;
    max-height: 600px;
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
    height: 400px;
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