<template>
  <div id="app">
    <Head/>
   
    <router-view :isFloatingPage="true"></router-view>
  

  </div>
</template>

<script>
import './css/style.css';
import Head from './components/HeaderComponent.vue';


export default {

  name: 'App',
  components: { 
    Head,
  }
}
</script>

<style>
.floating-page-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.5);
}


</style>
