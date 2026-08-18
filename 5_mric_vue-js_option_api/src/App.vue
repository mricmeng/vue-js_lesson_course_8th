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

<!-- <template>
    <button @click="showPopup()">click</button>

    <Popup v-if="isActive" :header="txtH" content="body"
    @close="closePopup">
        <template v-slot:h2>
            <h2>Slot11</h2>   
        </template>

        <h3>Slot22</h3>
    
    </Popup>

    <NavBar/>
    <h1>{{txt}}</h1>
    <LeftMenu/>
    
</template> -->
<template>
    <Form/>
</template>

<script>
    import Form from './components/Form.vue';
    import NavBar from './components/NavBar.vue'; 
    import Popup from './components/Popup.vue';
    import LeftMenu from './components/leftMenu.vue';
    export default{
        data(){
            return{
                txt : "Hell Mac",
                txtH : "Dynamic Header",
                isActive : false,
            }
        },
        methods :{
            showPopup(){
                this.isActive = true;
            },
            closePopup(){
                this.isActive = false;
            }
        },
        components : {
            NavBar,
            LeftMenu,
            Popup,
            Form
        }
    }
</script>
<style scoped>
    button{
        padding: 15px;
    }
</style>
