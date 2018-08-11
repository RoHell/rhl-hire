import constants from './constants'

export const setUser = async ({ commit, getters }, user) => {
  commit(constants.SET_USER, user);
}