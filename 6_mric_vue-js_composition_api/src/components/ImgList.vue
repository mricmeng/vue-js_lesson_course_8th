<script setup>
    import { ref, computed } from 'vue';
    const itemList = ref(
        [
            {
                title : 'Hermes Bag1',
                price : 3690,
                img : '/src/assets/img/1.jpg',
                img1 : '/src/assets/img/1.jpg',
                img2 : '/src/assets/img/2.jpg',
            },
            {
                title : 'Hermes Bag2',
                price : 6690,
                img : '/src/assets/img/3.jpg',
                img1 : '/src/assets/img/3.jpg',
                img2 : '/src/assets/img/4.jpg',
            },
            {
                title : 'Hermes Bag3',
                price : 9690,
                img : '/src/assets/img/5.jpg',
                img1 : '/src/assets/img/5.jpg',
                img2 : '/src/assets/img/6.jpg',
            },
            {
                title : 'Hermes Bag4',
                price : 36900,
                img : '/src/assets/img/7.jpg',
                img1 : '/src/assets/img/7.jpg',
                img2 : '/src/assets/img/8.jpg',
            },
        ]
    );
    
    const newImg = (data) =>{
        // console.log(data);
        data.img = data.img2;
    };

    const oldImg = (data) =>{
        // console.log(data);
        data.img = data.img1;
    };
    const dataList = ref(
        ['html', 'css', 'js', 'jq', 'react']
    )
    const tmpData = computed ( () =>{
        return dataList.value.filter( el => el =='html')
    });

</script>

<template>
    <div class="container">
        <ul>
            <li v-for="(data, i) in tmpData" :key="i">
                {{ data }}
            </li>
        </ul>
        <div class="item-box" v-for="(data, i) in itemList" :key="i">
            <div class="img-box" @mouseover="newImg(data)" @mouseleave="oldImg(data)">
                <img :src="data.img" alt="">
            </div>
            <div class="txt-box">
                <h1>{{data.title}}</h1>
                <p>$ {{ data.price }}</p>
            </div>
        </div>  
    </div>
</template>

<style>
    .item-box .txt-box p{
        font-size: 15px;
        text-align: center;
        color: red;
    }

    .item-box .txt-box h1{
        font-size: 22px;
        text-align: center;
    }

    .item-box .txt-box{
        width: 100%;
        height: 20%;
        background-color: #ccc;
    }

    .item-box .txt-box h1{

    }

    .item-box .img-box img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .item-box .img-box{
        width: 100%;
        height: 80%;
        background-color: black;
    }

    .item-box{
        width: 24.5%;
        height: 369px;
        /* background-color: black; */
    }

    .container{
        width: 81%;
        margin: auto;
        background-color: #eee;
        display: flex;
        gap: 10px;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    ul{
        list-style-type: none;
        width: 100%;
        display: flex;
    }

    ul li{
        padding: 18px;
        font-size: 30px;
        font-weight: bold;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>