import actionTypes from './actionTypes';
import mutationTypes from './mutationTypes';

const actions = {
  [actionTypes.ACT_LOGIN]: ({ commit }, payload) => {
    commit(mutationTypes.MUTATE_LOGIN, payload);
  },
  [actionTypes.ACT_LOGOUT]: ({ commit }) => {
    commit(mutationTypes.MUTATE_LOGOUT);
  },
  [actionTypes.ACT_SET_USER]: ({ commit }, payload) => {
    commit(mutationTypes.MUTATE_SET_USER, payload);
  }
}

export default actions;
