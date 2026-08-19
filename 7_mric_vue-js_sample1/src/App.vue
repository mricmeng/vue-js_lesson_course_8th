<script setup>
  import MenuBar from './components/MenuBar.vue';
  import Drawer from './components/Drawer.vue';
  import Popup from './components/Popup.vue';
  import { isDrawer } from './components/Store.js';
</script>

<template>
  <MenuBar/>
  <Drawer/>
  <Popup v-if="isDrawer"/>
</template>