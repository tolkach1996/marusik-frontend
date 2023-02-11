<template>
    <div class="purchase">
        <Goods
            v-for="good in goods"
            :good="good"
            :key="good.id"
        />
    </div>
</template>

<script>
import Goods from './Goods.vue';
//import Goodstest from './goodstest.vue'

export default {
    components:{Goods},
    props: {
        goods: {
            type: Array,
            required: true,
        },
    }
}
</script>

<style>
.purchase{
    display: flex;
    flex-direction: row;
    max-width: 850px;
    flex-wrap: wrap;
}
</style>