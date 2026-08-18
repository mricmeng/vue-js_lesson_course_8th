<script setup>
    const props = defineProps(
        [
            'header',
            'body'
        ]
    );
    const emit = defineEmits(
        [
            'close'
        ]
    )
    const closeForm = () =>{
        emit('close')
    }
</script>
<template>
    <div class="popup">
        <div class="frm">
            <h1>{{props.header}}</h1>
            <p>{{props.body}}</p>
            <button @click="closeForm">Close</button>
        </div>
    </div>
</template>
<style scoped> 
    .popup button:hover{
        opacity: 1;
    }
    .popup button{
        position: absolute;
        padding: 8px 15px;
        top:0;
        right:0;
        background-color: red;
        border: 1px solid red;
        color: white;
        border-radius: 8px;
        font-family: Cambria, Cochin, Georgia,;
        font-size:18px;
        font-weight: bold;
        opacity: 0.7;
    }
    .frm{
        width: 600px;
        height: 300px;
        margin: auto;
        margin-top: 10%;
        background-color: white;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    .popup{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.174);
    }

    *{
        margin: 0;
        padding: 0;
    }
</style>