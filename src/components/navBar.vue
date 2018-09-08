<template lang="pug">
.nav-bar
  .nav-bar__menu menu
  .nav-bar__logo logo
  .nav-bar__time
    clock
</template>

<script>
import menuItems from '../utils/constants/menuItems';
import clock from './commons/clock.vue';

export default {
  components: { clock },
  data() {
    return {
      menuItems,
    };
  },
};
</script>

<style lang="sass" scoped>
.nav-bar
  height: 40px
  width: 100%
  border-bottom: 1px solid #515151
  position: fixed
  display: flex
  align-items: center
  justify-content: space-between
  top: 0
  background: rgba(255, 255, 255, 0.9)
  padding: 0 10px
  .nav-bar__logo
    padding: 0 10px
  .nav-bar__time
    font-family: monospace
    font-size: 24px
    color: #515151
</style>
