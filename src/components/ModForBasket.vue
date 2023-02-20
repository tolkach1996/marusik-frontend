<template>
    <div class="main" v-if="mod.count>0">
        <router-link :to="'/product/'+good.id">
            <div class="main_content" >
                <div class="img">
                    <img :src="good.img[0].src" alt="">
                </div>
                <div class="content">
                    <div class="content_price">{{ good.priice }}₽</div>
                    <div class="content_name"> <b> {{ good.name }}</b></div>
                    <div class="content_name">{{ good.info }}</div>
                    <div class="content_name">Размер: {{ good.modification }}</div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import AddDelButton from './AddDelButton.vue'
import GoodInfo from './GoodInfo.vue'

export default {
    components:{AddDelButton,GoodInfo},
    props: {
        mod: {
            type: Array,
            required: true,
        }
    },
    mounted(){
        for(let good of this.$store.state.basket){
            this.goods.push(good)
        }
    }
}
</script>

<style>

</style>