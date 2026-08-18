<script setup>
    import { itemList } from './Store';
    import { ref } from 'vue';
    const txtId = ref(0);
    const txtName = ref('');
    const txtPrice = ref(0)
    const addItem = () =>{
        itemList.value.push(
            {
                id : txtId,
                name : txtName,
                price : txtPrice
            }
        )
    }
</script>
<template>
    <div class="frm">
        <label for="">ID</label>
        <input type="text" name="" id="" v-model="txtId">
        <label for="">Name</label>
        <input type="text" name="" id="" v-model="txtName">
        <label for="">Price</label>
        <input type="number" name="" id="" v-model="txtPrice">
        <button @click="addItem">Post</button>
    </div>
</template>
<style scoped>
    button{
        padding: 9px;
        cursor: pointer;
    }
    input{
        padding: 9px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .frm{
        width: 600px;
        box-shadow: 1px 1px 3px #888;
        margin: auto;
        top: 18px;
        display: flex;
        flex-direction: column;
        padding: 18px;
        row-gap: 6px;
        border-radius: 4px;
        margin-top: 5%;
    }
</style>