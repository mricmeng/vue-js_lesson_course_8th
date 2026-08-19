<script setup>
    import { itemList, isDrawer } from './Store';
    const showDrawer = () =>{
        isDrawer.value = true;
    }
</script>

<template>
    <div class="container-fluid menu-bar">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 menu">
                    <ul>
                        <li @click="showDrawer">
                            <a>
                                <i class="fa-solid fa-bars"></i>
                            </a>
                        </li>
                        <li  v-for="(item ,i) in itemList" :key="i">
                            <a href="">{{ item.name }}</a>
                            <ul class="sub-menu">
                                <li v-for="(sub, i2) in item.sub" :key="i2">
                                    <a href="">{{ sub }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import '../assets/styles/menu.css'
</style>