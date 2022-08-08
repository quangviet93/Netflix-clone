import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.MUTATE_SET_ALL_MOVIE]: (state, payload) => {
    state.allMovie = payload;
  },
};

export default mutations;
