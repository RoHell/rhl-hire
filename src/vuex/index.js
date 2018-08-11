import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from '../plugins/logger';

import CoreModule from './core/index';
import EquipmentModule from './equipment/index';
import UsersModule from './users/index';

Vue.use(Vuex);

const debug = false; //process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    core: CoreModule,
    equipment: EquipmentModule,
    users: UsersModule,
  },
  // strict: debug,
  plugins: debug ? [createLogger()] : []
});
