<script setup>
  import MenuBar from './components/MenuBar.vue';
  import Drawer from './components/Drawer.vue';
  import Popup from './components/Popup.vue';
  import HeroSection from './components/HeroSection.vue';
  import { isDrawer } from './components/Store.js';
  import CityList from './components/CityList.vue';
</script>

<template>
  <MenuBar/>
  <HeroSection/>
  <CityList />
  <Drawer/>
  <Popup v-if="isDrawer"/>
</template>