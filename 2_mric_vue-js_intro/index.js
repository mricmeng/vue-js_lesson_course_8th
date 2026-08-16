
//Vue-js
const app = Vue.createApp({
    data(){
        return{
            txt : 'Hello Vue-js',

            txt2 : 'ac',

            colorList : [
                "red", "green", "blue", "yellow"
            ],

            obj : {
                id : 1,
                name : 'HTML'
            },

            price :30,

            itemList :[
                {id:1, name:'html'},
                {id:2, name:'css'}
            ],

            isActive:false,
        }
    },
    methods:{
        setText(){
           this.txt = "javaScript" ;
        },
        
        setVal(){
            this.price = 100;
        }
    }
});
app.mount('#app');