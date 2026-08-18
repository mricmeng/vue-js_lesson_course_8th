<script setup>
    import { itemList, totalData } from './Store';
    import { ref, onMounted } from 'vue';
    const txtId = ref(1);
    const txtName = ref('');
    const txtPrice = ref(0)
    const getTotal = () =>{
        totalData.value = 0;
        itemList.value.forEach( (el) =>{
            totalData.value += el.price
        });
    }
    const addItem = () =>{
        if(txtName.value == ''){
            alert('Please input name');
            document.getElementById('txtName').focus();
            return
        }
        itemList.value.push(
            {
                id : txtId.value,
                name : txtName.value,
                price : txtPrice.value
            }
        )
        getAutoId();
        txtName.value = '';
        txtPrice.value = 0;
        document.getElementById('txtName').focus();
        getTotal();
    }
    const getAutoId = () =>{
        txtId.value = itemList.value.length + 1;
    }
    onMounted( () =>{
        getAutoId();
    });
</script>
<template>
    <div class="frm">
        <label for="">ID</label>
        <input type="text" v-model="txtId">
        <label for="">Name</label>
        <input type="text" v-model="txtName" id="txtName">
        <label for="">Price</label>
        <input type="number" v-model="txtPrice">
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