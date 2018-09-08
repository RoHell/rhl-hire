<template lang="pug">
  .login
    h2.login__title Rozpocznij wypożyczanie
    .login__authentication
      button(@click="login") Start
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    login() {
      this.$router.push({ name: 'items' });
    },
  },
};
</script>

<style lang="sass" scoped>
  .login
    display: flex
    flex-direction: column
    align-items: center
    .login__title
    .login__authentication
      display: flex
      justify-content: center
      align-items: center
      button
</style>
