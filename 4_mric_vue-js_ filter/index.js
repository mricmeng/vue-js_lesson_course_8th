
//Vue-js
const app = Vue.createApp({
    data(){
        return{
            itemList : [
                "red", "green", "blue", "yellow"
            ]
        }
    },
    methods:{
        //
    },
    computed:{
        filterItem(){
            return this.itemList.filter(el => el =='red')
        }
    }
});
app.mount('#app');