<template>
    <div class="button" @click="goBack">
        <button class="button_back">Назад</button>
    </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.button_back{
    width: 100%;
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
}
</style>