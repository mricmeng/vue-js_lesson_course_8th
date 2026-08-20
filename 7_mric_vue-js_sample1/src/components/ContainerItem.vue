<script setup>
    import { itemList } from './Store';
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-xxl-3 col-xl-3 item-box" v-for="(item, i) in itemList" :key="i">
                <div class="img-box">
                    <img :src="item.img2" alt="">
                </div>
                <div class="txt-box">
                    <h1>{{item.name}}</h1>
                    <span>$ {{ item.price }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import '../assets/styles/containerItem.css';
</style>