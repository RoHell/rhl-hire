<template lang="pug">
  .rented-items
    h1 Lista wypożyczeń
    rented-item(
      v-for="rentedItem in rentedItemsList"
      :key="rentedItem.id"
      :equipment="rentedItem.equipment"
      :rentier="rentedItem.rentier"
      :timing="rentedItem.timing"
      :payment="rentedItem.payment"
      :comment="rentedItem.payment"
    )
</template>

<script>
import RentedItem from './RentedItem.vue';
import rentedItemsList from '../utils/mocks/rentedItemsList';

export default {
  components: {
    RentedItem,
  },
  data() {
    return {
      rentedItemsList,
    };
  },
};
</script>

<style lang="sass" scoped>
</style>
