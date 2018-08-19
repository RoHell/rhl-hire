<template lang="pug">
.nav-bar
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
  top: 0
  background: rgba(255, 255, 255, 0.9)
  .nav-bar__logo
    position: absolute
    left: 18px
  .nav-bar__time
    position: absolute
    right: 18px
    font-family: monospace
    font-size: 24px
    color: #515151
</style>
