<template lang="pug">
svg(
  xmlns='http://www.w3.org/2000/svg'
  xmlns:xlink='http://www.w3.org/1999/xlink'
  version="1.1"
  width="24"
  height="24"
  viewBox="0 0 24 24")
  path(
    :fill='color'
    :d='importedIcon')
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  computed: {
    importedIcon() {
      const icon = import(`../../utils/icons/${this.name}`);
      return icon;
    },
  },
};
</script>

<style lang="sass" scoped>

</style>
