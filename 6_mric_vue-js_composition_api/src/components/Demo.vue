<script setup>
    import { ref } from 'vue';
    const txt = ref("Macbook Pro");
    const isShow = ref(true);
    const isActive = ref(true);
    const img = ref('/src/assets/img/1.jpg');
    const img1 = '/src/assets/img/1.jpg';
    const img2 = '/src/assets/img/2.jpg';
    const itemList = ['html', 'css', 'js'];
    const setText = () =>{
        txt.value = 'Vue-js';
        // console.log(txt);  
    }

    const showDemo = () =>{
        isShow.value = !isShow.value;
    }

    const setActive = () =>{
        isActive.value = !isActive.value;
    }

    const setNewImg = () =>{
        img.value = img2;
    }

    const setOldImg = () =>{
        img.value = img1;
    }
</script>

<template>
    <button @click="setText">Set text</button>
    <button @click="showDemo">Hide/show</button>
    <button @click="setActive">CSS</button>
    <div class="demo" v-if="isShow" :class="{ 'active' : isActive }">
        {{ txt }}
    </div>
    <img :src="img" alt="" @mouseover="setNewImg" @mouseleave="setOldImg">
    <!-- <ul>
        <li v-for="(item, i) in itemList" :key="i">
            {{ item }}
        </li>
    </ul> -->
</template>

<style>
    img{
        height: 300px;
    }
    .demo{
        width: 600px;
        height: 300px;
        background-color: saddlebrown;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        color: white;
        font-style: italic;
    }
    .active{
        background-color: hotpink;
    }
</style>