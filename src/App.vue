<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import "./fonts/icons.css";

export default {
  name: "App"
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f5f5f5;
  padding: 30px;
  min-height: 300px;
  border-radius: 5px;
  margin-top: 30px;
  padding-top: 20px;
}
body {
  margin: 0;
  padding: 0;
}
</style>
