import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login.vue';

// const About = () => import('./components/About.vue');
import RentedItems from './components/RentedItems.vue';
import SingleRentalView from './components/SingleRentalView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/rentals',
      name: 'rentals',
      component: RentedItems,
      children: [
        {
          path: ':id',
          name: 'singleRental',
          component: SingleRentalView,
        },
      ],
    },
  ],
});
