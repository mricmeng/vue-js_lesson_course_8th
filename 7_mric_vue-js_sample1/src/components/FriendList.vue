<script setup>
    import { productList, tmpItem } from './Store';
    import { ref } from 'vue';
    const hideShow = ref(false);
    const hideShowFriendList = () =>{
        hideShow.value = !hideShow.value;
    }
    const addChat = (data) =>{
        const dplId = tmpItem.value.filter( el => el.id == data.id);
        if(dplId.length>0){
            return;
        }
        tmpItem.value.push(
            {
                id : data.id,
                name : data.name,
                img2 : data.img2
            }
        )
        console.log(tmpItem.value);
        
    }
</script>

<template>
    <div class="friend-box" :class="{'hide' : hideShow}">
        <h1 @click="hideShowFriendList()">Friend List</h1>
        <ul>
            <li v-for="(data, i) in productList" :key="i" @click="addChat(data)">
                <img :src="data.img2" alt="">
                <span>{{ data.name }}</span>
            </li>
        </ul>
    </div>
</template>

<style  scoped>
    .friend-box ul li:hover{
        background-color: rgba(0, 128, 0, 0.143);
    }

    .friend-box ul li{
        display: flex;
        align-items: center;
        gap: 9px;
        padding: 6px;
        
    }

    .friend-box ul li img{
        width: 39px;
        height: 39px;
        border-radius: 50%;
        border: 1px solid #ccc;
    }

    .friend-box h1{
        font-size: 15px;
        background-color: #eee;
        height: 39px;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        padding-left: 6px;
        justify-content: center;
    }

    .friend-box{
        position: fixed;
        bottom: 9px;
        right: 9px;
        background-color: white;
        width: 300px;
        height: 450px;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 1px 1px 6px #888;
        overflow-y: scroll;
        cursor: pointer;
    }

    .hide{
        height: 39px;
        overflow: hidden;
    }

</style>