<template>
    <div class="frm">
        <label>User name:</label>
        <input type="text" v-model="txtName">
        <label>Password:</label>
        <input type="password" v-model="txtPass">
        <label>Role:</label>
        <select v-model="txtRole">
            <option value="0"></option>
            <option value="1">FrontEnd Developer</option>
            <option value="2">BackEnd Developer</option>
            <option value="2">Full-stack Developer</option>
        </select>
        <label>Skill:</label>
        <input type="text" v-model="txtSkill" @keypress="addSkill">
        <ul>
            <li v-for="(skill, i) in skillList" :key="i" @click="removeSkill(i)">{{ skill }}</li>
        </ul>
        <div>
            <input type="checkbox" v-model="txtTerm">
            <span>Acept Term and Condition</span>
        </div>
        <h1>
            {{ txtName }}
        </h1>
        <h1>
            {{ txtPass }}
        </h1>
    </div>
</template>
<script>
    export default{
        methods :{
            removeSkill(i){
                this.skillList.splice(i,1);
                
            },
            addSkill(e){
                if(e.code == 'Enter'){
                    this.skillList.push(this.txtSkill)  
                }  
            }
        },
        data(){
            return{
                txtName : '',
                txtPass : '',
                txtRole : '',
                txtSkill : '',
                txtTerm : true,
                skillList : []
            }
        }
    }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .frm{
        width: 600px;
        padding: 9px;
        box-shadow: 1px 1px 6px dimgray;
        margin: auto;
        margin-top: 9px;
        display: flex;
        flex-direction: column;
    }

    .frm input, .frm select{
        padding: 8px;
        box-sizing: border-box; 
        border: 1px solid #ccc;
    }

    ul{
        display: flex;
        gap: 6px;
    }

    ul li{
        padding: 9px;
        background-color: crimson;
        cursor: pointer;
        border-radius: 6px;
        color: white;
    }
</style>