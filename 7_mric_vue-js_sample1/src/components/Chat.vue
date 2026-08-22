<script setup>
    import { tmpItem } from './Store';
    const remvoveChat = (i) =>{
        tmpItem.value.splice(i, 1);
    }
</script>
<template>
    <div class="chat-container">
        <div class="chat-box" v-for="(item, i) in tmpItem" :key="i">
            <div class="header">
                <img :src="item.img2" alt="">
                <span>{{item.name}}</span>
                <i class="fa fa-times" @click="remvoveChat(i)"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .chat-box .header i:hover{
        opacity: 0.7;
    }
    .chat-box .header i{
        position: absolute;
        top: 50%;
        right: 9px;
        transform: translate(0, -50%);
        cursor: pointer;
    }

    .chat-box .header img{
        width: 39px;
        height: 39px;
        object-fit: cover;
        border-radius: 50%;
    }
    .chat-box .header{
        display: flex;
        align-items: center;
        background-color: rgba(0, 128, 0, 0.174);
        gap: 6px;
        padding: 6px;
        position: relative;
    }

    .chat-box{
        width: 270px;
        height: 390px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 1px 1px 6px #888;
        overflow: hidden;
    }

    .chat-container{
        position: fixed;
        bottom: 9px;
        right: 320px;
        /* background-color: green; */
        display: flex;
        gap: 9px;
    }
</style>