<script setup>
  import MenuBar from './components/MenuBar.vue';
  import Drawer from './components/Drawer.vue';
  import Popup from './components/Popup.vue';
  import HeroSection from './components/HeroSection.vue';
  import { isDrawer } from './components/Store.js';
  import CityList from './components/CityList.vue';
  import ContainerItem from './components/ContainerItem.vue';
  import FriendList from './components/FriendList.vue';
  import Chat from './components/Chat.vue';
</script>

<template>
  <MenuBar/>
  <CityList />
  <HeroSection/>
  <ContainerItem/>
  <Drawer/>
  <Popup v-if="isDrawer"/>
  <FriendList/>
  <Chat/>
</template>