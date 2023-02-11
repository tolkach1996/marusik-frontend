<template>
    <router-view></router-view>
    <purchese :goods = "goodsData"/>
</template>

<script>
import Purchese from './components/Purchese.vue';
import { goodsData } from './data';

export default {
    components:{Purchese},
    data(){
        return{
            totalRecords: 0,
            goodsData : goodsData
        }
    }
}

</script>



<style>
#app{
    background: var(--tg-theme-bg-color);
    color: var(--tg-theme-text-color);
}
</style>
