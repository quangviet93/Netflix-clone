import actionTypes from './actionTypes';
import mutationTypes from './mutationTypes';

const actions = {
  [actionTypes.ACT_GET_ALL_MOVIE]: ({ commit }, payload) => {
    commit(mutationTypes.MUTATE_SET_ALL_MOVIE, payload);
  },
};

export default actions;
