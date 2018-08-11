<template lang="pug">
  #app
    #nav
      router-link(to='/') Home
      |  | 
      router-link(to='/about') About
    router-view
</template>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
