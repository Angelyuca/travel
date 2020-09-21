<template>
  <div id="app">
    <v-app>
      <div class="header"></div>

      <router-view/>
    </v-app>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  body {
    margin: 0;
  }

  .header {
    background: #EEEEEE;
    height: 88px;
    width: 100%;
    margin-bottom: 53px;
  }
</style>
