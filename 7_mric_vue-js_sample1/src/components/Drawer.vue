<script setup>
    import { ref } from 'vue';
    import { itemList, isDrawer } from './Store';
</script>

<template>
    <div class="drawer-box " :class = "{'isDrawer' : isDrawer}">
        <ul>
            <li v-for="(item, i) in itemList" :key="i">
                <a href="">{{ item.name }}</a>
            </li>
            
        </ul>
    </div>
</template>

<style scoped>
    @import '../assets/styles/menu.css';
</style>