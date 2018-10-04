<template lang="pug">
  .rented-item
    .rented-item__equipment
      .rented-item__equipment__type {{ equipment.type }}
      .rented-item__equipment__accessories
        .rented-item__equipment__accessories__vests {{ equipment.vests }}
        .rented-item__equipment__accessories__paddles {{ equipment.paddles }}
    .rented-item__details
      .rented-item__details__rentier {{ rentierFullName }}
      .rented-item__details__timing {{ timing.start }}
      .rented-item__details__payment
        .rented-item__details__payment__fee {{ computedPaymentFee }}
        .rented-item__details__payment__paid {{ computedPaymentPaid }}
        .rented-item__details__payment__toPay {{ computedPaymentToPay }}
</template>

<script>
export default {
  props: {
    rentier: {
      type: Object,
      default: () => ({}),
    },
    timing: {
      type: Object,
      default: () => ({}),
    },
    equipment: {
      type: Object,
      default: () => ({}),
    },
    payment: {
      type: Object,
      default: () => ({}),
    },
    comment: {
      type: String,
      default: '',
    },
  },
  data() {
    return {

    };
  },
  computed: {
    isRentierNameProvided() {
      return this.rentier && (this.rentier.firstName || this.rentierLastName);
    },
    rentierFullName() {
      return this.isRentierNameProvided ? `${this.rentier.firstName} ${this.rentierLastName}` : 'Anonimowy';
    },
    computedPaymentFee() {
      return this.payment && this.payment.fee ? `${this.payment.fee} PLN` : '';
    },
    computedPaymentPaid() {
      return this.payment && this.payment.paid ? `${this.payment.paid} PLN` : '';
    },
    computedPaymentToPay() {
      return this.payment && this.payment.toPay ? `${this.payment.toPay} PLN` : '';
    },
  },
};
</script>

<style lang="sass" scoped>
.rented-item
  width: 100%
  display: flex
  border-bottom: 1px solid #515151
  margin-bottom: 20px
  .rented-item__equipment
    width: 30%
    display: flex
    flex-direction: column
    border-right: 1px solid #515151
    .rented-item__equipment__type
      padding: 10px
      border-bottom: 1px solid #515151
      flex: 1
    .rented-item__equipment__accessories
      display: flex
      .rented-item__equipment__accessories__vests
        border-right: 1px solid #515151
      .rented-item__equipment__accessories__vests,
      .rented-item__equipment__accessories__paddles
        padding: 10px
        flex: 1
  .rented-item__details
    width: 70%
    display: flex
    flex-direction: column
    padding: 10px
    .rented-item__details__rentier
      display: flex
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      padding-bottom: 10px
    .rented-item__details__timing
      padding-bottom: 10px
    .rented-item__details__payment
      display: flex
      justify-content: space-between
      align-items: center
</style>
