import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login.vue';

// const About = () => import('./components/About.vue');
import RentedItems from './components/views/rentals/RentedItems.vue';
import RentedItemView from './components/views/rentals/RentedItemView.vue';
import RentalCreate from './components/views/rentals/RentalCreate.vue';
import Rentals from './components/views/rentals/Rentals.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'login',
      component: Login,
    },
    {
      path: '/rentals',
      component: Rentals,
      children: [
        {
          path: 'items',
          name: 'items',
          component: RentedItems,
        },
        {
          path: 'create',
          name: 'create-item',
          component: RentalCreate,
        }, {
          path: ':id',
          name: 'rented-item',
          component: RentedItemView,
        },
      ],
    },
  ],
});
