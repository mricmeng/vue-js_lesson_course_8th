
//Vue-js
const app = Vue.createApp({
    data(){
        return{
            isShow : true,

            itemList : [
                "red", "green", "blue", "yellow"
            ],

            itemObj : [
                {
                    id:1,
                    name: 'html',
                    img: 'img/1.jpg',
                    img2: 'img/4.jpg',
                    img1: 'img/1.jpg',
                    isActive : false,
                },
                {
                    id:2,
                    name: 'css',
                    img: 'img/2.jpg',
                    img2: 'img/5.jpg',
                    img1: 'img/2.jpg',
                    isActive : false,
                },
                {
                    id:3,
                    name: 'js',
                    img: 'img/3.jpg',
                    img2: 'img/6.jpg',
                    img1: 'img/3.jpg',
                    isActive : false,
                },
            ]

        }
    },
    methods:{
        clickLi(i){
            this.itemObj[i].isActive = !this.itemObj[i].isActive
        },

        oldImg(i){
            this.itemObj[i].img = this.itemObj[i].img1  
        },

        newImg(i){
            this.itemObj[i].img = this.itemObj[i].img2 
        },

        hideShow(){
            this.isShow = !this.isShow; 
       }

    }
});
app.mount('#app');