<template>
  <!--<div id="app">
    <img width="25%" src="./assets/logo.png">
    <Item />
  </div> -->
  <ion-app>
    <router-view></router-view>
  </ion-app>
</template>
<script>
import Item from "./components/Item";

export default {
  name: "App",
  components: {
    Item
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
