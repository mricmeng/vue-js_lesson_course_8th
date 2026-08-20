<script setup>
    import { productList } from './Store';
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-xxl-3 col-xl-3 item-box" v-for="(product, i) in productList" :key="i">
                <div class="img-box">
                    <img :src="product.img2" alt="">
                </div>
                <div class="txt-box">
                    <h1>{{product.name}}</h1>
                    <span>$ {{ product.price }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import '../assets/styles/containerItem.css';
</style>