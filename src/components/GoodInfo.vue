<template>
    <div class="main" v-if="show" @click="showInfo">
        <div class="content" @click.stop>
            Контент с информацией по товару {{ good.name }}
        </div>
    </div>

</template>

<script>
export default {
    props:{
        show:{
            type: Boolean,
            default: false,
        },
        good:{
            type: Object,
            required: true,
        }
    },
    methods: {
        showInfo(){
            this.$emit('update:show', false)
        }
    },
}
</script>

<style scoped>
.main{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
}
.content{
    margin: auto;
    min-width: 200px;
    min-height: 50px;
background-color: #111;
color: #fff;
}

</style>