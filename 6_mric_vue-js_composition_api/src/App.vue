<script setup>
  import Demo from './components/Demo.vue';
  import imgList from './components/ImgList.vue';
  import Popup from './components/Popup.vue';
  import { ref } from 'vue';
  const isShow = ref(false);
  const showForm = () =>{
    isShow.value = !isShow.value;
  }
  import Frm from './components/Frm.vue';
  import ListData from './components/ListData.vue';
</script>


<template>
  
  <!-- <button @click="showForm">showForm</button> -->
  <!-- <Demo/> -->
  <!-- <imgList/> -->
  <!-- <Popup v-if="isShow" header="Props Header" body="Props Body" @close="showForm"/> -->
  <Frm/>
  <ListData/>
</template>




