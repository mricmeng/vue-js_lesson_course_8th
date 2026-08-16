//javaScript
document.getElementById('btn1').addEventListener('click', function(){
    document.getElementById('demo').innerHTML = "JavaScript";
});


//Vue-js
const app = Vue.createApp({
    data(){
        return{
            txt : 'Hello Vue-js',
        }
    },
    methods:{
        setText(){
            this.txt = "Hello World"
        }
    }
});
app.mount('#app');