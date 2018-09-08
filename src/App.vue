<template lang="pug">
  #app
    nav-bar
    main-content
      router-view
</template>

<script>
import navBar from './components/navBar.vue';
import mainContent from './components/mainContent.vue';

export default {
  components: {
    navBar,
    mainContent,
  },
  data() {
    return {
    };
  },
};
</script>


<style lang="sass">
html, body
  margin: 0
  padding: 0
html
  *
    box-sizing: border-box
body
#app
  font-family: 'Roboto', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  display: flex
  flex-direction: column
  align-items: center
</style>
