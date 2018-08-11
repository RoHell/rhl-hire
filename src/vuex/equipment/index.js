import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
import * as constants from './constants';
import * as state from './state';

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
  constants,
};
