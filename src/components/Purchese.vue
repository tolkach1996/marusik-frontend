<template>
    <div class="purchase">
        <Goods
            v-for="good in goods"
            :good="good"
            :key="good.id"
            @addGood="addGoods"
            @delGood="delGood"
        />
    </div>
    <router-link to="/basket">
        <button class="button_pay" v-if="pay">Корзина</button>
    </router-link>
</template>

<script>
import Goods from './Goods.vue';
import { goodsData } from '../data/index';

export default {
    components:{Goods},
    data(){
        return {
            goods : goodsData,
            pay: false,
            tg: window.Telegram.WebApp
        }
    },
    methods: {
        addGoods(good,selected){
            /*if(this.$store.state.basket.find(item => item.id == good.id)){
                for (let item of this.$store.state.basket){
                    if(item.id == good.id){
                        item.countBasket +=1
                    }
                }
            }
            else{
                good.countBasket += 1
                this.$store.state.basket.push(good)
            }
            this.pay = true*/

                    //console.log(good.modification)
            if(good.modification){
                if(selected != ''){
                    if(this.$store.state.basket.find(item => item.id == good.id)){
                        for(let item of this.$store.state.basket){
                            if(good.id == item.id){
                                for( let i of item.modification){
                                    if(i.total == selected){
                                        i.count +=1
                                    }
                                }
                            }
                        }
                    }
                    else{
                        for(let item of good.modification)
                            {
                                if(item.total == selected){
                                    item.count +=1
                                }
                            }
                        this.$store.state.basket.push(good)
                        }
                    }

                        /*console.log(item)
                                if(item.total == selected){
                                    item.count +=1
                                }
                            }
                    this.$store.state.basket.push(good)*/



                    /*if(this.$store.state.basket.find(item => item.id == good.id)){
                        for(let item of this.$store.state.basket){
                            console.log(item)
                        }*/



                        /*if(this.$store.state.basket.find(item => item.modification.total == item.modification)){
                            for (let i of this.$store.state.basket){
                                if(i.id == good.id){
                                    if(i.modification == good.modification){
                                        i.countBasket +=1
                                    }
                                }
                            }*/
                        /*if(item.modification == good.modification){
                            for (let item of this.$store.state.basket){
                                if(item.id == good.id){
                                    item.countBasket +=1
                                }
                            }
                        }
                        }*/


                    /*else{
                        for(let item of good.modification)
                            {
                                if(item.total == selected){
                                    item.count +=1
                                }
                            }
                        this.$store.state.basket.push(good)
                    }*/
                    this.pay = true
                console.log(this.$store.state.basket)
            }


            //}
            else{
                if(this.$store.state.basket.find(item => item.id == good.id)){
                for (let item of this.$store.state.basket){
                    if(item.id == good.id){
                        item.countBasket +=1
                    }
                }
                }
                else{
                    good.countBasket += 1
                    this.$store.state.basket.push(good)
                }
                this.pay = true
            }
        },
        delGood(good){
            good.countBasket -= 1
            if(good.countBasket == 0) this.$store.state.basket = this.$store.state.basket.filter(item => item.id !== good.id)
            if(!this.$store.state.basket[0]) this.pay = false
        }
    },
    mounted(){
        if(!this.$store.state.basket[0]) this.pay = false
        else this.pay = true
    }
}
</script>

<style scoped>
.purchase{
    min-width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.button_pay{
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}
</style>