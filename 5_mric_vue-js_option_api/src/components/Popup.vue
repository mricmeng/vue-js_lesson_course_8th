<template>
    <Teleport to="body">
        <div class="popup">
        <div class="frm">
            <h1>{{header}}</h1>
            <p>{{ content }}</p>
            <button @click="closePopup">Close</button>
            <div>
                <slot name="h2"></slot>
            </div>

            <slot></slot>
        </div>
    </div>
    </Teleport>
    
</template>
<script>
    export default{
        methods :{
            closePopup(){
                this.$emit('close')
            }
        },
        props : [
            'header',
            'content'
        ],
        data(){
            return{
                txt : 'Hello'
            }
        }
    }
</script>
<style scoped>

    *{
        margin: 0;
        padding: 0;
    }

    .popup{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.239);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .frm{
        width: 600px;
        height: 300px;
        background-color: white;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>