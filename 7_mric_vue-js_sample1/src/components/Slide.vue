<script setup>
    ref
    import { ref } from 'vue';
    import { itemList } from './Store';
    const slideInd = ref(0);

    const nextSlide = () =>{
        slideInd.value++;
        if(slideInd.value >= itemList.value.length){
            slideInd.value = 0;
        }
    }

    const backSlide = () =>{
        slideInd.value--;
        if(slideInd.value<0){
            slideInd.value = itemList.value.length -1;
        }
    }

    const clickSlide = (i) =>{
        slideInd.value = i 
    }

    var myAutoSlide = setInterval(nextSlide, 3690);
    const stotAutoSlide = () =>{
        clearInterval(myAutoSlide);
    }
    const runAutoSlide = () =>{
        myAutoSlide = setInterval(nextSlide, 3690);
    }
</script>

<template>
    <div class="col-xxl-9 col-xl-9 slide-container">
        <div class="slide-box" @mouseover="stotAutoSlide" @mouseleave="runAutoSlide">
            <div class="slide" v-for="(item, i) in itemList" :key="i" v-show="i == slideInd">
                <img :src="item.img" alt="">
                <span> {{ i+1 }} / {{ itemList.length }}</span>
            </div>
            <div class="btnSlide btn-next" @click="nextSlide">
                Next
            </div>
            <div class="btnSlide btn-back" @click="backSlide">
                Back
            </div>
            <ul class="pagination">
                <li v-for="(item, i) in itemList" :key="i" 
                :class="{'active' : i == slideInd }"
                @click="clickSlide(i)">
                    {{ i +1 }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .btn-back:hover{
        opacity: 0.7;
        border-radius: 80px 10px 80px 10px;
    }

    .btn-back{
        left: 0;
    }

    .btn-next:hover{
        opacity: 0.7;
        border-radius: 10px 80px 10px 80px;
    }

    .btn-next{
        right: 0;
    }

    .btnSlide{
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        padding: 9px 18px;
        background-color: rgba(0, 128, 0, 0.544);
        color: white;
        cursor: pointer;
    }

    .slide-box ul li.active{
        background-color: green;
        color: white;
    }

    .slide-box ul li:hover{
        background-color: lightgreen;
        color: white;
    }

    .slide-box ul li{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slide-box ul{
        position: absolute;
        left: 50%;
        bottom: 9px;
        transform: translate(-50%, 0);
        background-color: rgba(105, 105, 105, 0.345);
        padding: 3px;
        font-size: 12px;
        display: flex;
        gap: 9px;
        border-radius: 100px;
        cursor: pointer;
    }

    .slide-box .slide img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slide-box .slide span{
        position: absolute;
        top: 3px;
        left: 3px;
        padding: 9px 25px;
        background-color: rgba(0, 128, 0, 0.279);
        border-radius: 10px 80px 10px 60px;
        color: white;
        font-size: 15px;
    }

    .slide-box .slide{
        width: 100%;
        height: 100%;
        position: relative;
    }

    .slide-box{
        width: 100%;
        height: 100%;
        background-color: saddlebrown;
        display: flex;
        position: relative;
        gap: 6px;
    }

    .slide-container{
        padding: 0 5px;
        height: 500px;
        /* background-color: skyblue */
    }
</style>