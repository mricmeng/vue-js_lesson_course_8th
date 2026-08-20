<script setup>
    import { ref } from 'vue';
    import { itemList } from './Store';
    const hideShowSubMenu = (item) =>{
        item.isShow = !item.isShow   
    }
</script>

<template>
    <div class="col-xxl-3 col-xl-3 left-menu">
        <ul>
            <li v-for="(item, i) in itemList" :key="i">
                <a @click="hideShowSubMenu(item)">
                    <span>{{item.name}}</span>
                    <i class="fa-solid" :class="{'fa-plus' : !item.isShow, 'fa-minus' : item.isShow}"></i>
                </a>
                <ul class="sub-menu" v-if="item.isShow">
                    <li v-for="(item2, i2) in item.sub" :key="i2">
                        <a href="">{{item2}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .left-menu ul li .sub-menu a:hover{
        background-color: rgba(1, 111, 1, 0.175);
        color: black;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.356);
        width: 90%;
        border-radius: 0px 88px 088px 70px;
        margin-left: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .left-menu ul li .sub-menu a{
        color: green;
    }

    .left-menu ul li .sub-menu{
        width: 90%;
        background-color: #eee;
        margin-left: 5%;
        box-shadow: 1px 1px 9px rgba(0, 0, 0, 0.323);
        /* display: none; */
    }

    .left-menu ul li a:hover{
        background-color: lightgray;
        color: rgba(0, 128, 0, 0.758);
    }

    .left-menu ul li a{
        display: flex;
        padding: 15px;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        color: white;
        cursor: pointer;
    }

    .left-menu ul{
        background-color: green;
    }

    .left-menu{
        padding: 0 5px;
        height: 450px;
        z-index: 1;
    }
</style>