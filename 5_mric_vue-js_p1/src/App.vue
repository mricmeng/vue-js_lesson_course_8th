<!-- <template>
    <div>
        <label for="">Num1</label>
        <input type="text" name="" id="" ref="txt1">
        <label for="">Num2</label>
        <input type="text" name="" id="" ref="txt2">
        <label for="">Total</label>
        <input type="text" name="" id="" ref="total">
        <button @click="sum()">+</button>
    </div>
</template>
<script>
    //option api
    export default{
        data(){
            return{
                txt :'Hello world Yy'
            }
        },
        methods:{
            sum(){
                const txt1 = this.$refs.txt1;
                const txt2 = this.$refs.txt2;
                const total = this.$refs.total;
                total.value = parseFloat(txt1.value) + parseFloat(txt2.value)
            }
        },
        computed:{
            //
        }
    }
</script>
<style scoped>
    input{
        padding: 15px;
    }
</style> -->

<template>
    <button @click="showPopup()">click</button>
    <Popup v-if="isActive" header="Hello header" content="body"/>
    <NavBar/>
    <h1>{{txt}}</h1>
    <LeftMenu/>
    
</template>
<script>
    import NavBar from './components/NavBar.vue'; 
    import Popup from './components/Popup.vue';
    import LeftMenu from './components/leftMenu.vue';
    export default{
        data(){
            return{
                txt : "Hell Mac",
                isActive : false,
            }
        },
        methods :{
            showPopup(){
                this.isActive =true
            }
        },
        components : {
            NavBar,
            LeftMenu,
            Popup
        }
    }
</script>
<style scoped>
    button{
        padding: 15px;
    }
</style>
