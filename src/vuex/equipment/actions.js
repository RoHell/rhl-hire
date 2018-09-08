import constants from './constants';

export default {
  createItem: ({ commit }, createdItem) => {
    commit(constants.CREATE_ITEM, createdItem);
  },
  addItem: ({ commit }, createdItem) => {
    commit(constants.ADD_ITEM, createdItem);
  },
};
