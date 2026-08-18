<script setup>
    import { ref } from 'vue';
    import {itemList } from './Store';
</script>
<template>
    <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in itemList" :key="i">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
            </tr>
            
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2">Total</td>
                <td>10</td>
            </tr>
        </tfoot>
    </table>
</template>
<style scoped>
    table tr td{
        padding: 6px;
        border: 1px solid #ccc;
    }
    table tr th{
        padding: 6px;
        border: 1px solid #ccc;
        background-color: skyblue;
    }
    table{
        width: 70%;
        margin: auto;
        border-collapse: collapse;
        margin-top: 9px;
    }
</style>